import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function CustomSlider({value, setValue}) {

 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-[95%] mx-auto">
      <Box sx={{ width: "100%" }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          color="warning"
          sx={{
            width: "100%",
            color: 'warning',
          }}
        />
      </Box>
    </div>
  );
}

export default CustomSlider;
