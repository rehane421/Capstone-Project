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
    <div>
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
    </div>
  );
};
export default TextFieldAtom;
