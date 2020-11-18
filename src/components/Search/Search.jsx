/**
 *
 * component: Search
 * page: Search for Lost page
 *
 */

import React from 'react';
import SearchBackground from '../../images/searchBackground.svg';
import { places } from './placesData';
import { getCurrentDate, validateName, areObjectsEqual } from './helpers';
import useStyles from './custMUIStyle';
import { getSearchInfo } from './searchInfo';

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
import SearchIcon from '@material-ui/icons/SearchOutlined';

const IfLookingForFamily = (props) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.switchLookingForFamily}
          onChange={(e) => {
            props.handleSwitch('isLookingForFamily', e.target.checked);
          }}
          color="primary"
          name="isLooking"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label="Looking for family"
    />
  );
};

const ChooseGender = (props) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.genderInput}>
      <InputLabel id="">Gender</InputLabel>
      <Select
        labelId=""
        id=""
        value={props.gender}
        name="gender"
        onChange={function (value) {
          props.handleChange('gender', value.target.value);
        }}
        label="Gender"
      >
        <MenuItem value="m">Male</MenuItem>
        <MenuItem value="f">Female</MenuItem>
        <MenuItem value="n">Not to say</MenuItem>
      </Select>
    </FormControl>
  );
};

export const Search = () => {
  const classes = useStyles();

  const searchObj = {
    id: '',
    missingName: '',
    goneMissingOn: getCurrentDate(),
    lastSeenAt: '',
    gender: 'm',
    age: '',
    isMissingPerson: true,
    isLookingForFamily: true,
    isDataEntered: false,
  };

  const [searchInfo, setSearchInfo] = React.useState({ ...searchObj });

  const handleUserInput = (name, value) => {
    let targettedInput = {};
    targettedInput[name] = value;
    const newSearchInfo = {
      ...searchInfo,
      ...targettedInput,
    };
    setSearchInfo({
      ...newSearchInfo,
      isDataEntered: !areObjectsEqual(newSearchInfo, searchObj),
    });
  };

  const clearAll = () => {
    setSearchInfo({
      id: '',
      missingName: '',
      goneMissingOn: getCurrentDate(),
      lastSeenAt: '',
      gender: 'm',
      age: '',
      isMissingPerson: true,
      isLookingForFamily: true,
      isDataEntered: false,
    });
  };

  return (
    <section data-test-id="search-component">
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
                  className={classes.goneMissingOnInput}
                  label="Gone missing on"
                  value={searchInfo.goneMissingOn}
                  onChange={function (e) {
                    console.log(e);
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
                  className={classes.customInput}
                  options={places}
                  getOptionLabel={(option) => option.place}
                  inputValue={searchInfo.lastSeenAt}
                  onInputChange={(event, newInputValue) => {
                    handleUserInput('lastSeenAt', newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Last seen at"
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
              <div className="flex p-2">
                <TextField
                  id=""
                  className={classes.customInput}
                  value={searchInfo.age}
                  inputProps={{ min: 0 }}
                  label="Age"
                  type="number"
                  variant="outlined"
                  onChange={(value) => {
                    handleUserInput('age', value.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex p-2">
              <TextField
                id=""
                required
                className={classes.nameInput}
                value={searchInfo.missingName}
                label="Name"
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
                    disabled={!searchInfo.isDataEntered}
                    variant="contained"
                    classes={{root: classes.clearButton}}
                    startIcon={<ClearAllIcon />}
                    onClick={() => clearAll()}
                  >
                    Clear
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    disabled={validateName(searchInfo.missingName, '')}
                    variant="contained"
                    classes={{root: classes.sendButton,}}
                    color="primary"
                    startIcon={<SearchIcon />}
                    onClick={() => {
                      getSearchInfo({ ...searchInfo });
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Search;
