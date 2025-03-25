import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-rose-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="w-full h-full max-w-[1920px] mx-auto relative flex items-center justify-center">
        <div 
          className="w-full h-full absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: 'url(https://i.ibb.co/W4FPPWRJ/404.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        />
        <div className="absolute bottom-8 md:bottom-12 w-full text-center z-10">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-lg tracking-wider hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;