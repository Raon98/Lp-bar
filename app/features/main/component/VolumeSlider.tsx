"useClient";
import { useTheme } from "@/app/hooks/themeContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function VolumeSlider() {
  const [value, setValue] = useState<number>(30);
  const { iconTheme, volumeColor } = useTheme();

  const func = {
    handleChange : (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    }
  }


  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <button className="w-[15%]" onClick={() => setValue(0)}>
          <img
            src={`/assets/images/soundMute_${iconTheme}.png`}
            alt="soundIcon"
            className="bg-no-repeat bg-transparent bg-center object-cover"
          ></img>
        </button>
        <Slider
          aria-label="Volume"
          value={value}
          color={volumeColor}
          onChange={func.handleChange}
        />
        <button className="w-[17%]" onClick={() => setValue(100)}>
          <img
            src={`/assets/images/soundOn_${iconTheme}.png`}
            alt="soundIcon"
            className="bg-no-repeat bg-transparent bg-center object-cover"
          ></img>
        </button>
      </Stack>
    </Box>
  );
}
