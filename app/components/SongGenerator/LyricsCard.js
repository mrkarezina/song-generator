import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Ads from '../Ads'



const styles = {
    card: {
        marginTop: '25px',
        marginBottom: '25px',
        padding: '20px',
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#1e1e1e',
        textAlign: 'left',
        paddingBottom: '15px'
    },
    lineNorm: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#1e1e1e',
        textAlign: 'left',
    },
    linePad: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#1e1e1e',
        textAlign: 'left',
        paddingTop: '10px'
    },

};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function LyricsCard(props) {

    const {classes, lyrics, artist} = props;


    if (lyrics.length === 0) {
        return (
            <Typography variant="inherit" className={classes.title}>
                Looks like the bot is taking a break 😴 come back later
            </Typography>
        )
    } else {

        return (

            <div>

                <Ads/>

                <Card className={classes.card} raised={false}>
                    <CardContent>

                        <Typography variant="inherit" className={classes.title}>
                            Lyrics styled after {artist}:
                        </Typography>

                        {/*To display the lines of lyrics, every 4 lines make a space*/}
                        {lyrics.map(function (line, index) {

                                line = capitalizeFirstLetter(line);

                                if (index % 4 === 0) {
                                    return (
                                        <Typography className={classes.linePad} key={line}>
                                            {line}
                                        </Typography>
                                    )
                                } else {
                                    return (
                                        <Typography className={classes.lineNorm} key={line}>
                                            {line}
                                        </Typography>
                                    )
                                }
                            }
                        )}

                    </CardContent>
                </Card>

            </div>

        )
    }

}

LyricsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    lyrics: PropTypes.array.isRequired,
    artist: PropTypes.string.isRequired,
};


export default withStyles(styles)(LyricsCard);