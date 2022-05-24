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
    <svg xmlns="http://www.w3.org/2000/svg" width="495" height="205" viewBox="0 0 495 205" fill="none">
        <style>
        .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: ${usernameColour};
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
        
        
        /* Animations */
        
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
            <text x="0" y="0" class="header">${username}'s Stack Overflow Stats</text>
            <text x="0" y="20" class="info percentile">${percentile} 🔥</text>
        </g>
        </g>
        <g transform="translate(0, 55)">
        <svg x="0" y="0">
            <g transform="translate(0, 15)">
            <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
                <text class="info bold reputation" y="12.5">Reputation:</text>
                <text class="info reputation" x="200" y="12.5">${reputation}</text>
            </g>
            </g>
            <g transform="translate(0, 40)">
            <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
                <text class="info bold reached" y="12.5">Reached:</text>
                <text class="info reached" x="200" y="12.5">${reached}</text>
            </g>
            </g>
            <g transform="translate(0, 65)">
            <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
                <text class="info bold answers" y="12.5">Answers:</text>
                <text class="info easy answers" x="200" y="12.5">${answers}</text>
            </g>
            </g>
            <g transform="translate(0, 90)">
            <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
                <text class="info bold questions" y="12.5">Questions:</text>
                <text class="info questions" x="200" y="12.5">${questions}</text>
            </g>
            </g>
            <g transform="translate(0, 115)">
            <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">
                <text class="info bold badges" y="12.5">Badges:</text>
                <text class="info badges" x="200" y="12.5">${badges}</text>
            </g>
            </g>
        </svg>
        </g>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="60px" fill="grey" x="160" y="80"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
    </svg>

    `
}

export const fetchErrorSvg = (errorMessage: string): string => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="495" height="205" viewBox="0 0 495 205" fill="none">
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
        
        
        /* Animations */
        
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
            <text x="0" y="0" class="header">Stack Overflow Stats</text>
           
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="60px" fill="orange" x="160" y="80"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
    </svg>
    `
}

