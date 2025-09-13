const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// Import models
const connectDB = require('../lib/mongodb.ts').default;

// Define schemas directly since we can't import TS models in JS
const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'super_admin'], default: 'admin' },
  isActive: { type: Boolean, default: true },
  lastLogin: Date
}, { timestamps: true });

const SectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

// Hash password before saving
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
const Section = mongoose.models.Section || mongoose.model('Section', SectionSchema);

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to MongoDB
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Admin.deleteMany({});
    await Section.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create admin user
    const adminData = {
      email: process.env.ADMIN_EMAIL || 'admin@shubharambh.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      name: 'Admin User',
      role: 'super_admin',
      isActive: true
    };

    const admin = new Admin(adminData);
    await admin.save();
    console.log('👤 Created admin user:', adminData.email);

    // Create default sections
    const sectionsData = [
      {
        name: 'Weddings',
        slug: 'weddings',
        description: 'Traditional and modern wedding ceremonies with complete planning',
        order: 1,
        isActive: true
      },
      {
        name: 'Birthdays',
        slug: 'birthdays',
        description: 'Birthday parties and celebrations for all ages',
        order: 2,
        isActive: true
      },
      {
        name: 'Engagements',
        slug: 'engagements',
        description: 'Romantic engagement ceremonies and ring ceremonies',
        order: 3,
        isActive: true
      },
      {
        name: 'Decorations',
        slug: 'decorations',
        description: 'Floral decorations, rangoli, and venue setups',
        order: 4,
        isActive: true
      },
      {
        name: 'Baby Showers',
        slug: 'baby-showers',
        description: 'Beautiful baby shower celebrations and decorations',
        order: 5,
        isActive: true
      },
      {
        name: 'Receptions',
        slug: 'receptions',
        description: 'Grand reception parties and celebrations',
        order: 6,
        isActive: true
      }
    ];

    const sections = await Section.insertMany(sectionsData);
    console.log('📁 Created sections:', sections.length);

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`   - Admin users: 1`);
    console.log(`   - Sections: ${sections.length}`);
    console.log('\n🔐 Admin Login Credentials:');
    console.log(`   Email: ${adminData.email}`);
    console.log(`   Password: ${adminData.password}`);
    console.log('\n🌐 Access admin panel at: http://localhost:3000/admin/login');

  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

// Run seeding
seedData();