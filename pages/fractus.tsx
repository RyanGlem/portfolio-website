import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";

export default function Fractus({ }) {
  let canvasRef = useRef<HTMLDivElement>(null);

  //Linear Fractals
  const fractalGen = (PIXI: any, obj: any, startX:number, startY:number, radius:number,  sides: number, rotation:number, iterate:number, elapsed:number) => {
      if (iterate != 0) {
        var R = Math.floor (radius/255 * 100)
        var B =  (255)
        let hexColor = PIXI.utils.rgb2hex([R, 255, B])
        obj.beginFill(hexColor)
        obj.lineStyle(2)
        obj.drawRegularPolygon (startX, startY, radius, sides, rotation)
        iterate--
        let swayX = Math.cos (elapsed / 55) * 10
        let swayY = Math.sin (elapsed / 55) * 5
        fractalGen (PIXI, obj, startX + swayX, startY + swayY, radius*0.9, sides, rotation*0.9, iterate, elapsed)
      }
  };

  //Somehow have to slap this into a useEffect hook when the component is mounted and render the canvas to the screen
  useEffect(() => {
    const initRenderer = async () => {
      const screenX = window.innerWidth
      const screenY = window.innerHeight

      const centerX = screenX / 2
      const centerY = screenY / 2

      const PIXI = await import("pixi.js");
      const PIXIExtra = await import('@pixi/graphics-extras')
      const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundAlpha: 0,
        antialias: true,
      });
      canvasRef.current?.appendChild(app.view);

      const coinSprite = PIXI.Sprite.from("/images/coin.png");
      const fractal = new PIXI.Graphics();
      app.stage.addChild(fractal)

      // Game Loop
      let elapsed = 0.0;

      //fractalGen (obj, startX, startY, radius*0.8, sides, rotation*0.9, iterate)
      app.ticker.add((delta) => {
        fractal.clear()
        elapsed += delta;
        fractalGen (PIXI, fractal, Math.cos(elapsed/50) * 30 + centerX, centerY, 400, 4, elapsed / 65, 40, elapsed)
      });
      app.start();
    };
    initRenderer();
  });

  return (
    <Layout>
      <div ref={canvasRef}></div>
    </Layout>
  );
}


