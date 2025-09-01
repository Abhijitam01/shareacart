import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_DATA } from '../types/navigation';

export const LandingPage: React.FC = () => {
  const getPortalIcon = (portalId: string) => {
    const icons = { customer: '👤', vendor: '🏪', admin: '⚡' };
    return icons[portalId as keyof typeof icons] || '📄';
  };

  const getPortalGradient = (portalId: string) => {
    const gradients = {
      customer: 'from-blue-500 to-cyan-500',
      vendor: 'from-green-500 to-emerald-500',
      admin: 'from-purple-500 to-pink-500'
    };
    return gradients[portalId as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  const getPortalDescription = (portalId: string) => {
    const descriptions = {
      customer: 'Complete shopping experience from onboarding to post-purchase',
      vendor: 'Seller management, product catalog, and business operations',
      admin: 'Platform administration, analytics, and system management'
    };
    return descriptions[portalId as keyof typeof descriptions] || '';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-12 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full glass border border-primary/20">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-primary font-medium">ShareACart Wireframe</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">Complete Prototype</span>
            <br />
            <span className="text-white">Showcase Platform</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Interactive wireframe featuring Customer Portal, Vendor Portal, and Admin Portal
            with modern UI components and seamless navigation
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span>66 Sub-pages</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>16 Main Sections</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
              <span>3 Portals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/customer/browsing/homepage"
          className="group card-hover p-6 text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">👤</span>
          </div>
          <h3 className="font-semibold text-white mb-2">Customer Portal</h3>
          <p className="text-gray-400 text-sm">Start shopping experience</p>
        </Link>

        <Link
          to="/vendor/onboarding/seller-signup"
          className="group card-hover p-6 text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">🏪</span>
          </div>
          <h3 className="font-semibold text-white mb-2">Vendor Portal</h3>
          <p className="text-gray-400 text-sm">Explore seller tools</p>
        </Link>

        <Link
          to="/admin/vendor-management/approval-list"
          className="group card-hover p-6 text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">⚡</span>
          </div>
          <h3 className="font-semibold text-white mb-2">Admin Portal</h3>
          <p className="text-gray-400 text-sm">View admin tools</p>
        </Link>

        <Link
          to="/sitemap-approval"
          className="group card-hover p-6 text-center border-2 border-accent-green/30"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-green/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
            <span className="text-white text-2xl">📋</span>
          </div>
          <h3 className="font-semibold text-accent-green mb-2">Sitemap Tool</h3>
          <p className="text-gray-400 text-sm">Client collaboration</p>
        </Link>
      </div>

      {/* Portal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {NAVIGATION_DATA.map((portal, index) => (
          <div key={portal.id} className={`card-hover p-8 animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
            {/* Portal Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${getPortalGradient(portal.id)} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-white text-2xl">{getPortalIcon(portal.id)}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{portal.label}</h2>
                <p className="text-gray-400 text-sm">{getPortalDescription(portal.id)}</p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-4 mb-6">
              {portal.sections.map((section) => (
                <div key={section.id} className="group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                    <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                      {section.label}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                      {section.items.length}
                    </span>
                  </div>
                  <div className="ml-6 space-y-1 max-h-32 overflow-hidden">
                    {section.items.slice(0, 3).map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="block text-sm text-gray-400 hover:text-primary transition-colors hover:translate-x-1 duration-200"
                      >
                        • {item.label}
                      </Link>
                    ))}
                    {section.items.length > 3 && (
                      <p className="text-xs text-gray-500 italic">
                        +{section.items.length - 3} more pages...
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Portal Stats */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Total Pages</span>
                <span className="text-primary font-bold text-lg">
                  {portal.sections.reduce((total, section) => total + section.items.length, 0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sitemap Approval Tool Highlight */}
      <div className="relative overflow-hidden card p-8 border-2 border-accent-green/30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-green/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        
        <div className="relative z-10">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-green/80 rounded-3xl flex items-center justify-center shadow-glow animate-pulse-glow">
              <span className="text-white text-3xl">📋</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h2 className="text-2xl font-bold text-accent-green">Interactive Sitemap Approval Tool</h2>
                <span className="badge-success">New</span>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Revolutionary client collaboration tool for reviewing, modifying, and approving 
                complete sitemap structures. Perfect for stakeholder reviews and project planning.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-accent-green mb-3 flex items-center">
                    <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">✓</span>
                      <span>Interactive tree view with checkboxes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">✓</span>
                      <span>Add custom pages dynamically</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">✓</span>
                      <span>Real-time summary and counts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">✓</span>
                      <span>Export to PDF or JSON</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-accent-green mb-3 flex items-center">
                    <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
                    Perfect For
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">→</span>
                      <span>Client approval workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">→</span>
                      <span>Stakeholder collaboration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">→</span>
                      <span>Project scope management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-accent-green">→</span>
                      <span>Documentation and handoffs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link
                to="/sitemap-approval"
                className="group inline-flex items-center space-x-3 btn-primary text-lg px-8 py-4"
              >
                <span>🚀</span>
                <span>Launch Approval Tool</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="text-center py-8 border-t border-white/10">
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">66</div>
            <div className="text-gray-400 text-sm">Total Pages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-green mb-1">16</div>
            <div className="text-gray-400 text-sm">Sections</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-blue mb-1">3</div>
            <div className="text-gray-400 text-sm">Portals</div>
          </div>
        </div>
      </div>
    </div>
  );
};
