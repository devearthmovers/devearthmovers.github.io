import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>;

const TopBar: React.FC = () => (
  // Removed bg-opacity-80 for consistency, keeping it fully opaque
  <div className="bg-brand-dark text-white text-xs py-2 transition-all duration-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="tel:+919205312697" className="flex items-center hover:text-brand-yellow transition-colors">
          <PhoneIcon />
          <span className="ml-2">+91 9205312697</span>
        </a>
        <a href="mailto:Devearthmovers9599@gmail.com" className="hidden sm:flex items-center hover:text-brand-yellow transition-colors">
          <EmailIcon />
          <span className="ml-2">Devearthmovers9599@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
);

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const headerBg = isScrolled ? 'bg-white shadow-lg' : 'bg-transparent';
  const linkColor = isScrolled ? 'text-text-main' : 'text-white';
  const isLogoDark = isScrolled || isOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <TopBar />
      <div className={`${headerBg} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex-shrink-0">
              <Logo className="h-10" isDark={isLogoDark} />
            </a>
            
            <div className="hidden lg:flex items-center space-x-8">
                <nav className="flex items-center space-x-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.page}
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                      className={`font-semibold uppercase tracking-wider text-sm transition-colors duration-300 ${linkColor} hover:text-brand-yellow relative group`}
                    >
                      {link.name}
                      <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-brand-yellow transform transition-transform duration-300 ease-out ${currentPage === link.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>
                  ))}
                </nav>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Get a Quote
                </a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? 'text-text-main' : 'text-white'}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-brand-dark transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 flex flex-col h-full">
             <div className="flex items-center justify-between h-20">
                   <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                       <Logo className="h-10" isDark={false} />
                   </a>
                   <button onClick={() => setIsOpen(false)} className="focus:outline-none text-white">
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                   </button>
             </div>
               <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
                   {NAV_LINKS.map((link) => (
                       <a
                           key={link.page}
                           href="#"
                           onClick={(e) => { e.preventDefault(); handleNavClick(link.page); }}
                           className={`text-2xl font-bold text-white hover:text-brand-yellow transition-colors duration-300 ${currentPage === link.page ? 'text-brand-yellow' : ''}`}
                       >
                           {link.name}
                       </a>
                   ))}
                   <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="mt-8 bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-xl">
                     Get a Quote
                   </a>
               </nav>
           </div>
      </div>
    </header>
  );
};

export default Header;