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
  sendButton: {
    background: 'linear-gradient(45deg, #205a9e 30%, #5398ff 90%)',
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
