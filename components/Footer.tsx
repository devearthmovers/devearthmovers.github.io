import React from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { NAV_LINKS } from '../constants';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const SocialIcon: React.FC<{ href: string, children: React.ReactNode, label: string }> = ({ href, children, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-400 hover:text-brand-yellow transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
  };
    
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-12 lg:col-span-4">
            <Logo className="h-12" isDark={false} />
            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Delhi NCR's trusted leader in earthmoving, demolition, and construction services for over a decade.
            </p>
            <div className="mt-6 flex space-x-5">
                <SocialIcon href="#" label="Follow us on Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg></SocialIcon>
                <SocialIcon href="#" label="Follow us on Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.616 1.905 2.405 3.291 4.533 3.33-1.623 1.274-3.666 2.032-5.892 2.032-.384 0-.762-.023-1.134-.067 2.099 1.353 4.604 2.143 7.333 2.143 8.778 0 13.59-7.277 13.59-13.596 0-.205-.005-.41-.013-.615.932-.67 1.732-1.511 2.368-2.454z" /></svg></SocialIcon>
                <SocialIcon href="#" label="Follow us on LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></SocialIcon>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h3 className="text-lg font-bold text-brand-yellow tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.page}>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }} className="text-gray-300 hover:text-white transition-colors duration-300 pb-1 border-b border-transparent hover:border-brand-yellow">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-8 lg:col-span-4">
            <h3 className="text-lg font-bold text-brand-yellow tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>C-137 Birla Farm, Chhatarpur, New Delhi – 110074</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <a href="tel:+919205312697" className="hover:text-white block">+91 9205312697</a>
                  <a href="tel:+919599012309" className="hover:text-white block">+91 9599012309</a>
                </div>
              </li>
              <li className="flex items-start">
                 <svg className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 <a href="mailto:Devearthmovers9599@gmail.com" className="hover:text-white break-all">Devearthmovers9599@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevEarthMovers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;