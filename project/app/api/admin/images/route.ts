import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Image from '@/models/Image';

export const dynamic = "force-dynamic";
// GET /api/admin/images - Get all images (including inactive)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const sectionId = searchParams.get('section');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * limit;
    
    let query: any = {};
    
    if (sectionId) {
      query.section = sectionId;
    }
    
    const images = await Image.find(query)
      .populate('section', 'name slug')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    
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
    console.error('Error fetching admin images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}