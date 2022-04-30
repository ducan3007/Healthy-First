import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ClickAwayListener, Avatar, Grow, Paper, Popper, MenuItem, MenuList, Divider } from "@material-ui/core";

import { ExitToAppRounded, InfoOutlined } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.action";
import color from "../Theme/Theme";

const UserAvatar = ({ userId, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const prevOpen = React.useRef(open);
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
    <>
      <Button
        className={classes.root}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar variant="circular" src={image}></Avatar>
      </Button>
      <Popper
        style={{ zIndex: 111, maxWidth: "200px", width: "40vw", top: "15px !important" }}
        popperOptions={{
          modifiers: {
            offset: {
              offset: "-6,6",
            }
          }
        }}
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
                <MenuList style={{ padding: 0 }} autoFocusItem={open} id="menu-list-grow">
                  <MenuItem style={{ padding: 0 }} onClick={handleClose}>
                    <Button className={classes.button} component={Link} to="/user">
                      <InfoOutlined style={{ color: color.darker_blue }} />
                      <span style={{ marginLeft: "10px", color: color.darker_blue }}>Tài khoản</span>
                    </Button>
                  </MenuItem>
                  <Divider />
                  <MenuItem style={{ padding: 0 }} onClick={handleClose}>
                    <Button className={classes.button} onClick={handleClick}>
                      <ExitToAppRounded style={{ color: "#ff6352" }} />
                      <span style={{ marginLeft: "10px", color: "#ff6352" }}>Đăng xuất</span>
                    </Button>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
  button: {
    padding: "12px",
    width: "100%",
    textTransform: "none",
    fontSize: "18px",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: color.light_blue,
      color: color.dark_blue,
    },
  },
  menu_item: {
    width: "100%",
    padding: 0,
  },
  menuPaper: {
    borderRadius: "7px",
    boxShadow: "0px 0px 0px 1px #D2E3FC",
  },
}));

export default React.memo(UserAvatar);
