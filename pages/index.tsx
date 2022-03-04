import React, { MouseEvent, useEffect, useState } from "react"; // Mouse even is the typing for the e event
import Layout from "../components/layout";

export default function Home({ x, y }: { x: number; y: number }) {
  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    x = e.pageX; // Equals to since the type is a number
    y = e.pageY;
    setX(x);
    setY(y);
  };

  const circArray: React.ReactSVGElement[] = [];
  const [xval, setX] = useState(0);
  const [yval, setY] = useState(0);

  const spawn = () => {
    for (let i = 0; i <= 10; i++) {
      const randx = Math.ceil(Math.random() * xval * 10 + (i * 5));
      const randy = Math.ceil(Math.random() * yval * 10 - (i * 5));
      const circ = React.createElement("circle", {
        cx: randx,
        cy: randy,
        r: 10,
        fill: "black",
      });
      addCirc((prevCircles) => [...prevCircles, circ]);
      if (i == 10) {
        circle.splice (0, circle.length)
      }
    }
  }

  // Get properties of an SVG an element while being rendered

  /* 
    if (circle.length - 1 > )
  */

  // Render an element after a new element is pushed to the stack, only render after a new circle was added

  // Render the circles up to 10 cirlces and cycle through those circles after they are rendered
  const [circle, addCirc] = useState(circArray);

  return (
    <div>
      <Layout>
        <div className="w-full h-full" onMouseMove={handleMouseMove}>
         
          <button onClick={spawn}>Spawn Circle</button>
          <br />
          {" "}
          {`The X value of the cursor ${xval}`}
          <br />
          {`The Y value of the cursor ${yval}`}
          <svg className="w-full h-full">
            <circle cx={`${xval}`} cy={`${yval - 140}`} r="10" fill="black" />
            {circle.map((c, index) => {
                return <svg key={index}> {c} </svg>;
            })}
          </svg>
        </div>
      </Layout>
    </div>
  );
}
