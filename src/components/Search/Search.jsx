/**
 *
 * component: Search
 * page: Search for Lost page
 *
 */

import React from 'react';

/**
 * importing Material UI dependencies
 */
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import ClearAllIcon from '@material-ui/icons/BackspaceOutlined';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import MissingPeople from '../../containers/MissingPeople/MissingPeoplePage'
import SearchBackground from '../../images/searchBackground.svg';
import { places } from './placesData';
import { getCurrentDate, validateName, areObjectsEqual } from './helpers';
import useStyles from './custMUIStyle';
import { getSearchInfo } from './searchInfo';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";


//import useFirestore from '../../hooks/useFirestore'
// const CheckMissingPerson = (props) => {

//   return (
//     <FormControlLabel
//       control={
//         <Checkbox
//           checked={props.checkMissingPerson}
//           name="checkMissing"
//           color="primary"
//           startIcon={<ClearAllIcon />}
//           onChange={(e) => {
//             props.handleCheck('isMissingPerson', e.target.checked);
//           }}
//         />
//       }
//       label="Missing Person"
//     />
//   );
// };

const IfLookingForFamily = (props) => {
  const Classes = useStyles();
  const [t, i18n] = useTranslation('common');

  
  const theme = createMuiTheme({
    overrides: {
      MuiSwitch: {
        switchBase: {
          color: "#ccc"
        },
        colorSecondary: {
          "&$checked": {
            color: "#138DEF"
          }
        },
        track: {
          opacity: 0.2,
          "$checked$checked + &": {
            opacity: 0.7,
            backgroundColor: "#138DEF"
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme = {theme}>
    <FormControlLabel
      control={
        <Switch
          checked={props.switchLookingForFamily}
          onChange={(e) => {
            props.handleSwitch('isLookingForFamily', e.target.checked);
          }}
          // color="primary"
          // className={Classes.colorSecondary}
          name="isLooking"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label={t('translation.lookingForFamily')}
    />
    </ThemeProvider>
  );
};

const ChooseGender = (props) => {
  // const [gender, setGender] = React.useState('m');
  const [t, i18n] = useTranslation('common');
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.textFieldInput}>
      <InputLabel id="">{t('translation.gender')}</InputLabel>
      <Select
        labelId=""
        id=""
        value={props.gender}
        name="gender"
        onChange={function (value) {
          props.handleChange('gender', value.target.value);
        }}
        label={t('translation.gender')}
      >
      <MenuItem value="m">{t('translation.male')}</MenuItem>
      <MenuItem value="f">{t('translation.female')}</MenuItem>
      <MenuItem value="n">{t('translation.notToSay')}</MenuItem>
      </Select>
    </FormControl>
  );
};

const Search = () => {
  // const Classes = useStyles();
  const [searched,setSearched]= React.useState(false)
  const [t, i18n] = useTranslation('common');
  const classes = useStyles();
  const searchObj = {
    id: '',
    missingName: '',
    goneMissingOn: getCurrentDate(),
    lastSeenAt: '',
    gender: 'm',
    // age: '',
    // isMissingPerson: false,
    isLookingForFamily: false,
    // isDataEntered: false,
  };

  const [searchInfo, setSearchInfo] = React.useState({ ...searchObj });
  const [isDataEntered, setIsDataEntered] = React.useState(false);

  const handleUserInput = (name, value) => {
    let targettedInput = {};
    targettedInput[name] = value;
    setSearched(true);
    // setSearchInfo({
    //   ...searchInfo,
    //   ...targettedInput,
    //   isDataEntered: targettedInput[name] !== searchObj[name] ? true : false,
    // });
    const newSearchInfo = {
      ...searchInfo,
      ...targettedInput,
    };
    setIsDataEntered(!areObjectsEqual(newSearchInfo, searchObj));
    setSearchInfo({
      ...newSearchInfo
    });
  };

  const clearAll = () => {
    // setSearchInfo({
    //   id: '',
    //   missingName: '',
    //   goneMissingOn: getCurrentDate(),
    //   lastSeenAt: '',
    //   gender: 'm',
    //   age: '',
    //   isMissingPerson: false,
    //   isLookingForFamily: false,
    //   isDataEntered: false,
    // });
    setSearchInfo({...searchObj});

    setSearched(false);
  };

  return (
    <section >
      <div className="bg-gray-200" id="search-container">
        <div className="">
          <figure className="flex items-center p-10">
            <img
              src={SearchBackground}
              alt="Search Background"
              className="m-auto"
            />
          </figure>
        </div>
        <div>
          <form className="flex flex-col p-10">
            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="p-2">
                <TextField
                  id=""
                  className = {classes.textFieldInput}
                  label={t('translation.lostSince')}
                  value={searchInfo.goneMissingOn}
                  onChange={function (e) {
                    e.persist();
                    handleUserInput('goneMissingOn', e.target.value);
                  }}
                  type="date"
                  variant="outlined"
                />
              </div>
              <div className="p-2 flex-1">
              <Autocomplete
                  freeSolo
                  id=""
                  // defaultValue={null}
                  inputValue={searchInfo.lastSeenAt}
                  className = {classes.textFieldInput}
                  options={places}
                  getOptionLabel={(option) => option.place}
                  // onChange={function (e, inputValue) {
                  //   handleUserInput('lastSeenAt', inputValue.place);
                  // }}
                  onInputChange={(event, newInputValue) => {
                    handleUserInput('lastSeenAt', newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t('translation.lastSeenAt')}
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <div className="p-2 md:w-1/4">
                <ChooseGender
                  gender={searchInfo.gender}
                  handleChange={handleUserInput}
                />
              </div>
            
            </div>
            <div className="flex p-2">
              <TextField
                id=""
                required
                className={classes.textFieldInput}
                value={searchInfo.missingName}
                label={t('translation.name')}
                type="text"
                variant="outlined"
                onChange={(value) => {
                  handleUserInput('missingName', value.target.value);
                }}
              />
            </div>
            <div
              id="more-option"
              className="flex justify-between flex-col md:flex-row"
            >
              
              <div className="p-2 flex flex-row">
                <IfLookingForFamily
                  switchLookingForFamily={searchInfo.isLookingForFamily}
                  handleSwitch={handleUserInput}
                />
              </div>
              <div className="flex justify-self-end">
                <div className="p-2">
                  <Button
                    // disabled={!searchInfo.isDataEntered}
                    disabled={!isDataEntered}

                    variant="contained"
                    
                    // className={classes.clearButton}
                    classes={{root: classes.clearButton}}
                    startIcon={<ClearAllIcon />}
                    onClick={() => clearAll()}
                  >
                  {t('translation.clear')}
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    disabled={validateName(searchInfo.missingName, '')}
                    variant="contained"
                    className="bg-gradient-to-r from-teal-200 via-blue-500 to-blue-700 rounded-full"
                    // className={Classes.sendButton}
                    classes={{root: classes.sendButton,}}
                    color="primary"
                    startIcon={<SearchIcon />}
                    onClick={() => {
                      getSearchInfo({ ...searchInfo });
                    }}
                  >
                  {t('translation.search')}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
      <MissingPeople searched={searched}  searchInfo={searchInfo}/>
    </section>
  );
};
export default Search;
