import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const artists_choices = ['Insane Clown Posse', 'Lil Wayne', 'LL Cool J', 'R. Kelly', 'Drake', 'Chris Brown', 'Fabolous', 'Rihanna', 'Indigo Girls', 'Michael Jackson', 'Ne-Yo', 'Bon Jovi', 'Bob Dylan', 'Kanye West', 'Usher', 'Mariah Carey', 'Backstreet Boys', 'Glee', 'Justin Bieber', 'Gordon Lightfoot', 'Donna Summer', 'Bruce Springsteen', 'Red Hot Chili Peppers', 'Rod Stewart', 'Britney Spears', 'Miley Cyrus', 'Lady Gaga', 'Christina Aguilera', 'Gucci Mane', 'Ice Cube']
artists_choices.sort(function(a,b){
    return a.localeCompare(b);
});


const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class ControlledOpenSelect extends React.Component {
    state = {
        artist: '',
        open: false,
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});

        this.props.callback(event.target.value);

    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    render() {
        const {classes} = this.props;

        return (
            <form autoComplete="off">
                <Button className={classes.button} onClick={this.handleOpen}>
                    Select an Artist
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Artist</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.artist}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'artist',
                            id: 'demo-controlled-open-select',
                        }}
                    >
                        {artists_choices.map(function (art_choice) {
                            return (
                                <MenuItem value={art_choice} key={art_choice}>{art_choice}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

ControlledOpenSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);