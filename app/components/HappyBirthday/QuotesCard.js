import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const styles = {
    card: {
        marginTop: '25px',
        marginBottom: '25px',
        padding: '20px',
        maxWidth: '50vw'
    },
    title: {
        fontFamily: 'Pacifico',
        fontSize: 30,
        color: '#1e1e1e',
        textAlign: 'left',
        paddingBottom: '15px'
    },
    lineNorm: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#1e1e1e',
        textAlign: 'left',
    },

};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function QuotesCard(props) {

    const {classes, lyrics} = props;


    if (lyrics.length === 0) {
        return (
            <Typography variant="inherit" className={classes.title}>
                Looks like the bot is taking a break 😴 come back later
            </Typography>
        )
    } else {

        return (

            <div>

                <Card className={classes.card} raised={false}>
                    <CardContent>

                        <Typography variant="inherit" className={classes.title}>
                            Дорогая Анжелика,
                        </Typography>

                        <Typography className={classes.lineNorm}>
                            {"\"" + capitalizeFirstLetter(lyrics) + "\""}
                        </Typography>

                    </CardContent>
                </Card>

            </div>

        )
    }

}

QuotesCard.propTypes = {
    classes: PropTypes.object.isRequired,
    lyrics: PropTypes.array.isRequired,
};


export default withStyles(styles)(QuotesCard);