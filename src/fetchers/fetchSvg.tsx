import { SvgStats } from '../interfaces/SvgStats';

export const fetchSvg = (info: SvgStats): string => {
    const { 
        stats, 
        theme 
    } = info;
    const { 
        username, 
        reputation, 
        reached, 
        answers, 
        questions,
        percentile,
        badges
    } = stats;
    const { 
        backgroundColour, 
        usernameColour, 
        reputationColour, 
        reachedColour, 
        answersColour, 
        questionsColour,
        badgesColour,
        percentileColour,
    } = theme;
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="395" height="205" viewBox="0 0 395 205" fill="none">
        <style>
        .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill:${usernameColour};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        
        .info {
        font: 600 14px Arial, Helvetica, sans-serif;
        }
        .reputation {
        fill: ${reputationColour};
        }
        .reached {
        fill: ${reachedColour};
        }
        .answers {
        fill: ${answersColour};
        }

        .questions {
         fill:${questionsColour};
         }

        .badges {
         fill:${badgesColour};
         }
        
        .percentile {
        fill: ${percentileColour};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
        }         

        .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
        }
        
        .bold {
        font-weight: 700
        }
         @keyframes scaleInAnimation {
        from {
            transform: translate(-5px, 5px) scale(0);
        }
        to {
            transform: translate(-5px, 5px) scale(1);
        }
        }
        
        @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }
       
        </style>
        <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="${backgroundColour}" width="494" fill="${backgroundColour}" stroke-opacity="1" />
        <g transform="translate(25, 35)">
        <g transform="translate(0, 0)">
            <text x="30" y="0" class="header">${username}'s Stack Overflow Stats</text>
            <text x="30" y="20" class="info percentile">${percentile} 🔥</text>
        </g>
        </g>
        <g transform="translate(0, 55)">
        <svg x="0" y="0">
            <g transform="translate(0, 15)">
            <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
                <text class="info bold reputation" y="12.5">Reputation:</text>
                <text class="info reputation" x="100" y="12.5">${reputation}</text>
            </g>
            </g>
            <g transform="translate(0, 40)">
            <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
                <text class="info bold reached" y="12.5">Reached:</text>
                <text class="info reached" x="100" y="12.5">${reached}</text>
            </g>
            </g>
            <g transform="translate(0, 65)">
            <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
                <text class="info bold answers" y="12.5">Answers:</text>
                <text class="info easy answers" x="100" y="12.5">${answers}</text>
            </g>
            </g>
           <g transform="translate(0, 90)">
            <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
                <text class="info bold questions" y="12.5">Questions:</text>
                <text class="info questions" x="100" y="12.5">${questions}</text>
            </g>
            </g>
                   <text class="info bold badges" x="265" y="85">Badges: </text>
                   <text class="info badges" x="325" y="85">${badges}</text>
        </svg>
        </g>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="50px" fill="orange" x="-170" y="10"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" fill="orange" x="100" y="75"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77l-73.76 122.1c42 6.5 79.88 25.62 109.5 53.38l111.3-158.9C516.5 14.58 508.9 0 495.1 0z"/></svg>
    </svg>

    `
}

export const fetchErrorSvg = (errorMessage: string): string => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="295" height="205" viewBox="0 0 295 205" fill="none">
        <style>
        .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: #f58f0a;
        animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        
        .info {
        font: 600 14px Arial, Helvetica, sans-serif;;
   
        }
        
        .error {
        fill: #0af59f;
        }
       

        .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
        }
        
        .bold {
        font-weight: 700
        }
        
        @keyframes scaleInAnimation {
        from {
            transform: translate(-5px, 5px) scale(0);
        }
        to {
            transform: translate(-5px, 5px) scale(1);
        }
        }
        
        @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        }
        </style>
        <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="#121212" width="494" fill="#121212" stroke-opacity="1" />
        <g transform="translate(25, 35)">
        <g transform="translate(0, 0)">
            <text x="40" y="0" class="header">Stack Overflow Stats</text>
           
        </g>
        </g>
        <g transform="translate(0, 55)">
        <svg x="0" y="0">
            <g transform="translate(0, 40)">
            <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
                <text class="info bold error" y="12.5">${errorMessage}</text>
            </g>
            </g>
        </svg>
        </g>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="45px" fill="orange" x="-110" y="5"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
    </svg>

    `
}

