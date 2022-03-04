import React, { useEffect, useRef } from "react";

export default function Container({ canvasRef } : {canvasRef: any}) {

  const physics  = (object : any) => {
    object.y += 1.685
  }

  useEffect(() => {
    const initRenderer = async () => {
      const screenX = window.innerWidth
      const screenY = window.innerHeight

      const PIXI = await import("pixi.js");
      const PIXIExtra = await import('@pixi/graphics-extras')

      const app = new PIXI.Application({
        width: screenX,
        height: screenY,
        backgroundAlpha: 0,
        antialias: true,
      });
      canvasRef.current?.appendChild(app.view);

      const rect = new PIXI.Graphics()
      rect.drawRect (screenX / 2, 0, 100, 100)
      rect.beginFill(0xaec0f)
      app.stage.addChild(rect)

      // Game Loop
      let elapsed = 0.0
      app.ticker.add((delta) => {
        physics(rect)
        elapsed += delta;
      });
      app.start()
    };
    initRenderer();
  });

  return (
      <div ref={canvasRef}></div>
  );
}