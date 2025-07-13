import * as React from "react";

import Svg, {Path, SvgProps} from "react-native-svg";

const Back = (props: SvgProps) => (
  <Svg width={362} height={288} fill="none" viewBox="0 0 362 288" {...props}>
    <Path
      fill="#000"
      d="M336.5 169h-298c-13.81 0-25-11.19-25-25s11.19-25 25-25h298c13.81 0 25 11.19 25 25s-11.19 25-25 25Z"
    />
    <Path
      fill="#000"
      d="M152.99 287.25c-6.08 0-12.18-2.21-16.99-6.67L8.5 162.33a25.004 25.004 0 0 1-5.81-28.563 25.003 25.003 0 0 1 6.06-8.327l131-118.25C150-2.06 165.81-1.25 175.06 9c9.25 10.25 8.44 26.06-1.81 35.31L62.53 144.25 170 243.92c10.12 9.39 10.72 25.21 1.33 35.33-4.93 5.31-11.62 8-18.34 8Z"
    />
  </Svg>
);
export default Back;
