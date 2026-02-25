import React from 'react';

interface LogoProps {
    className?: string;
    iconSize?: string;
    textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({
    className = "",
    iconSize = "w-6 h-6",
    textSize = "text-2xl"
}) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className={`${iconSize.replace('w-6', 'w-10').replace('h-6', 'h-10')} bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={iconSize}
                    aria-hidden="true"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <path d="M9 14h6" />
                    <path d="M9 18h6" />
                </svg>
            </div>
            <span className={`font-black tracking-tighter text-white ${textSize}`}>
                SiteEase<span className="text-blue-500">.ca</span>
            </span>
        </div>
    );
};
