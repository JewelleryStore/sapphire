// ColorPicker.js
import React from "react";
import { COLORS } from "../../constants/colors";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ colors, onColorChange, selectedColor }) => {
  return (
    <div className={styles.colorPicker}>
      {colors.map((color) => (
        <label key={color} className={styles.colorPickerLabel}>
          <input
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={() => onColorChange(color)}
            className={styles.colorPickerInput}
          />
          <span
            className={styles.colorPickerCircle}
            style={{ backgroundColor: COLORS[color] }}
          ></span>
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
