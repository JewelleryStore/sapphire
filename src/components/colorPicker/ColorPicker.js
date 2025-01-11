// ColorPicker.js
import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { COLORS } from "../../constants/colors";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ colors, onColorChange, selectedColor }) => {
  return (
    <RadioGroup
      row
      value={selectedColor}
      onChange={(e) => onColorChange(e.target.value)}
      className={styles.colorPicker}
    >
      {colors.map((color) => (
        <FormControlLabel
          key={color}
          value={color}
          control={<Radio className={styles.radio} disableRipple />}
          label={
            <span
              className={`${styles.colorCircle} ${
                selectedColor === color ? styles.selected : ""
              }`}
              style={{
                backgroundColor: COLORS[color],
                "--inner-color": COLORS[color],
              }}
            />
          }
          className={styles.formControlLabel}
        />
      ))}
    </RadioGroup>
  );
};

export default ColorPicker;
