import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useStyles} from './UseStyles'
 const useForm = (initialFValues)=> {
    const [values, setValues] = useState(initialFValues);
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
       
      }
    return {
        values,
        setValues,
        handleInputChange,
    }
}




const Form=(props)=> {
    const classes = useStyles();
  
    const { children, ...other } = props;
    return ( 
        <form   className={classes.root}
            autoComplete = "off" {...other } > { props.children } 
        </form>
    )
    
}

export {useForm,Form  }