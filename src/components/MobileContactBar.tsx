import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const MobileContactBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to inquire about your traditional pickles and powders from Yashoda’s Divine Kitchen."
  )}`;

  return (
    <aside aria-label="Mobile Quick Contact Bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t-2 border-[#D4AF37] shadow-lg px-4 py-2">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0D472B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#E5C158]" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>

      </div>
    </aside>
  );
};
