import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Section from '@/models/Section';
import Image from '@/models/Image';

export const dynamic = "force-dynamic";
// GET /api/sections/[id] - Get section by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const section = await Section.findById(params.id);
    
    if (!section) {
      return NextResponse.json(
        { success: false, error: 'Section not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: section
    });
  } catch (error: any) {
    console.error('Error fetching section:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch section' },
      { status: 500 }
    );
  }
}

// PUT /api/sections/[id] - Update section
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, slug, description, order, isActive } = body;
    
    const section = await Section.findByIdAndUpdate(
      params.id,
      { name, slug, description, order, isActive },
      { new: true, runValidators: true }
    );
    
    if (!section) {
      return NextResponse.json(
        { success: false, error: 'Section not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: section
    });
  } catch (error: any) {
    console.error('Error updating section:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update section' },
      { status: 500 }
    );
  }
}

// DELETE /api/sections/[id] - Delete section
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Check if section has images
    const imageCount = await Image.countDocuments({ section: params.id });
    if (imageCount > 0) {
      return NextResponse.json(
        { success: false, error: 'Cannot delete section with existing images' },
        { status: 400 }
      );
    }
    
    const section = await Section.findByIdAndDelete(params.id);
    
    if (!section) {
      return NextResponse.json(
        { success: false, error: 'Section not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Section deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting section:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete section' },
      { status: 500 }
    );
  }
}