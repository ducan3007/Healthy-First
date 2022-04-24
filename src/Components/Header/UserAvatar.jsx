import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.action";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  button: {
    padding: "20px",
    width: "100%",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "#1aa4c7",
      color: "white",
    },
  },
  menu_item: {
    width: "100%",
    padding: 0,
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
    <div className={classes.root}>
      <Paper className={classes.paper}></Paper>
      <div style={{width:"100%"}}>
        <Button
          className={classes.avatar}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar variant="circular" src={`https://secure.gravatar.com/avatar/${userId}}?s=164&d=identicon`}></Avatar>
        </Button>
        <Popper
          style={{ zIndex: 111,maxWidth:"150px",width:"40vw" }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList  autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem style={{padding:0}} onClick={handleClose}>
                      <Button className={classes.button} component={Link} to="/user">
                        Acount
                      </Button>
                    </MenuItem>
                    <MenuItem style={{padding:0}} onClick={handleClose}>
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
    </div>
  );
};
export default React.memo(UserAvatar);
