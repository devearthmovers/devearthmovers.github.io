import React from 'react';
import { Page } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { SERVICES_DATA, STRENGTHS_DATA, SECTORS_DATA } from '../constants';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {

  const HeroSection: React.FC = () => (
    <div className="relative min-h-screen w-full bg-brand-dark flex items-center justify-center text-white overflow-x-hidden pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
      
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-5 px-4 sm:px-6 py-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full">
            <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">12+ Years of Excellence</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-5 sm:mb-6 md:mb-8 px-2">
            Building the <span className="text-brand-yellow">Future</span>
            <br />
            From The Ground Up
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto text-gray-300 mb-8 sm:mb-10 leading-relaxed px-2">
            Delhi NCR's trusted leader in earthmoving, demolition, and construction services. Delivering excellence on every project.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }} 
              className="bg-brand-yellow text-brand-dark font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:shadow-brand-yellow/50 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base md:text-lg"
            >
              View Our Projects
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} 
              className="border-2 border-white text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-2xl hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base md:text-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );

  const AboutPreview: React.FC = () => (
    <AnimatedSection className="py-16 sm:py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-brand-yellow/10 rounded-full">
              <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">About DevEarthMovers</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark leading-tight mb-5 sm:mb-6">
              12+ Years of <span className="text-brand-yellow">Proven Excellence</span>
            </h2>
            
            <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6 sm:mb-8">
              DevEarthMovers is a fully-owned earthmoving and construction company with over 12 years of proven experience serving Delhi NCR's residential, commercial, and industrial sectors.
            </p>
            
            <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">Quality-Assured Services</h4>
                  <p className="text-sm sm:text-base text-text-light">Every project meets the highest industry standards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">On-Time Project Delivery</h4>
                  <p className="text-sm sm:text-base text-text-light">Committed to meeting deadlines without compromise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">Modern & Reliable Fleet</h4>
                  <p className="text-sm sm:text-base text-text-light">State-of-the-art equipment for superior results</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} 
              className="inline-flex items-center text-brand-dark font-bold text-base sm:text-lg group"
            >
              <span className="relative">
                Learn More About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </span>
              <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-yellow/20 to-brand-dark/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction excellence" 
                className="relative rounded-2xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-[140px] sm:w-[180px]">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-yellow mb-1">12+</div>
                <div className="text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider">Years Experience</div>
              </div>
              
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-brand-dark rounded-xl shadow-2xl p-4 sm:p-6 w-[140px] sm:w-[180px]">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-yellow mb-1">500+</div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );

  const ServicesPreview: React.FC = () => (
    <AnimatedSection className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-brand-light to-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-brand-yellow/10 rounded-full">
            <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4 sm:mb-6">
            Comprehensive <span className="text-brand-yellow">Solutions</span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-light leading-relaxed">
            We provide a full spectrum of services to meet the demands of any construction or excavation project, big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.title} 
              className="group relative"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-yellow to-brand-yellow/80 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                      className: 'w-8 h-8 sm:w-10 sm:h-10 text-brand-dark' 
                    })}
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-light text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }} 
                    className="inline-flex items-center text-brand-dark font-bold text-sm sm:text-base group/link"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow transform origin-left transition-transform duration-300 scale-x-0 group-hover/link:scale-x-100"></span>
                    </span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Decorative line */}
              {index < SERVICES_DATA.length - 1 && (
                <div className="hidden md:block absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }} 
            className="inline-block bg-brand-dark text-white font-bold py-4 px-10 sm:py-5 sm:px-12 rounded-full shadow-2xl hover:shadow-brand-dark/50 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
          >
            View All Services
          </a>
        </div>
      </div>
    </AnimatedSection>
  );

  const StrengthsSection: React.FC = () => (
    <AnimatedSection className="py-16 sm:py-20 lg:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full">
            <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">What Sets Us Apart</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            Our Core <span className="text-brand-yellow">Strengths</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* Left Strengths */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 lg:space-y-12">
            {STRENGTHS_DATA.slice(0, 2).map((strength) => (
              <div key={strength.id} className="text-center lg:text-right group">
                <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-brand-navy rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-yellow">
                    {React.cloneElement(strength.icon as React.ReactElement, { 
                      className: 'w-7 h-7 sm:w-8 sm:h-8 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300' 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                      {strength.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 order-first lg:order-none">
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" 
                alt="Heavy equipment excellence" 
                className="relative rounded-full shadow-2xl aspect-square object-cover border-4 sm:border-8 border-brand-navy/50 transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Strengths */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 lg:space-y-12">
            {STRENGTHS_DATA.slice(2, 4).map((strength) => (
              <div key={strength.id} className="text-center lg:text-left group">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-brand-navy rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-yellow">
                    {React.cloneElement(strength.icon as React.ReactElement, { 
                      className: 'w-7 h-7 sm:w-8 sm:h-8 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300' 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                      {strength.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );

  const SectorsPreview: React.FC = () => (
    <AnimatedSection className="py-16 sm:py-20 lg:py-28 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-brand-yellow/10 rounded-full">
            <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Market Sectors</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4 sm:mb-6">
            Sectors We <span className="text-brand-yellow">Serve</span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
            Delivering specialized solutions across diverse industries with proven expertise
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:h-[500px] xl:h-[600px] gap-4 sm:gap-6">
          {SECTORS_DATA.map((sector) => (
            <div 
              key={sector.name} 
              className="group relative lg:flex-1 h-80 sm:h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out lg:hover:flex-[2.5] cursor-pointer"
              style={{ 
                backgroundImage: `url(${sector.imageUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-transparent transition-all duration-500"></div>
              
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white">
                <div className="transform transition-all duration-500 lg:group-hover:-translate-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-2">
                    {sector.name}
                  </h3>
                  <div className="w-16 sm:w-20 h-1 bg-brand-yellow"></div>
                </div>
                
                <div className="overflow-hidden">
                  <div className="opacity-0 max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 transition-all duration-700 ease-in-out pt-6">
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {sector.points.slice(0, 3).map(point => (
                        <li key={point} className="flex items-start text-sm sm:text-base lg:text-lg">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-brand-yellow flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }} 
                      className="inline-flex items-center font-bold text-sm sm:text-base text-brand-yellow hover:text-white transition-colors group/link"
                    >
                      Explore Sector
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );

  const CtaSection: React.FC = () => (
    <div className="bg-gradient-to-b from-brand-light to-white py-16 sm:py-20 lg:py-28 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative bg-gradient-to-br from-brand-dark to-brand-navy rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC107' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 items-center relative">
            <div className="p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 text-white">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-brand-yellow/20 border border-brand-yellow/40 rounded-full">
                <span className="text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase">Get Started Today</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-3 sm:mb-4 lg:mb-6">
                Ready to Start Your Next <span className="text-brand-yellow">Project?</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Let's build the future together. Contact us for a consultation and discover how our 12+ years of experience can bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} 
                  className="bg-brand-yellow text-brand-dark font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-4 lg:px-10 rounded-full shadow-2xl hover:shadow-brand-yellow/50 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg text-center"
                >
                  Get In Touch Today
                </a>
                <a 
                  href="tel:+919205312697" 
                  className="border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-4 lg:px-10 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg text-center"
                >
                  Call Us Now
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-yellow mb-1">12+</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Years</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-yellow mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-yellow mb-1">100%</div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block h-full min-h-[450px] xl:min-h-[500px] relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Professional construction team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <StrengthsSection />
      <SectorsPreview />
      <CtaSection />``
    </>
  );
};

export default HomePage;