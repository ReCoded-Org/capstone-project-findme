import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  clearButton: {
    borderRadius: 200,
    background: 'white',
    border: '1px solid #776969',
    boxShadow: 'none',
    color: '#776969',
    '&:disabled': {
      backgroundColor: 'white',
      borderColor: 'gainsboro',
    },
    '&:hover': {
      boxShadow: 'none',
      background: 'white',
    },
  },
  sendButton: {
    background: ' linear-gradient(to right, #b2f5ea, #4299e1, #2b6cb0);',
    borderRadius: 200,
    height: 'auto',
    fontWeight: 'bold',
    width: '8rem',
    '&:disabled': {
      color: 'gainsboro',
    },
  },
  textFieldInput: {
    background: 'white',
    borderColor: 'red',
    width: '100%',
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
}));

export default useStyles;
