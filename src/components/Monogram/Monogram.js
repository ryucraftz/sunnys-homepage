import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg width="2563" height="2571" viewBox="0 0 2563 2571" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1879.5 432V964.5L2397.5 1971V432L2149.5 891.5L1879.5 432Z" fill="white"/>
    <path d="M16 2460L1274 2L2558 2460H2197L1274 742L391.5 2460H16Z" fill="white"/>
    <path d="M1879.5 432V964.5L2397.5 1971V432L2149.5 891.5L1879.5 432Z" stroke="white"/>
    <path d="M16 2460L1274 2L2558 2460H2197L1274 742L391.5 2460H16Z" stroke="white"/>
    <g filter="url(#filter0_d_0_1)">
    <path d="M391.5 2562.5L1270.5 844.5L2178.5 2562.5H2000L1270.5 1183.5L570 2562.5H391.5Z" fill="white"/>
    <path d="M938.5 2175.5L1270.5 1534L1620.5 2175.5H938.5Z" fill="white"/>
    <path d="M1803 97H2485L2138.5 750L1803 97Z" fill="white"/>
    <path d="M2178.5 2562.5L1270.5 844.5L391.5 2562.5H570L1270.5 1183.5L2000 2562.5H2178.5ZM2178.5 2562.5H2558L1270.5 97L5 2562.5M938.5 2175.5L1270.5 1534L1620.5 2175.5H938.5ZM1803 97H2485L2138.5 750L1803 97ZM2415.5 2073.5V534.5L2138.5 1001.5L1886.5 534.5V1092.5L2393.5 2073.5H2415.5Z" stroke="black"/>
    </g>
    <defs>
    <filter id="filter0_d_0_1" x="0.555175" y="95.9125" width="2562.27" height="2475.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
    </filter>
    </defs>
    </svg>
    
  );
});
