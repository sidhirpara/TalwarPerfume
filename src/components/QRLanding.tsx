import React from 'react';
import { Instagram, Facebook, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';

function SocialCard({ icon, title, handle, url }: { 
  icon: React.ReactNode;
  title: string;
  handle: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10 bg-[#f8f9fa] dark:bg-slate-700 rounded-full flex items-center justify-center text-[#937666] dark:text-[#b39c8f]">
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-sm font-medium text-[#2d3436] dark:text-white">{title}</h2>
          <p className="text-sm text-[#636e72] dark:text-slate-300">{handle}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-[#937666] dark:text-[#b39c8f]" />
      </div>
    </a>
  );
}

const QRLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#937666] dark:text-[#b39c8f]" />
          <h1 className="text-4xl font-light mb-3 text-[#2d3436] dark:text-white tracking-wide">TALWAR</h1>
          <p className="text-sm text-[#636e72] dark:text-slate-300 tracking-widest uppercase">Premium Fragrances</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <SocialCard 
            icon={<Instagram className="w-5 h-5" />}
            title="Instagram"
            handle="@Talwarperfume"
            url="https://instagram.com/talwarperfume"
          />
          <SocialCard 
            icon={<Facebook className="w-5 h-5" />}
            title="Facebook"
            handle="Talwar Perfume"
            url="https://facebook.com/talwarperfume"
          />
          <SocialCard 
            icon={<MessageCircle className="w-5 h-5" />}
            title="WhatsApp"
            handle="+91 99091 66990"
            url="https://wa.me/919909166990"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <a
            href="https://talwarperfume.com/#/collection"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#937666] dark:border-[#b39c8f] text-[#937666] dark:text-[#b39c8f] rounded-full hover:bg-[#937666] dark:hover:bg-[#b39c8f] hover:text-white transition-all duration-300 text-sm tracking-wide group"
          >
            Discover Our Collection
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#636e72] dark:text-slate-400 mt-12">
          © 2025 TALWAR. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default QRLanding;