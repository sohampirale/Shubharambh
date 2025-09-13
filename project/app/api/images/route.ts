import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Image from '@/models/Image';
import Section from '@/models/Section';

export const dynamic = "force-dynamic";
// GET /api/images - Get all images with optional filtering
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const sectionId = searchParams.get('section');
    const sectionSlug = searchParams.get('sectionSlug');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * limit;
    
    let query: any = { isActive: true };
    
    // Filter by section ID or slug
    if (sectionId) {
      query.section = sectionId;
    } else if (sectionSlug) {
      const section = await Section.findOne({ slug: sectionSlug });
      if (section) {
        query.section = section._id;
      }
    }
    
    const images = await Image.find(query)
      .populate('section', 'name slug')
      .sort({ order: 1, createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select('title description imageUrl section tags metadata createdAt');
    
    const total = await Image.countDocuments(query);
    
    return NextResponse.json({
      success: true,
      data: images,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error: any) {
    console.error('Error fetching images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}