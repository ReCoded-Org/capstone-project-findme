import React from 'react'
//Importing TextField Material Ui element
import { TextField } from '@material-ui/core';

//This function is used to create the UI textField based on the assigned prps
//It is reusable as it can be imported and used at any form 

export default function Input(props) {
//exporting the props recieved 
    const { name, label, value,error=null, onChange,multi } = props;
    //returning the Ui TextField components either as a single or multiline
    return (!multi?
        <TextField  
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
            inputProps={{style: {fontSize: 12}}} // font size of input text
            
            />
            :
            <TextField
            value={value}
            label={label}
            name={name}
            multiline
            rows={4}
            variant="outlined"
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
            InputLabelProps={{style: {fontSize: 12}}} // font size of input label
            inputProps={{style: {fontSize: 12}}} // font size of input text
          />
    )
}
