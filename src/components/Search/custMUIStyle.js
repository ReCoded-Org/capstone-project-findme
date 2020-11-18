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
    '&:disabled': {
      backgroundColor: 'white',
    },
  },
  sendButton: {
    background: 'white',
    borderRadius: 200,
    height: 'auto',
    color: '#4299e1',
    fontWeight: 'bold',
    border: '2px solid #4299e1',
    '&:disabled': {
      backgroundColor: 'white',
      border: '2px solid rgba(0, 0, 0, 0.26)',
    },
    '&:hover': {
      backgroundColor: '#4299e1',
      border: '2px solid #4299e1',
      color: 'white',
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
      backgroundColor: '#b9d8fe',
      opacity: 1,
    },
    '&.MuiSwitch-colorSecondary.Mui-checked': {
      color: '#138DEF',
    },
  },
}));

export default useStyles;
