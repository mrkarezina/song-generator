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
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#1e1e1e',
        textAlign: 'center',
        paddingBottom: '15px'
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#1e1e1e',
        textAlign: 'center',
        paddingBottom: '15px'
    },
    keywords: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#595959',
        textAlign: 'center',
        paddingBottom: '15px'
    },

};


function AboutCard(props) {

    const {classes} = props;

    return (

        <div>
            <Card className={classes.card} raised={false}>
                <CardContent>
                    <Typography variant="subtitle2" className={classes.title}>
                        Lyrics Generator
                    </Typography>

                    <Typography variant="title" className={classes.text}>
                        Have fun writing lyrics and experimenting with different artists and styles. You can choose from a large selection of over 40 artists. Then the AI powered lyrics generator will create a unique song for you. Generate again to get different lyrics.
                    </Typography>

                    <Typography variant="title" className={classes.keywords}>
                        Random Song Lyrics Generator - Funny Lyrics Generator - AI Lyrics Generator - Funny Song Lyrics - Automatic Song Lyrics Generator - Song Generator - Rap Generator
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )

}

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AboutCard);