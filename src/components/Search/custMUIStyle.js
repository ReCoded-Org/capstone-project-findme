import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  customInput: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'red',
  },
  nameInput: {
    backgroundColor: 'white',
    borderColor: '#2A8DEF',
    flex: 1,
  },
  genderInput: {
    backgroundColor: 'white',
    width: '100%',
  },
  goneMissingOnInput: {
    backgroundColor: 'white',
    width: '100%',
  },
  clearButton: {
    borderRadius: 200,
    background: 'white',
    textTransform: 'capitalize',
    paddingLeft: '2em',
    paddingRight: '2em',
    '&:disabled': {
      backgroundColor: 'white',
    },
  },
  sendButton: {
    background: 'linear-gradient(to right, #B2F5EA, #4299E1, #2B6CB0);',
    borderRadius: 200,
    height: 'auto',
    fontWeight: 'bold',
    width: '8rem',
    textTransform: 'capitalize', 
    '&:disabled': {
        color: '#D1D5DB',
        opacity: '.75'
      },
  },
  textFieldInput: {
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#465055',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#138DEF',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'black',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: '#465055',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#138DEF',
    },
    '& .MuiFormLabel-asterisk': {
      color: 'red',
    },
  },
 
  colorSecondary: {
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#B9D8FE',
      opacity: 1,
    },
    '&.MuiSwitch-colorSecondary.Mui-checked': {
      color: '#138DEF',
    },
  },
  // switch: {
  //   '&$checked': {
  //       color: 'blue',
  //       backgroundColor: 'red'
  //   }
  // },

}));
export default useStyles;