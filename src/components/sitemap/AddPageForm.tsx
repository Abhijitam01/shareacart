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
    <div className="bg-bg-secondary rounded-xl p-3 sm:p-4 border border-gray-700 shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn-mobile flex items-center space-x-1 sm:space-x-2 text-primary font-semibold text-sm sm:text-base lg:text-lg hover:text-yellow-400 w-full text-left min-w-0 p-2 rounded-lg touch-none"
      >
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 expand-smooth flex-shrink-0 ${isExpanded ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="truncate">Add Custom Page</span>
        <div className="ml-auto">
          <span className="text-xs bg-primary text-black px-2 py-0.5 rounded-full font-medium">
            {isExpanded ? 'Close' : 'Open'}
          </span>
        </div>
      </button>

      {isExpanded && (
        <form onSubmit={handleSubmit} className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 expand-smooth bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-600">
          <div>
            <label htmlFor="pageName" className="block text-xs sm:text-sm font-medium text-primary mb-2">
              📝 Page Name
            </label>
            <input
              type="text"
              id="pageName"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., Advanced Search"
              className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="pageDescription" className="block text-xs sm:text-sm font-medium text-primary mb-2">
              📄 Description
            </label>
            <textarea
              id="pageDescription"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the purpose and functionality of this page"
              rows={3}
              className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm transition-all duration-200 scroll-smooth-mobile"
              required
            />
          </div>

          <div>
            <label htmlFor="pagePortal" className="block text-xs sm:text-sm font-medium text-primary mb-2">
              🏢 Portal
            </label>
            <select
              id="pagePortal"
              value={formData.portal}
              onChange={(e) => handleInputChange('portal', e.target.value as 'customer' | 'vendor' | 'admin')}
              className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary focus:border-primary text-sm transition-all duration-200"
            >
              <option value="customer">👤 Customer Portal</option>
              <option value="vendor">🏪 Vendor Portal</option>
              <option value="admin">⚙️ Admin Portal</option>
            </select>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-2">
            <button
              type="submit"
              className="btn-mobile px-4 sm:px-6 py-3 bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-primary shadow-md text-sm w-full xs:w-auto flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Page</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ name: '', description: '', portal: 'customer' });
                setIsExpanded(false);
              }}
              className="btn-mobile px-4 sm:px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 text-sm w-full xs:w-auto flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Cancel</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
