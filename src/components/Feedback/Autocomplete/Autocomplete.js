/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { DUMMY_COUNTRY_DATA } from "../../../data/dummy_country_data";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}
//   option: {
//     // Hover
//  with light-grey
//     '&[data-focus="true"]': {
//       backgroundColor: '#F8F8F8',
//       borderColor: 'transparent',
//     },
//     // Selected
//  has dark-grey
//     '&[aria-selected="true"]': {
//       backgroundColor: theme.palette.grey.A200,
//       borderColor: 'transparent',
//     },
//   },

const useStyles = makeStyles({
  option: {
    fontSize: 15,

    "& > span": {
      marginRight: 10,
      fontSize: 18,
      backgroundColor: "white",
      '&[data-focus="true"]': {
        backgroundColor: "#F8F8F8",
        borderColor: "transparent",
      },
    },
  },
});

export default function CountrySelect() {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={DUMMY_COUNTRY_DATA}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>({countryToFlag(option.code)})</span>
          {option.label} +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
}
