import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Section from '@/models/Section';

export const dynamic = "force-dynamic";
// GET /api/admin/sections - Get all sections (including inactive)
export async function GET() {
  try {
    await connectDB();
    
    const sections = await Section.find({})
      .sort({ order: 1, createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: sections
    });
  } catch (error: any) {
    console.error('Error fetching admin sections:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sections' },
      { status: 500 }
    );
  }
}

// POST /api/admin/sections - Create new section (admin only)
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, slug, description, order, isActive } = body;
    
    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json(
        { success: false, error: 'Name and slug are required' },
        { status: 400 }
      );
    }
    
    // Check if slug already exists
    const existingSection = await Section.findOne({ slug });
    if (existingSection) {
      return NextResponse.json(
        { success: false, error: 'Section with this slug already exists' },
        { status: 400 }
      );
    }
    
    const section = new Section({
      name,
      slug,
      description,
      order: order || 0,
      isActive: isActive !== undefined ? isActive : true
    });
    
    await section.save();
    
    return NextResponse.json({
      success: true,
      data: section,
      message: 'Section created successfully'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating section:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create section' },
      { status: 500 }
    );
  }
}