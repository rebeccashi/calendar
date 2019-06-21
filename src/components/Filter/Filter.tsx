import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {withStyles, createStyles} from '@material-ui/core/styles';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Theme, 
    ExpansionPanel, 
    ExpansionPanelSummary, 
    ExpansionPanelDetails, 
    Typography,
    Chip, 
    Button,
    Grid,
    FormControlLabel,
    TextField,
    RadioGroup,
    FormLabel,
    FormControl,
    Radio
} from '@material-ui/core'
import {sortByLatest,filterByDate} from '../../redux/filter/actions';
import { tsConditionalType } from '@babel/types';

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
    time: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    latest: {
        paddingBottom: theme.spacing(3),
    },
    formControl : {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(15)
    }
});

interface FilterPanelProps {
    classes: any,
    sortByLatest: typeof sortByLatest,
    filterByDate: typeof filterByDate
};

interface FilterPanelState {
    anchorEl: Element | null,
    chipClicked: boolean,
    sort: boolean,
    filter: {
        filterOption: string | undefined,
        filterDate: string,
    }
}

class FilterPanel extends React.Component <FilterPanelProps, FilterPanelState>{

    constructor(props:any) {
        super(props);
        this.state = {
            anchorEl: null,
            chipClicked: false,
            sort: false,
            filter: {
                filterOption: undefined,
                filterDate: moment().format("YYYY-MM-DD"),
            }
        }
        this.handleChipClick = this.handleChipClick.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChipClick(event: React.MouseEvent) {
        this.props.sortByLatest();
    }

    handleSubmit() {
        if (!this.state.sort && !this.state.filter) {
            alert('No filter has been applied.')
        } else {
            if (this.state.sort) {
                this.props.sortByLatest();
            }
            if (this.state.filter.filterOption) {
                const filter = {
                    filterOption: this.state.filter.filterOption,
                    filterDate: moment(this.state.filter.filterDate, 'YYYY-MM-DD')
                }
                this.props.filterByDate(filter)
            }
        }
    }

    handleRadioChange(e: React.ChangeEvent<{}>) {
        const target = e.target as HTMLInputElement;
        if (target) {
            const obj = this.state.filter;
            obj.filterOption = target.value;
            this.setState({filter: obj});
        }
    }

    handleDateChange(e : React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
        const filter = this.state.filter;
        filter.filterDate = e.target.value;
        if (e.target !== null) {
            this.setState({filter: filter});
        }
    };
    
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
                        <form>
                            <Grid item xs={6}>
                                <Chip
                                    label="LATEST"
                                    className={this.props.classes.chip}
                                    onClick={this.handleChipClick}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl component="fieldset" className={this.props.classes.formControl}>
                                    <FormLabel component="legend">Filter By</FormLabel>
                                    <RadioGroup
                                        aria-label="filter"
                                        name="filter"
                                        className={this.props.classes.group}
                                        value={this.state.filter.filterOption}
                                        onChange={this.handleRadioChange}
                                    >
                                    <FormControlLabel value="before" control={<Radio />} label="Before" />
                                    <FormControlLabel value="after" control={<Radio />} label="After" />
                                    </RadioGroup>
                                </FormControl>

                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    defaultValue={moment().format("YYYY-MM-DD")}
                                    onChange={(e) => this.handleDateChange(e)}
                                    className={this.props.classes.time}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />   
                                   
                            </Grid>
                            <Button onClick={this.handleSubmit}>
                                Apply Filter
                            </Button>    
                            
                        </form>
                    
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
    
}

export default withStyles(styles)(connect(null, {sortByLatest, filterByDate})(FilterPanel));
