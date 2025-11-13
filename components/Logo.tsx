import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12', isDark = false }) => {
  const textColor = isDark ? 'text-brand-dark' : 'text-white';
  
  return (
    <div className={`font-sans ${className} ${textColor}`}>
      <div className="flex flex-col items-start h-full justify-center">
        <div className="inline-block">
            <span className="font-black text-3xl leading-none tracking-tighter">DEV</span>
            <div className="w-full h-1 bg-brand-yellow my-0.5"></div>
        </div>
        <span className="font-semibold text-xs leading-none tracking-widest">EARTHMOVERS</span>
      </div>
    </div>
  );
};

export default Logo;