import React, { useState } from 'react';
import { NewPageForm } from '../../types/sitemap';

interface AddPageFormProps {
  onAddPage: (pageData: NewPageForm) => void;
}

export const AddPageForm: React.FC<AddPageFormProps> = ({ onAddPage }) => {
  const [formData, setFormData] = useState<NewPageForm>({
    name: '',
    description: '',
    portal: 'customer'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.description.trim()) {
      onAddPage(formData);
      setFormData({
        name: '',
        description: '',
        portal: 'customer'
      });
      setIsExpanded(false);
    }
  };

  const handleInputChange = (field: keyof NewPageForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-bg-secondary rounded-lg p-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 text-primary font-semibold text-lg hover:text-yellow-400 w-full text-left"
      >
        <svg
          className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Add New Page</span>
      </button>

      {isExpanded && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="pageName" className="block text-sm font-medium text-white mb-1">
              Page Name
            </label>
            <input
              type="text"
              id="pageName"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter page name"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="pageDescription" className="block text-sm font-medium text-white mb-1">
              Description
            </label>
            <textarea
              id="pageDescription"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe what this page does"
              rows={3}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              required
            />
          </div>

          <div>
            <label htmlFor="pagePortal" className="block text-sm font-medium text-white mb-1">
              Portal
            </label>
            <select
              id="pagePortal"
              value={formData.portal}
              onChange={(e) => handleInputChange('portal', e.target.value as 'customer' | 'vendor' | 'admin')}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="customer">Customer Portal</option>
              <option value="vendor">Vendor Portal</option>
              <option value="admin">Admin Portal</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-black font-medium rounded-md hover:bg-yellow-500 transition-colors"
            >
              Add Page
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ name: '', description: '', portal: 'customer' });
                setIsExpanded(false);
              }}
              className="px-6 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
