import { Grid, Tooltip } from "@material-ui/core";
import React from "react";
import { Label, Radio, ErrorText } from "./styles";
export type RadioType = {
  label: string;
  value: number | string;
};

interface Types {
  tooltip: string;
  name?: string;
  group: RadioType[];
  value?: number | string;
  error?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

const RadioGroup: React.FC<Types> = (props) => (
  <Grid container direction="column">
    <Grid item container wrap="nowrap" spacing={3}>
      {props.group.map((element, index) => (
        <Grid item key={index}>
          <Radio
            checked={props.value === element.value}
            onChange={props.onChange}
            id={`${element.value}_${index}`}
            value={element.value}
            name={props.name}
          />
          <Tooltip title={props.tooltip} arrow>
            <Label error={props.error} htmlFor={`${element.value}_${index}`}>
              <span>{element.label}</span>
            </Label>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
    {props.error && props.helperText && (
      <ErrorText>{props.helperText}</ErrorText>
    )}
  </Grid>
);

export default RadioGroup;
