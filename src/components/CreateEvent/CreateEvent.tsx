import React, {MouseEvent} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core'
import Popper, { PopperProps, PopperPlacementType } from '@material-ui/core/Popper'
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade'
import EventCard from './EventCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        marginRight: theme.spacing(20),
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    typography: {
        padding: theme.spacing(2),
      }
  }));

const CreateEvent = () => {

        const classes = useStyles();
       
        const [placement, setPlacement] = React.useState<PopperPlacementType|undefined>(undefined);
        const [anchorEl, setAnchorEl] = React.useState<Element|null>(null);
        const [open, setOpen] = React.useState<boolean>(false);

        const handleClick = (newPlacement : PopperPlacementType) =>  (event : MouseEvent) => {
            const {currentTarget} = event;
            setAnchorEl(currentTarget);
            setOpen(placement !== newPlacement || !open);
            setPlacement(newPlacement);
        }

        const handleClose = (event : MouseEvent) => {
            setAnchorEl(null);
            setOpen(false);
        }

        const id = open ? 'simple-popper' : undefined;

        return (
            <div className={classes.root}>
                <Popper 
                    open={open} 
                    anchorEl={anchorEl}
                    placement={placement} 
                    transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                            <EventCard
                                close={handleClose}/>
                    </Fade>
                    )}
                </Popper>
                <Grid container justify="center">
                    <Grid item>
                        <Button 
                        aria-describedby={id}
                        onClick={handleClick('bottom')}
                        variant="contained"
                        color="primary" 
                        className={classes.button}>
                        Create New Event
                        </Button>
                    </Grid>
                
                </Grid>
            </div>
        )
};

export default CreateEvent;