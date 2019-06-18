import React from 'react';
import {connect} from 'react-redux';
import {withStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { tsConstructorType } from '@babel/types';
import {FilterState, SORT, CHANGE_DISPLAY} from '../../redux/filter/filterTypes'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        padding: theme.spacing(3,2),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    chip: {
     margin: theme.spacing(1),
    },
    });

interface FilterPanelProps {
    classes: any,
    onSort: () => void,
    onChangeDisplay: (value : any) => void
}

interface FilterPanelState {
    anchorEl: Element | null,
    chipClicked: boolean
}


class FilterPanel extends React.Component <FilterPanelProps, FilterPanelState>{

    constructor(props:any) {
        super(props);
        this.state = {
            anchorEl: null,
            chipClicked: false,
        }
        this.handleChipClick = this.handleChipClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
    }

    handleChipClick(event: React.MouseEvent) {
        this.props.onSort();
    }

    handleMenuClick(event: React.MouseEvent) {
        console.log(event.target)
        //this.props.onChangeDisplay(event)
        this.handleMenuClose();
    }

    handleMenuOpen(event : React.MouseEvent) {
        this.setState({anchorEl: event.currentTarget})
    }

    handleMenuClose() {
        this.setState({anchorEl: null})
    }
    
    render() {

        return (
            <div className={this.props.classes.root}>
                <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={this.props.classes.heading}>Filter</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List component="nav">
                            <ListItem>
                            <Chip
                                label="LATEST"
                                className={this.props.classes.chip}
                                onClick={this.handleChipClick}
                            />
                            </ListItem>

                            <ListItem>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleMenuOpen}>
                                Open Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                keepMounted
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleMenuClose}
                            >
                                <MenuItem onClick={this.handleMenuClick}>Profile</MenuItem>
                                <MenuItem onClick={this.handleMenuClick}>My account</MenuItem>
                            </Menu>
                            </ListItem>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSort: () => dispatch({type: SORT}),
        onChangeDisplay: (element: Element) => dispatch({type: CHANGE_DISPLAY}),
    }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(FilterPanel));