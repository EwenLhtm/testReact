import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "absolute",
  top:0,
  bottom:0,
  left:0,
  right:0,
  margin:'auto',
  width: "3rem",
  height: "3rem",
  boxSizing: "border-box"
};

const circleStyle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 0.75
};

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
