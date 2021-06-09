// import { InputLabel, Select, MenuItem } from '@material-ui/core';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./Filter.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",

    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
}));

function Filter() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
console.log(value)
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="filter">
      <FormControl className={classes.formControl}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{
            classes: {
              root: classes.border,
              icon: classes.icon,
            },
          }}
        >
          <MenuItem value="">
            <em>Select characters</em>
          </MenuItem>
          <MenuItem value='Rick'>Rick</MenuItem>
          <MenuItem value='Morty'>Morty</MenuItem>
          <MenuItem value='Smith'>Family Smith</MenuItem>
          <MenuItem value='Rick, Morty, Smith'>Other characters</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default Filter;
