'use client';

import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Image as ImageIcon,
  Folder,
  LogOut,
  Settings
} from 'lucide-react';

interface Section {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
}

interface Image {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  section: {
    _id: string;
    name: string;
    slug: string;
  };
  tags: string[];
  isActive: boolean;
  order: number;
  metadata: {
    width: number;
    height: number;
    format?: string;
    size?: number;
  };
  createdAt: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'sections' | 'images' | 'upload'>('sections');
  const [sections, setSections] = useState<Section[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form states
  const [sectionForm, setSectionForm] = useState({
    name: '',
    slug: '',
    description: '',
    order: 0,
    isActive: true
  });

  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    sectionId: '',
    tags: '',
    order: 0,
    file: null as File | null
  });

  // Fetch sections
  const fetchSections = async () => {
    try {
      const response = await fetch('/api/admin/sections');
      const data = await response.json();
      if (data.success) {
        setSections(data.data);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  // Fetch images
  const fetchImages = async (sectionId?: string) => {
    try {
      const url = sectionId 
        ? `/api/admin/images?section=${sectionId}` 
        : '/api/admin/images';
      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchSections();
    fetchImages();
  }, []);

  // Create section
  const handleCreateSection = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sectionForm),
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess('Section created successfully!');
        setSectionForm({
          name: '',
          slug: '',
          description: '',
          order: 0,
          isActive: true
        });
        fetchSections();
      } else {
        setError(data.error || 'Failed to create section');
      }
    } catch (error) {
      setError('Failed to create section');
    } finally {
      setLoading(false);
    }
  };

  // Upload image
  const handleUploadImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadForm.file || !uploadForm.title || !uploadForm.sectionId) {
      setError('Please fill in all required fields and select a file');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('title', uploadForm.title);
      formData.append('description', uploadForm.description);
      formData.append('sectionId', uploadForm.sectionId);
      formData.append('tags', uploadForm.tags);
      formData.append('order', uploadForm.order.toString());

      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess('Image uploaded successfully!');
        setUploadForm({
          title: '',
          description: '',
          sectionId: '',
          tags: '',
          order: 0,
          file: null
        });
        fetchImages();
      } else {
        setError(data.error || 'Failed to upload image');
      }
    } catch (error) {
      setError('Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  // Delete image
  const handleDeleteImage = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess('Image deleted successfully!');
        fetchImages();
      } else {
        setError(data.error || 'Failed to delete image');
      }
    } catch (error) {
      setError('Failed to delete image');
    }
  };

  // Toggle image status
  const toggleImageStatus = async (imageId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !currentStatus }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess(`Image ${!currentStatus ? 'activated' : 'deactivated'} successfully!`);
        fetchImages();
      } else {
        setError(data.error || 'Failed to update image');
      }
    } catch (error) {
      setError('Failed to update image');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Shubharambh Event Management</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab('sections')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'sections'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Folder size={18} />
            <span>Sections</span>
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'images'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ImageIcon size={18} />
            <span>Images</span>
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'upload'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Upload size={18} />
            <span>Upload</span>
          </button>
        </div>

        {/* Alert Messages */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
            {success}
          </div>
        )}

        {/* Sections Tab */}
        {activeTab === 'sections' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Section Form */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New Section</h2>
              <form onSubmit={handleCreateSection} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Section Name *
                  </label>
                  <input
                    type="text"
                    value={sectionForm.name}
                    onChange={(e) => setSectionForm({ ...sectionForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Weddings"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={sectionForm.slug}
                    onChange={(e) => setSectionForm({ ...sectionForm, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., weddings"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={sectionForm.description}
                    onChange={(e) => setSectionForm({ ...sectionForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                    placeholder="Brief description of this section"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order
                  </label>
                  <input
                    type="number"
                    value={sectionForm.order}
                    onChange={(e) => setSectionForm({ ...sectionForm, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min="0"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={sectionForm.isActive}
                    onChange={(e) => setSectionForm({ ...sectionForm, isActive: e.target.checked })}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                    Active
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-pink-600 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Section'}
                </button>
              </form>
            </div>

            {/* Sections List */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Existing Sections</h2>
              <div className="space-y-3">
                {sections.map((section) => (
                  <div key={section._id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-900">{section.name}</h3>
                      <p className="text-sm text-gray-600">/{section.slug}</p>
                      {section.description && (
                        <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        section.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {section.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div>
            {/* Section Filter */}
            <div className="mb-6">
              <select
                value={selectedSection}
                onChange={(e) => {
                  setSelectedSection(e.target.value);
                  fetchImages(e.target.value || undefined);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Sections</option>
                {sections.map((section) => (
                  <option key={section._id} value={section._id}>
                    {section.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => (
                <div key={image._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button
                        onClick={() => toggleImageStatus(image._id, image.isActive)}
                        className={`p-1 rounded-full ${
                          image.isActive 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-500 text-white'
                        }`}
                      >
                        {image.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>
                      <button
                        onClick={() => handleDeleteImage(image._id)}
                        className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{image.section.name}</p>
                    {image.description && (
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{image.description}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{image.metadata.width} × {image.metadata.height}</span>
                      <span className={`px-2 py-1 rounded-full ${
                        image.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {image.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload New Image</h2>
              <form onSubmit={handleUploadImage} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image File *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setUploadForm({ ...uploadForm, file: e.target.files?.[0] || null })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Image title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Section *
                  </label>
                  <select
                    value={uploadForm.sectionId}
                    onChange={(e) => setUploadForm({ ...uploadForm, sectionId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a section</option>
                    {sections.filter(s => s.isActive).map((section) => (
                      <option key={section._id} value={section._id}>
                        {section.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={uploadForm.description}
                    onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                    placeholder="Image description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={uploadForm.tags}
                    onChange={(e) => setUploadForm({ ...uploadForm, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="wedding, decoration, flowers"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order
                  </label>
                  <input
                    type="number"
                    value={uploadForm.order}
                    onChange={(e) => setUploadForm({ ...uploadForm, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min="0"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-pink-600 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Uploading...' : 'Upload Image'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;