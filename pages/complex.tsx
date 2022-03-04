import { Hmac } from "crypto";
import { ClientRequest } from "http";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";

var g_accel = 9.8
var time = 0.0


export default function Complex({ }) {

  let canvasRef = useRef<HTMLDivElement>(null);

  const draw = (object : any, app:  any, PIXI: any) => {
    for (var i = 0; i < 10; i++) {
       physics(object, app, PIXI)
    }
  }

  const physics  = (object : any, app: any, PIXI : any) => {
    let endY = app.screen.bottom
    let boundedRect = new PIXI.Rectangle()
    boundedRect.copyFrom (object.getBounds())
    time++
    var t = time/100
    var v = g_accel * t

    if (boundedRect.bottom < endY) {
      object.y += v
      //object.x += time/100
      var height =v*t + 1/2*g_accel * t*t
      //console.log("Height: " + height, "Time: " + t, "Velocity: " + v) 
    } 
}
  const collision = (obj: any) => {
    obj.acceleration = 1
  }

  useEffect(() => {
    const initRenderer = async () => {
      const screenX = window.innerWidth
      const screenY = window.innerHeight - 72

      const centerX = screenX / 2
      const centerY = screenY / 2

      const PIXI = await import("pixi.js");
      const PIXIExtra = await import('@pixi/graphics-extras')
      const app = new PIXI.Application({
        width: screenX,
        height: screenY,
        backgroundAlpha: 0,
        antialias: true,
      });
      canvasRef.current?.appendChild(app.view);

      let squares:any = []
      

      for (var i = 0 ; i < 10; i++) {
        const rect:any = new PIXI.Graphics()
        rect.beginFill(Math.random() * 0xFFFFFFF)
        rect.drawRect(0, 0, 100, 100)
        rect.x = (centerX + Math.random() * 400)
        rect.y = (centerY + Math.random() * 400)
        squares.push (rect)
      }

      app.stage.addChild(squares[0])
      app.stage.addChild(squares[1])
      
      //rect.drawRect(centerX, 0, 100, 100)

      // Game Loop
      let elapsed = 0.0;
      //draw (rect, app, PIXI)
      const rectangle = squares[0]
      rectangle.moveTo(300, 600)
      const circle = new PIXI.Graphics()
      app.stage.addChild(circle)
      circle.x = centerX
      circle.y = centerY
      
      app.ticker.add((delta) => {
        elapsed += delta;
        /*circle.lineStyle(2)
        circle.beginFill(0xFFFFFF * elapsed/1000)
        circle.drawEllipse(0, 0, 10, 50)
        circle.rotation = elapsed/10
        rectangle.rotation = elapsed/10 */
       

        //physics (rect, app, PIXI)
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