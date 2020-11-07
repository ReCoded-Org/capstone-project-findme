import React from 'react'
import { TextField ,MenuItem ,Switch   } from '@material-ui/core';
import {useStyles} from './UseStyles'
import { withStyles } from "@material-ui/core/styles";
const Input=(props)=> {
    const classes = useStyles();
    const { name, label, value,type, onChange ,required ,rows, multiline,InputLabelProps = {}  } = props;
    return (required ? 
        <TextField
        required
        variant="outlined"
        label={label}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        className={classes.textFieldInput}
        InputLabelProps={{  ...InputLabelProps }}
      />
      : 
      <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      className={classes.textFieldInput}
      InputLabelProps={{  ...InputLabelProps }} 
    />  
    )
}
const Select=(props)=> {
    const gender = [
        {
          value: 'male',
          label: 'male',
        },
        {
          value: 'Female',
          label: 'Female',
        }]
    const classes = useStyles();
    const { name, label, value, onChange , InputLabelProps = {} } = props;
    return (  
        <TextField
        select
        variant="outlined"
        label={label}
        value={value}
        name={name}
        onChange={onChange}        
        className={classes.textFieldInput}
        InputLabelProps={{  ...InputLabelProps }}
      >
        {gender.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>)
}

const Textarea=(props)=> {
    const classes = useStyles();
    const { name, label, value, onChange  } = props;
    return (
        <TextField
        value={value}
        label={label}
        name={name}
        multiline
        rows={4}
        variant="outlined"
        onChange={onChange}
        className={classes.textFieldInput}

      />
    )
}
const SwitchToggle =(props)=> {
    const CustomSwitch = withStyles({
        colorSecondary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: '#b9d8fe',
            opacity: 1
           
          },
       "&.MuiSwitch-colorSecondary.Mui-checked":{
        color: '#138DEF'
       }
        },
        track: {
          backgroundColor: "#138DEF"
        }
      })(Switch);
        const [state, setState] = React.useState({
          checkedA: false,
          checkedB: true
        });
      
        const handleChange = (name) => (event) => {
          setState({ ...state, [name]: event.target.checked });
        };
        return (
         
            <CustomSwitch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
      
        );
}

const Button = (props) => {
  return (
    <div className='float-right ml-10 hover:opacity-50 ' >
      <button
        className={props.nameClass}
        onClick={props.onClickMethod}
        type={props.type}
      >
        <div className=" flex flex-row-reverse justify-center">
          {props.buttonName}
          <img src={props.icon} alt="" className='mr-2' width='20px' />
        </div>
      </button>
    </div>
  );
};


export { Input , Select , Textarea ,SwitchToggle,Button}