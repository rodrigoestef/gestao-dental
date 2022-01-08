import React, { useState } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";

const CustonTextFieldEnabled: React.FC<TextFieldProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props?.value !== "");

  return (
    <TextField
      {...props}
      size="small"
      fullWidth={true}
      focused={checked}
      onChange={(event) => {
        if (checked && props?.onChange) {
          props.onChange(event);
        }
      }}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <Checkbox
            color="primary"
            checked={checked}
            onChange={(_, value) => setChecked(value)}
          />
        ),
      }}
    />
  );
};

export default CustonTextFieldEnabled;
