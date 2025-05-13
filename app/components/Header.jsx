import React, { useEffect, useState } from 'react';

const Header = () => {
    const words = ["Web Developer", "LLM Enthusiast", "UI/UX Designer", "Tech Explorer"];
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 100;
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            setCurrentText(prev => {
                const updated = isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1);
                return updated;
            });

            if (!isDeleting && currentText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, wordIndex, words]);

    return (
        <div className="w-screen animated-background h-screen bg-gradient-to-r from-white via-yellow-50 to-yellow-100 
          text-center mx-auto flex flex-col items-center justify-center gap-50 px-4">
            
            <div className="max-w-2xl w-full text-left">
                <p className="text-lg text-red-500 font-medium">Hello!</p>
            
                <h1 className="text-5xl sm:text-7xl font-bold text-black">
                    I'm <span className="text-red-500">Avrodeep Pal</span>
                    <span className="text-[35px]"><sub> &#9733; </sub></span>
                </h1>
            
                <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800">
                    I am a &#123; <span className="text-red-500"> {currentText} </span> 
                    <span className="border-r-2 border-black animate-pulse ml-1"></span> &nbsp; &#125;
                </h2>
            
                <p className="text-lg sm:text-xl mt-2">
                    Welcome to my Portfolio!
                </p>
            </div>

            <button
                    onClick={() => window.open('https://example.com/cv', '_blank')}
                    className="mb-8 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 
                      text-black font-medium rounded-lg transition-all shadow"
                > Open CV
            </button>
        </div>
    );
};

export default Header;