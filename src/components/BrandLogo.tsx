import React, { useState } from 'react';
import officialLogo from '../assets/images/yashoda_user_logo.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = false,
  textColor = 'text-[#0D472B]',
  className = ''
}) => {
  const [imgSrc, setImgSrc] = useState<string>(officialLogo);

  const sizeMap = {
    sm: { icon: 56, text: 'text-sm' },
    md: { icon: 80, text: 'text-base' },
    lg: { icon: 110, text: 'text-xl' },
    xl: { icon: 140, text: 'text-2xl' },
    '2xl': { icon: 200, text: 'text-3xl' }
  };

  const current = sizeMap[size];

  const handleImgError = () => {
    if (imgSrc === officialLogo) {
      setImgSrc('/images/logo.png');
    } else if (imgSrc === '/images/logo.png') {
      setImgSrc('/images/yashoda_logo.png');
    }
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Exact Official Uploaded Yashoda's Divine Kitchen Logo */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-200"
        style={{ width: current.icon, height: current.icon }}
        title="Yashoda’s Divine Kitchen - Flavors of Tradition"
      >
        <img
          src={imgSrc}
          onError={handleImgError}
          alt="Yashoda’s Divine Kitchen - Flavors of Tradition"
          className="w-full h-full object-contain aspect-square select-none block"
          loading="eager"
        />
      </div>

      {/* Optional Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-display font-bold tracking-wider uppercase text-[15px] sm:text-[17px] drop-shadow-xs ${textColor}`}>
            Yashoda’s
          </span>
          <span className="font-serif-devotional tracking-widest text-[#B38728] font-semibold text-[11px] sm:text-[13px] uppercase">
            Divine Kitchen
          </span>
          <span className="text-[10px] tracking-wider text-[#991B1B] font-medium hidden sm:inline-block">
            Flavors of Tradition
          </span>
        </div>
      )}
    </div>
  );
};

