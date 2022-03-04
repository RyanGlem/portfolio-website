import {useState} from "react"
import Isobar from "../components/isobar";
import Slider from "@mui/material/Slider";
import Layout from "../components/layout";
import Box from "@mui/material/Box";

export default function Example({}) {

    //Triple functions to handle the changing of the individual R, G, B values for the sliders
    const [Rvalue, setRValue] = useState(150)
    const handleRChange = (event:any, newValue:any) => {
        setRValue(newValue)
    }

    const [Gvalue, setGValue] = useState(250)
    const handleGChange = (event:any, newValue:any) => {
        setGValue(newValue)
    }

    const [Bvalue, setBValue] = useState(150)
    const handleBChange = (event:any, newValue:any) => {
        setBValue(newValue)
    }
  return (
    <Layout>
        <Isobar
          highLabel="HIGH"
          lowLabel="LOW"
          titleLabel="PRESSURE"
          colorOffset={{ midR: Rvalue, G: Gvalue, midB: Bvalue }}
        >
          {/*Offests object
            midR and midB controls the blue and green bias for the middle transition between the top and bottom of the isboar
            G controls the total green value of the isobar */}
            {/*Creating sliders for different color offsets*/}
          <Box sx={{ alignContent: "flex-end", width: 340, m: 10 }}>
            R
            <Slider
              min={0}
              max={255}
              value={Rvalue}
              defaultValue={150}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={handleRChange}
            />
            G
            <Slider
              min={0}
              max={255}
              value={Gvalue}
              defaultValue={250}
              onChange={handleGChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
            B
            <Slider
              min={0}
              max={255}
              value={Bvalue}
              defaultValue={150}
              onChange={handleBChange}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
        </Isobar>
    </Layout>
  );
}
