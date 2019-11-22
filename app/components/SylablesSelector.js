import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const sylables_choices = ['8', '10', '12', '14', '16'];


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
        syllables: '12',
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
                    Max syllables per line
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Syllables</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.syllables}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'syllables',
                            id: 'demo-controlled-open-select',
                        }}
                    >

                        {sylables_choices.map(function (art_choice) {
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