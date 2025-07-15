import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  
  return (
    <div
      className={`text-[#fdd700] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 215, 0, 0.7) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 215, 0, 0.7) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: animationDuration,
        animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 100% }
          100% { background-position: -100% }
        }
        .animate-shine {
          animation: shine ${animationDuration} linear infinite;
        }
      `}</style>
      {text}
    </div>
  );
};

export default ShinyText;