import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import ReactRotatingText from 'react-rotating-text'


//TODO fix this
const styles = theme => ({
    container: {
      marginBottom: '30px'
    },
    progress: {
        color: "black",
        padding: theme.spacing.unit * 3,

    },

    text: {
        fontSize: '25px',
    }
});

function CircularIndeterminate(props) {
    const {classes, text} = props;

    return (
        <div>

            <Grid container spacing={24} direction={"column"} alignItems={"center"} className={classes.container}>
                <Grid item xs={12}>
                    <CircularProgress className={classes.progress} size={100}/>
                </Grid>

                <Grid item xs={12}>
                    <ReactRotatingText className={classes.text} items={text} typingInterval={15}  deletingInterval={10} cursor={false}/>
                </Grid>
            </Grid>
        </div>

    );
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.array.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);



