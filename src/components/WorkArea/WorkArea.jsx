import React, { useState, memo, useMemo, useEffect } from "react";

import { Autocomplete } from "@material-ui/lab";
import { TextField, Chip, Button } from "@material-ui/core";

import { PersonAdd, Search, Close, EditRounded } from "@material-ui/icons";

import { districts } from "./../../data/districts";
import { getDistrictFromCity } from "./../../data/districts";

import color from "../Theme/Theme";
import { makeStyles } from "@material-ui/styles";

const WorkAreaItem = ({ area, isUpdateArea, setUpdateArea }) => {
  const classes = useStyles();

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!isUpdateArea) {
      setUpdate(false);
    }
  }, [isUpdateArea]);

  const [work_area, setWork_area] = useState(area);

  const _options = useMemo(() => getDistrictFromCity(area[0].city), [area]);

  const _onUpdate = async () => {
    setUpdate(false);
    setUpdateArea(false);
  };

  console.log(`area : ${area[0].city}`, update);
  console.log('RE-render');

  return (
    <div className={!isUpdateArea ? classes.root : !update ? classes.root : classes.selected}>
      <div className={classes.title_primary}>
        <span>{area[0].city}</span>
        {!update ? (
          <Button
            className={classes.edit_btn}
            onClick={() => {
              if (isUpdateArea) {
                setUpdateArea(false);
                setUpdate(false);
              } else {
                setUpdateArea(true);
                setUpdate(true);
              }
            }}
          >
            Sửa
          </Button>
        ) : (
          <Button
            className={classes.edit_btn}
            onClick={() => {
              if (isUpdateArea) {
                setUpdateArea(false);
                setUpdate(false);
              } else {
                setUpdateArea(true);
                setUpdate(true);
              }
            }}
          >
            HỦY
          </Button>
        )}

        {!isUpdateArea ? null : update ? (
          <Button className={classes.edit_btn} onClick={_onUpdate}>
            cập nhật
          </Button>
        ) : null}
      </div>
      <div className={classes.content}>
        <div className={classes.title_secondary}>
          <span>Quận, Huyện</span>
        </div>
        <div className={classes.districts}>
          <Autocomplete
            multiple
            value={work_area}
            onChange={(event, value, reason) => {
              setWork_area(value);
            }}
            options={_options}
            disabled={!isUpdateArea ? true : !update}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option.title}
            style={{ width: "fit-content" }}
            renderInput={(params) => <TextField {...params} className={classes.input} variant="outlined" />}
            disableClearable
            popupIcon={null}
            renderTags={(value, getTagProps) => {
              return (
                <div className={classes.scroll_autocomplete}>
                  {value?.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      deleteIcon={<Close style={{ fontSize: "25px" }} />}
                      onDelete={
                        !isUpdateArea
                          ? null
                          : update
                          ? () => {
                              setWork_area(value.filter((item, i) => i !== index));
                            }
                          : null
                      }
                      className={classes.ChipTag}
                      key={index}
                      label={option.title}
                    />
                  ))}
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 10px 5px 15px",
    borderLeftWidth: "5px",
    height:'fit-content',
    "&:hover": {
      borderLeftColor: color.dark_blue_2,
      backgroundColor: "#f0f2fa",
      color: color.dark_blue_2,
      "& .MuiButton-root": {
        visibility: "visible",
      },
      "& .MuiChip-root.Mui-disabled": {
        opacity: 1,
      },
    },
    border: "2px solid #e0e0e0",
    borderRadius: "4px",
    color: "#79a2b8",
  },
  selected: {
    padding: "5px 10px 5px 15px",
    borderLeftWidth: "5px",
    borderLeftColor: color.dark_blue_2,
    backgroundColor: "#f0f2fa",
    color: color.dark_blue_2,
    "& .MuiButton-root": {
      visibility: "visible",
    },
    border: "2px solid #e0e0e0",
    borderRadius: "4px",
  },
  title_primary: {
    display: "flex",
    fontSize: "1.5rem",
    fontWeight: "700",
    gap: "5px",
    boxSizing: "border-box",
  },
  title_secondary: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  edit_btn: {
    visibility: "hidden",
  },
  content: {
    marginTop: "5px",
  },
  /*======= Autucomplete Text filed ========*/
  ChipTag: {
    color: color.dark_blue_2,
    borderRadius: "5px",
    fontSize: "0.9rem",
    backgroundColor: "#E8EAED",
    "& .MuiChip-label": {
      paddingLeft: 6,
      paddingRight: 6,
    },
    "&.MuiChip-root.Mui-disabled": {
      opacity: 0.8,
    },
  },
  scroll_autocomplete: {
    display: "flex",
    gap: 4,
    flexWrap: "wrap",
    maxHeight: "15rem",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "0px",
    },
  },
  input: {
    "& .MuiOutlinedInput-root": {
      padding: 4,
      borderRadius: "5px",

      "&.Mui-focused fieldset": {
        borderColor: color.login_input,
      },
      "&:hover fieldset": {
        borderColor: "inherit",
        backgroundColor: "rgba(199, 255, 242,0.1)",
      },
      "& .Mui-disabled:hover": {
        borderColor: "inherit",
        backgroundColor: "rgba(199, 255, 242,0.1)",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
      borderColor: "transparent",
    },

    "& .MuiInputBase-root": {
      fontSize: "1.1rem",
      color: color.dark_blue_2,
      fontWeight: "bold",
    },
    "& ::placeholder": {
      fontStyle: "italic",
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 0.9,
    },

    "&::-webkit-scrollbar": {
      width: "0px",
      padding: 0,
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "15px",
    },
  },
}));

export default memo(WorkAreaItem);
