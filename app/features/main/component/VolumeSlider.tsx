 "useClient";
import { useTheme } from "@/app/hooks/themeContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function VolumeSlider() {
  const [value, setValue] = useState<number>(30);
  const { iconTheme,volumeColor } = useTheme();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <img
          src={`/assets/images/soundMute_${iconTheme}.png`}
          alt="soundIcon"
          className="bg-no-repeat bg-transparent bg-center object-cover w-[11%] "
        ></img>
        <Slider
          aria-label="Volume"
          value={value}
          color={volumeColor}
          onChange={handleChange}
        />
        <img
          src={`/assets/images/soundOn_${iconTheme}.png`}
          alt="soundIcon"
          className="bg-no-repeat bg-transparent bg-center object-cover w-[12%] "
        ></img>
      </Stack>
    </Box>
  );
}
