import React from "react";

export function TrustSignals() {
  return (
    <section className="py-16 border-y border-gray-200 bg-white" id="trust-signals">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Trusted by developers worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers who trust RadixUI Kit for their projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Security */}
          <div className="flex flex-col items-center text-center p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="mb-6 h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Enterprise-Grade Security</h3>
            <p className="text-gray-600 mb-6">
              All our code is regularly audited and follows security best practices.
            </p>
            <div className="flex gap-6 mt-auto">
              <div className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-md">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <path d="M20.997 12.25c0-2.561-.251-4.976-1.278-7.09-.505-1.143-1.267-2.192-2.47-2.896-.896-.53-2.123-.8-3.025-.8h-4.446c-.902 0-2.131.27-3.026.8-1.203.704-1.964 1.755-2.469 2.897-1.028 2.113-1.28 4.528-1.28 7.09 0 1.87.179 3.783.584 5.545.42 1.803 1.028 3.307 2.28 4.424a6.098 6.098 0 0 0 1.945 1.262c1.124.425 2.05.519 3.278.519.98 0 1.229-.055 2.567-.055 1.337 0 1.586.055 2.566.055 1.228 0 2.154-.094 3.278-.519a6.086 6.086 0 0 0 1.946-1.262c1.251-1.117 1.86-2.62 2.278-4.424.406-1.762.584-3.675.584-5.545z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-md">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="flex flex-col items-center text-center p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="mb-6 h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.3 8.93L9.17 6.63a1 1 0 0 0-1.18 1.61L12.31 11 8 14.32a1 1 0 1 0 1.21 1.6l4.09-3.05.3.34a5 5 0 0 0 7.37.23 1 1 0 0 0-1.35-1.47A3 3 0 0 1 16 15c-.78 0-1.47-.4-2.22-1.33a6.46 6.46 0 0 1-1.24-2.62 5.79 5.79 0 0 1 1.87-3.45A3 3 0 0 1 16 7c.78 0 1.47.4 2.22 1.33a1 1 0 0 0 1.41.14 1 1 0 0 0 .15-1.41A4.94 4.94 0 0 0 16 5a5 5 0 0 0-3.5 1.67 7.67 7.67 0 0 0-.2 2.26z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Certified Accessibility</h3>
            <p className="text-gray-600 mb-6">
              WCAG 2.1 AA compliant and tested with leading screen readers.
            </p>
            <div className="flex gap-3 mt-auto">
              <div className="h-10 px-3 flex items-center justify-center bg-primary-50 rounded-lg border border-primary-100">
                <span className="font-semibold text-xs text-primary-700">WCAG 2.1</span>
              </div>
              <div className="h-10 px-3 flex items-center justify-center bg-primary-50 rounded-lg border border-primary-100">
                <span className="font-semibold text-xs text-primary-700">ARIA</span>
              </div>
              <div className="h-10 px-3 flex items-center justify-center bg-primary-50 rounded-lg border border-primary-100">
                <span className="font-semibold text-xs text-primary-700">A11Y</span>
              </div>
            </div>
          </div>
          
          {/* Guaranteed */}
          <div className="flex flex-col items-center text-center p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="mb-6 h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">100% Satisfaction Guarantee</h3>
            <p className="text-gray-600 mb-6">
              30-day money-back guarantee for all paid plans, no questions asked.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="h-10 px-3 flex items-center justify-center bg-amber-50 rounded-lg border border-amber-100">
                <span className="font-semibold text-xs text-amber-700">30-Day Guarantee</span>
              </div>
              <div className="h-10 w-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Awards & Recognition */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 mb-4 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 .75a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328 1.17A.75.75 0 0112 .75zm0 2.445L9.44 8.252a.75.75 0 01-.564.41l-5.37.779 3.88 3.78a.75.75 0 01.216.664l-.918 5.346 4.801-2.524a.75.75 0 01.698 0l4.801 2.524-.918-5.346a.75.75 0 01.216-.664l3.88-3.78-5.37-.779a.75.75 0 01-.564-.41L12 3.195z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Best Dev Tool</h4>
            <p className="text-xs text-gray-600">ProductHunt 2023</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 mb-4 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Most Loved</h4>
            <p className="text-xs text-gray-600">Stack Overflow 2023</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 mb-4 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">A11Y Approved</h4>
            <p className="text-xs text-gray-600">WebAIM 2023</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 mb-4 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Rising Star</h4>
            <p className="text-xs text-gray-600">GitHub 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
} 