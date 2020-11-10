import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  customInput: {
    backgroundColor: 'white',
    width: '100%',
  },
  nameInput: {
    backgroundColor: 'white',
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
}));

export default useStyles;
