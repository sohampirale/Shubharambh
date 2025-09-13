import mongoose, { Document, Schema } from 'mongoose';

export interface ISection extends Document {
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SectionSchema = new Schema<ISection>({
  name: {
    type: String,
    required: [true, 'Section name is required'],
    trim: true,
    maxlength: [100, 'Section name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    required: [true, 'Section slug is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create index for better query performance
SectionSchema.index({ slug: 1 });
SectionSchema.index({ isActive: 1, order: 1 });

export default mongoose.models.Section || mongoose.model<ISection>('Section', SectionSchema);