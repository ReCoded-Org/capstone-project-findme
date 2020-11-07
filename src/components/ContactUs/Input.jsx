import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange,multi } = props;
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
