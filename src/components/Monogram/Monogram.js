import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
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
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
