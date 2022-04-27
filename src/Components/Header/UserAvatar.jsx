import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {Typography} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.action";
import color from './../Theme/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
  button: {
    padding: "20px",
    width: "100%",
    textTransform: 'none',
    fontSize: '18px',
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: color.light_blue,
      color: color.dark_blue
    },
  },
  menu_item: {
    width: "100%",
    padding: 0,
  },
  menuPaper: {
    // borderWidth: "1px",
    // borderColor: "#1A73E8",
    borderRadius: "7px",
    boxShadow: "0px 0px 0px 1px #D2E3FC",
  },
}));

const UserAvatar = ({ userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClick = () => {
    dispatch(logout(navigate));
  };

  return (
    <div>
      <Button
        className={classes.root}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar variant="circular" src={`https://secure.gravatar.com/avatar/${userId}}?s=164&d=identicon`}></Avatar>
      </Button>
      <Popper
        style={{ zIndex: 111, maxWidth: "200px", width: "40vw",top:'5px' }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper variant="outlined" className={classes.menuPaper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList style={{padding:0}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem style={{ padding: 0 }} onClick={handleClose}>
                    <Button className={classes.button} component={Link} to="/user">
                    Thông tin tài khoản
                    </Button>
                  </MenuItem>
                  <MenuItem style={{ padding: 0 }} onClick={handleClose}>
                    <Button className={classes.button} onClick={handleClick}>
                      Log out
                    </Button>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
export default React.memo(UserAvatar);
