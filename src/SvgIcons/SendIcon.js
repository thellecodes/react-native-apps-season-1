import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";

export default ({}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 74.5 80.5"
    >
      <Defs></Defs>
      <G data-name="Group 2">
        <G data-name="Button bg">
          <G filter="url(#prefix__a)">
            <Circle
              data-name="Button bg"
              cx={28}
              cy={28}
              r={28}
              transform="translate(9.25 9.25)"
              fill="#db4437"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={0.5}
            />
          </G>
          <G filter="url(#prefix__b)">
            <Circle
              data-name="Button bg"
              cx={28}
              cy={28}
              r={28}
              transform="translate(9.25 9.25)"
              fill="#fff"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={0.5}
            />
          </G>
        </G>
        <G data-name="Group 1">
          <Path
            data-name="Path 4"
            d="M36.583 38.043l2.587-2.4H26.429v2.4z"
            fill="#f4b400"
          />
          <Path
            data-name="Path 5"
            d="M36.391 37.978l2.4-2.554v12.58h-2.4z"
            fill="#0f9d58"
          />
          <Path
            data-name="Path 3"
            d="M38.79 35.706l-2.4 2.337V26.536h2.4z"
            fill="#db4437"
          />
          <Path
            data-name="Path 2"
            d="M38.9 35.641l-2.51 2.4h12.362v-2.4z"
            fill="#4285f4"
          />
        </G>
      </G>
    </Svg>
  );
};
