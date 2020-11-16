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

import SearchBackground from '../../images/searchBackground.svg';
import { places } from './placesData';
import { getCurrentDate, validateName } from './helpers';
import useStyles from './custMUIStyle';
import { getSearchInfo } from './searchInfo';

import {useTranslation} from "react-i18next";


const CheckMissingPerson = (props) => {
  const [t, i18n] = useTranslation('common');

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.checkMissingPerson}
          name="checkMissing"
          color="primary"
          startIcon={<ClearAllIcon />}
          onChange={(e) => {
            props.handleCheck('isMissingPerson', e.target.checked);
          }}
        />
      }
      label={t('translation.missingPerson')}
    />
  );
};

const IfLookingForFamily = (props) => {
  const [t, i18n] = useTranslation('common');

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
      label={t('translation.lookingForFamily')}
    />
  );
};

const ChooseGender = (props) => {
  const [gender, setGender] = React.useState('m');
  const Classes = useStyles();
  const [t, i18n] = useTranslation('common');

  return (
    <FormControl variant="outlined" className={Classes.genderInput}>
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
  const Classes = useStyles();

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

    setSearchInfo({
      ...searchInfo,
      ...targettedInput,
      isDataEntered: targettedInput[name] !== searchObj[name] ? true : false,
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

  // Translation
  const [t, i18n] = useTranslation('common');

  return (
    <section>
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
                  className={Classes.goneMissingOnInput}
                  label={t('translation.lostSince')}
                  value={searchInfo.goneMissingOn}
                  onChange={function (e) {
                    handleUserInput('goneMissingOn', e.target.value);
                  }}
                  type="date"
                  variant="outlined"
                />
              </div>
              <div className="p-2 flex-1">
                <Autocomplete
                  id=""
                  defaultValue={null}
                  inputValue={searchInfo.lastSeenAt}
                  className={Classes.customInput}
                  options={places}
                  getOptionLabel={(option) => option.place}
                  onChange={function (e, inputValue) {
                    handleUserInput('lastSeenAt', inputValue.place);
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
              <div className="flex p-2">
                <TextField
                  id=""
                  className={Classes.customInput}
                  value={searchInfo.age}
                  label={t('translation.age')}
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
                className={Classes.nameInput}
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
                <CheckMissingPerson
                  checkMissingPerson={searchInfo.isMissingPerson}
                  handleCheck={handleUserInput}
                />
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
                    endIcon={<ClearAllIcon />}
                    onClick={() => clearAll()}
                  >
                  {t('translation.clear')}
                  </Button>
                </div>
                <div className="p-2">
                  <Button
                    disabled={validateName(searchInfo.missingName, '')}
                    variant="contained"
                    className={Classes.sendButton}
                    color="primary"
                    endIcon={<SendIcon />}
                    onClick={() => {
                      getSearchInfo({ ...searchInfo });
                    }}
                  >
                  {t('translation.send')}
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
