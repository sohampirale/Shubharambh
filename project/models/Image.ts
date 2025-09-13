import mongoose, { Document, Schema } from 'mongoose';

export interface IImage extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  publicId: string;
  section: mongoose.Types.ObjectId;
  tags: string[];
  isActive: boolean;
  order: number;
  metadata: {
    width: number;
    height: number;
    format?: string;
    size?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema = new Schema<IImage>({
  title: {
    type: String,
    required: [true, 'Image title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  publicId: {
    type: String,
    required: [true, 'Cloudinary public ID is required']
  },
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: [true, 'Section is required']
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  metadata: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    format: String,
    size: Number
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
ImageSchema.index({ section: 1, isActive: 1, order: 1 });
ImageSchema.index({ tags: 1 });
ImageSchema.index({ createdAt: -1 });

export default mongoose.models.Image || mongoose.model<IImage>('Image', ImageSchema);