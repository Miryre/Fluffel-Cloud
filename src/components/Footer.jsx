import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 max-w-7xl mx-auto">
        
        <aside className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-2">fluffelcloud</h2>
          <p className="text-sm md:text-base">
            Your reliable weather companion
            <br />
            Providing accurate forecasts since 2025
          </p>
        </aside>
        
        <nav className="flex-1">
          <h6 className="font-bold text-base md:text-lg mb-2">Services</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover text-sm md:text-base">Weather Forecast</a>
            <a className="link link-hover text-sm md:text-base">Hourly Updates</a>
            <a className="link link-hover text-sm md:text-base">Storm Alerts</a>
            <a className="link link-hover text-sm md:text-base">Climate Data</a>
          </div>
        </nav>
        
        <nav className="flex-1">
          <h6 className="font-bold text-base md:text-lg mb-2">Company</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover text-sm md:text-base">About Us</a>
            <a className="link link-hover text-sm md:text-base">Contact</a>
            <a className="link link-hover text-sm md:text-base">Careers</a>
            <a className="link link-hover text-sm md:text-base">Press Kit</a>
          </div>
        </nav>
        
        <nav className="flex-1">
          <h6 className="font-bold text-base md:text-lg mb-2">Legal</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover text-sm md:text-base">Terms of Use</a>
            <a className="link link-hover text-sm md:text-base">Privacy Policy</a>
            <a className="link link-hover text-sm md:text-base">Cookie Policy</a>
          </div>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;