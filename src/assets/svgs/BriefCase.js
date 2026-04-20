import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 14 14"
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
      <G clipPath="url(#clip0_1459_3563)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.066 2.565A1.47 1.47 0 017 2.25c.371 0 .705.124.934.315.224.187.316.408.316.603v.455a44.933 44.933 0 00-2.5 0v-.455c0-.195.092-.416.316-.603zM4.25 4.053v-.885c0-.69.33-1.317.855-1.755A2.967 2.967 0 017 .75c.69 0 1.373.227 1.895.663.525.438.855 1.066.855 1.755v10.023a.496.496 0 01-.469.497c-.747.04-1.508.06-2.281.06-.779 0-1.547-.035-2.298-.085a.497.497 0 01-.463-.497V4.158c0-.036.004-.071.011-.105zm7.13 9.482a.347.347 0 01-.38-.346V4.197c0-.224.192-.4.415-.379 1.059.1 1.95.886 2.113 1.964.142.934.222 1.905.222 2.895 0 .984-.088 1.937-.226 2.859-.164 1.092-1.065 1.9-2.145 2zM2.988 4.213c0-.235-.2-.42-.434-.397-1.043.1-1.924.87-2.086 1.935a19.459 19.459 0 00-.01 5.737c.167 1.133 1.129 1.922 2.218 2.014l.24.02a.066.066 0 00.072-.066V4.213z"
          fill="url(#grad)"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1459_3563">
          <Path fill="url(#grad)" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
