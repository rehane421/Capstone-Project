import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextFieldAtom = ({
  id,
  label,
  name,
  autoComplete,
  onChange,
  setEmail,
  setPassword
}) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={name}
      autoFocus
      onChange={onChange}
    />
  );
};
export default TextFieldAtom;
