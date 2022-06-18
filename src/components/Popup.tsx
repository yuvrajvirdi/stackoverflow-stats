import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    popup: {
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
    }
}));

export default function Popup(){
    
    const classes = useStyles();

    // states
    const [open, setOpen] = useState(false);

    // handling open popup btn
    const handleOpen = () => {
        setOpen(true);
    };

    // handling close popup btn 
    const handleClose = () => {
        setOpen(false);
    };

    // handling profile page btn 
    const handleFindId = () => {
        window.open(
            'https://stackoverflow.com/users',
            '_blank',
            'noopener, noreferrer'
        );
    };

    // tsx elem
    return (
        <div className={classes.popup}>
            <Button
                variant='contained'
                onClick={handleOpen}
                color='primary'
            >
                How to find user ID?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="popup-title"
                aria-describedby="popup-description"
            >
                <DialogTitle id='popup-title'>
                    {"Find your Stack Overflow user ID"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="popup-description">
                        You can find your Stack Overflow user ID by heading over to your
                        user profile page and looking at the search bar for your ID or at the
                        integrated search bar at the top of the site.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFindId}>Stack Overflow Profile</Button>
                    <Button onClick={handleClose} autoFocus>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
