import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

export const LandingPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">ShareACart Wireframe</h1>
        <p className="text-gray-300 text-xl">
          Complete prototype showcasing Customer Portal, Vendor Portal, and Admin Portal
        </p>
        <p className="text-gray-400 mt-2">
          Navigate through all 66 sub-pages across 16 main sections
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {NAVIGATION_DATA.map((portal) => (
          <div key={portal.id} className="bg-bg-secondary rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">{portal.label}</h2>
            <div className="space-y-4">
              {portal.sections.map((section) => (
                <div key={section.id} className="border-l-2 border-gray-600 pl-4">
                  <h3 className="text-lg font-medium text-white mb-2">{section.label}</h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="block text-sm text-gray-400 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-600">
              <p className="text-sm text-gray-500">
                {portal.sections.reduce((total, section) => total + section.items.length, 0)} pages
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-bg-secondary rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/customer/browsing/homepage"
            className="bg-primary text-black px-4 py-2 rounded-md font-medium text-center hover:bg-yellow-500 transition-colors"
          >
            Start with Customer Portal
          </Link>
          <Link
            to="/vendor/onboarding/seller-signup"
            className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-gray-600 transition-colors"
          >
            Explore Vendor Portal
          </Link>
          <Link
            to="/admin/vendor-management/approval-list"
            className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-gray-600 transition-colors"
          >
            View Admin Portal
          </Link>
          <Link
            to="/sitemap-approval"
            className="bg-green-600 text-white px-4 py-2 rounded-md font-medium text-center hover:bg-green-500 transition-colors"
          >
            📋 Sitemap Approval Tool
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-green-900 border border-green-600 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-green-400 mb-3 flex items-center">
          <span className="mr-2">🎯</span>
          Interactive Sitemap Approval Tool
        </h2>
        <p className="text-green-100 mb-4">
          Use our client collaboration tool to review, modify, and approve the complete sitemap structure. 
          Perfect for stakeholder reviews and project planning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-200">
          <div>
            <h3 className="font-semibold text-green-300 mb-2">Features:</h3>
            <ul className="space-y-1">
              <li>• Interactive tree view with checkboxes</li>
              <li>• Add custom pages dynamically</li>
              <li>• Real-time summary and counts</li>
              <li>• Export to PDF or JSON</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-300 mb-2">Perfect for:</h3>
            <ul className="space-y-1">
              <li>• Client approval workflows</li>
              <li>• Stakeholder collaboration</li>
              <li>• Project scope management</li>
              <li>• Documentation and handoffs</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/sitemap-approval"
            className="inline-flex items-center px-6 py-3 bg-primary text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors"
          >
            <span className="mr-2">🚀</span>
            Launch Approval Tool
          </Link>
        </div>
      </div>
    </div>
  );
};
