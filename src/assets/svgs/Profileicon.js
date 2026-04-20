import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent({ active = false, ...props }) {
  return (
    <Svg width={28} height={28} viewBox="0 0 54 54" fill="none" {...props}>
      {active && (
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#EBD197" />
            <Stop offset="50%" stopColor="#B48811" />
            <Stop offset="51%" stopColor="#A2790D" />
            <Stop offset="100%" stopColor="#BB9B49" />
          </LinearGradient>
        </Defs>
      )}
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 26.708C0 11.958 11.958 0 26.708 0c14.75 0 26.708 11.958 26.708 26.708 0 14.75-11.957 26.708-26.708 26.708C11.958 53.416 0 41.46 0 26.708zm17.647-5.545a9.06 9.06 0 1118.122 0 9.06 9.06 0 01-18.122 0zM40.52 40.585c.47.715.32 1.66-.335 2.21a20.9 20.9 0 01-13.475 4.898 20.9 20.9 0 01-13.476-4.897 1.678 1.678 0 01-.335-2.212 16.535 16.535 0 0113.81-7.445 16.531 16.531 0 0113.811 7.446z"
        fill={active ? 'url(#grad)' : '#c19c60'}
      />
    </Svg>
  );
}

export default SvgComponent;
