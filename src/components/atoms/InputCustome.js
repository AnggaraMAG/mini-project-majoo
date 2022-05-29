import React from "react";
import TextField from "@mui/material/TextField";
const InputCustome = (props) => {
  const { value, ...rest } = props;
  return <TextField {...rest} required value={value} />;
};

export default InputCustome;
