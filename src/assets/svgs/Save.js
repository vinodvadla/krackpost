import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 43 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#EBD197" />
          <Stop offset="50%" stopColor="#B48811" />
          <Stop offset="51%" stopColor="#A2790D" />
          <Stop offset="100%" stopColor="#BB9B49" />
        </LinearGradient>
      </Defs>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.886 0C5.447 0 .836 4.288.51 9.95c-.724 12.512-.687 25.063.184 37.583.299 4.295 5.327 6.303 8.376 3.345l11.604-11.26a.936.936 0 011.31 0l11.604 11.26c3.05 2.958 8.077.95 8.376-3.345.871-12.52.908-25.071.184-37.582C41.82 4.288 37.21 0 31.77 0H10.886z"
        fill="url(#grad)"
      />
    </Svg>
  );
}

export default SvgComponent;
