import React from 'react';

function GoButton({className}) {
    return (
        <div className={className}>
            <button type="submit" style={{background: "none", border: "none"}}>
                <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32.6667" r="32" fill="#FF4000"/>
                    <g clip-path="url(#clip0)">
                    <path d="M23.6705 47.6415L50.4045 33.4988C51.1604 33.0982 51.1604 31.778 50.4045 31.3773L23.6705 17.2345C23.2703 17.0224 22.8034 17.093 22.4477 17.3995C22.1141 17.7059 21.9807 18.2244 22.1364 18.6722L26.0715 31.2595L28.7393 32.4381L26.0715 33.6167L22.1364 46.2041C21.9876 46.5975 22.0866 47.1289 22.4477 47.4768C22.8033 47.7831 23.2703 47.8539 23.6705 47.6415Z" fill="url(#paint0_linear)"/>
                    <path d="M24.2929 32.4381C24.2929 31.7867 23.7957 31.2595 23.1813 31.2595H14.1402C13.5258 31.2595 13.0286 31.7867 13.0286 32.4381C13.0286 33.0896 13.5258 33.6167 14.1402 33.6167H23.1813C23.7957 33.6167 24.2929 33.0896 24.2929 32.4381ZM37.6322 32.4381C37.6322 31.778 37.1431 31.2595 36.5206 31.2595H26.0715L26.4495 32.4381L26.0715 33.6167H36.5206C37.1431 33.6167 37.6322 33.0982 37.6322 32.4381ZM22.0697 27.7238C22.0697 27.0724 21.5725 26.5453 20.9581 26.5453H16.3634C15.749 26.5453 15.2518 27.0724 15.2518 27.7238C15.2518 28.3753 15.749 28.9024 16.3634 28.9024H20.9581C21.5725 28.9024 22.0697 28.3753 22.0697 27.7238ZM22.0697 37.1524C22.0697 36.501 21.5725 35.9738 20.9581 35.9738H16.3634C15.749 35.9738 15.2518 36.501 15.2518 37.1524C15.2518 37.8038 15.749 38.331 16.3634 38.331H20.9581C21.5725 38.331 22.0697 37.8038 22.0697 37.1524Z" fill="url(#paint1_linear)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear" x1="22.0698" y1="32.4381" x2="50.9715" y2="32.4381" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#420039"/>
                    <stop offset="1" stop-opacity="0.31"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="13.0286" y1="32.4381" x2="37.6322" y2="32.4381" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FEEFDD"/>
                    <stop offset="0.9973" stop-color="#FEEFDD" stop-opacity="0.67"/>
                    </linearGradient>
                    <clipPath id="clip0">
                    <rect width="40.2286" height="37.9429" fill="white" transform="translate(50.9714 12.3238) rotate(90)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
}

export default GoButton;