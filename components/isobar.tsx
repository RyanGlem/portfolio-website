import React from "react";

const Isobar: React.FC<{
  highLabel?: string;
  titleLabel?: string;
  lowLabel?: string;
  colorOffset: {
    midR: number;
    G: number;
    midB: number;
  };
}> = ({ highLabel, titleLabel, lowLabel, colorOffset, children }) => {
  // Creating the bar element so it can communicate to the virtual DOM
  const bar = React.createElement("rect", {
    x: 10,
    width: 24,
    height: "100%",
    rx: 4,
    fill: "url(#gradient)",
  });

  return (
    //Div element using tailwinds CSS so it can fill the entire screen
    <div className="h-screen">
      <div className="absolute">{children}</div>
      Isobar
      <svg id="bar" className="h-full" x="25">
        {bar}
        <defs>
          {/*Using React based linearGradient component to get the correct color values */}
          {/* `${} ` */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(255,0,0)" stopOpacity="100%" />
            <stop
              offset="50%"
              stopColor={`rgb(255,${colorOffset.G},0)`}
              stopOpacity="100%"
            />
            <stop
              offset="60%"
              stopColor={`rgb(${255 - colorOffset.midR},255,${
                255 - colorOffset.midB
              })`}
              stopOpacity="100%"
            />
            <stop
              offset="70%"
              stopColor={`rgb(0,${colorOffset.G},255)`}
              stopOpacity="100%"
            />
            <stop offset="100%" stopColor="rgb(0,0,255)" stopOpacity="100%" />
          </linearGradient>
        </defs>
        {/*Text translation and grouping */}
        <g
          id="text"
          transform="translate(16.4, 12) rotate(90)"
          stroke="white"
          fill="white"
        >
          <text x="6">{highLabel}</text>
          <text x="230%">{lowLabel}</text>
          <text x="310">{titleLabel}</text>
        </g>
      </svg>
    </div>
  );
};

export default Isobar;
