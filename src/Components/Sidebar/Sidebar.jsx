import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'theme.palette.background.paper',
    '& .Mui-selected':{
        backgroundColor:'#7eccd0'
    },
    '& .MuiListItem-root:hover':{
        backgroundColor:'#7eccd0'
    }
  }
}));

console.log("SIDEBAR RE_RENDER")

const Sidebar=() => {
  const [selected, setSelected] = useState(true)
   
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        
        <ListItem selected={selected} button>
         
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
        
          <ListItemText primary="Inbox" />
        </ListItem>

        <ListItem button>
          
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>

      </List>
      <Divider />

      <List component="nav" aria-label="secondary mailbox folders">
       
        <ListItem button>
          
          <ListItemText primary="Trash" />
        </ListItem>
       
        <ListItem button>
          
          <ListItemText  primary="Spam" />
       
        </ListItem>
      </List>
    </Paper>
  );
}
export default Sidebar