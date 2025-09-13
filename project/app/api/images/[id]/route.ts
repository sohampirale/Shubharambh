import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Image from '@/models/Image';
import { deleteFromCloudinary } from '@/lib/cloudinary';

export const dynamic = "force-dynamic";
// GET /api/images/[id] - Get image by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const image = await Image.findById(params.id).populate('section', 'name slug');
    
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: image
    });
  } catch (error: any) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
}

// PUT /api/images/[id] - Update image
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, description, tags, order, isActive } = body;
    
    const parsedTags = tags ? tags.split(',').map((tag: string) => tag.trim()).filter(Boolean) : [];
    
    const image = await Image.findByIdAndUpdate(
      params.id,
      { title, description, tags: parsedTags, order, isActive },
      { new: true, runValidators: true }
    ).populate('section', 'name slug');
    
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: image
    });
  } catch (error: any) {
    console.error('Error updating image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update image' },
      { status: 500 }
    );
  }
}

// DELETE /api/images/[id] - Delete image
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const image = await Image.findById(params.id);
    
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }
    
    // Delete from Cloudinary
    await deleteFromCloudinary(image.publicId);
    
    // Delete from database
    await Image.findByIdAndDelete(params.id);
    
    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete image' },
      { status: 500 }
    );
  }
}