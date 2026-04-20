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
      <G clipPath="url(#clip0_1459_3657)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 .125a3.667 3.667 0 00-3.667 3.667v1.124a3.455 3.455 0 00-1.942 2.713c-.058.512-.1 1.04-.1 1.58 0 .539.042 1.067.1 1.578a3.458 3.458 0 003.298 3.048c.738.026 1.495.04 2.311.04.816 0 1.573-.014 2.311-.04a3.458 3.458 0 003.298-3.048 14 14 0 00.1-1.579 14 14 0 00-.1-1.579 3.455 3.455 0 00-1.943-2.713V3.792A3.667 3.667 0 007 .125zm2.166 4.451v-.784a2.167 2.167 0 10-4.333 0v.784A65.033 65.033 0 017 4.542c.762 0 1.474.011 2.166.034zM7 7.876a.75.75 0 01.75.75v.999a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75z"
          fill="url(#grad)"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1459_3657">
          <Path fill="url(#grad)" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
