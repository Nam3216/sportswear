import React,{useEffect} from "react"

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Link } from "react-router-dom";
import {useContext} from "react"
import { ContextElement } from "../../Context/Context";
import "./styleModal.css"


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select an option</DialogTitle>
      <List sx={{ pt: 0 }}>
       <Link to={"/register"}> <p className="modal">Register</p></Link>
       <Link to={"/login"}> <p className="modal">Log In</p></Link>
       <Link to={"/buy"}> <p className="modal">Continue as guest</p></Link>
        
      </List>
    </Dialog>
  );
}

interface dataOk{
  data:string
}
export default function Modal({data}:dataOk) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const{checkContinueAsGuest,setCheckContinueAsGuest}=useContext(ContextElement)
 

  const handleClickOpen = () => {
    setOpen(true);
    if(checkContinueAsGuest ==false){
      setCheckContinueAsGuest(true)//pone true, asique ahora se ve button continue as guest
 
      
    }
    
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

/*useEffect(()=>{

  if(checkContinueAsGuest ==false){
    setCheckContinueAsGuest(true)
    alert(true)
  }
  else{
    setCheckContinueAsGuest(false)
    alert(false)
  }
  
},[])*/
//Selected: {selectedValue}
  return (
    <div>
      <Typography variant="subtitle1" component="div">
        
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
       Buy
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}


/*{emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}*/