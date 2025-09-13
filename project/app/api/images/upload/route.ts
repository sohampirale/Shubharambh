import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Image from '@/models/Image';
import Section from '@/models/Section';
import { uploadToCloudinary } from '@/lib/cloudinary';

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const sectionId = formData.get('sectionId') as string;
    const tags = formData.get('tags') as string;
    const order = formData.get('order') as string;
    
    // Validate required fields
    if (!file || !title || !sectionId) {
      return NextResponse.json(
        { success: false, error: 'File, title, and section are required' },
        { status: 400 }
      );
    }
    
    // Validate section exists
    const section = await Section.findById(sectionId);
    if (!section) {
      return NextResponse.json(
        { success: false, error: 'Section not found' },
        { status: 404 }
      );
    }
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, error: 'Only image files are allowed' },
        { status: 400 }
      );
    }
    
    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }
    
    // Convert file to base64 for Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;
    
    // Upload to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(base64, `shubharambh/${section.slug}`);
    
    // Parse tags
    const parsedTags = tags ? tags.split(',').map(tag => tag.trim()).filter(Boolean) : [];
    
    // Create image record
    const image = new Image({
      title,
      description,
      imageUrl: cloudinaryResult.secure_url,
      publicId: cloudinaryResult.public_id,
      section: sectionId,
      tags: parsedTags,
      order: order ? parseInt(order) : 0,
      metadata: {
        width: cloudinaryResult.width,
        height: cloudinaryResult.height,
        format: file.type.split('/')[1],
        size: file.size
      }
    });
    
    await image.save();
    
    // Populate section data for response
    await image.populate('section', 'name slug');
    
    return NextResponse.json({
      success: true,
      data: image,
      message: 'Image uploaded successfully'
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}