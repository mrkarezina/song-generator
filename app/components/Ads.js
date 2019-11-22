import React from 'react';
import makemoneyonlinecropped from '../img/makemoneyonlinecropped.png'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"

const adLink = 'https://d7c6f-zweez6tep8di68cy9x0x.hop.clickbank.net/?tid=JH1'


const styles = {

    actions: {
        display: 'flex',
        alignItems: 'center'
    },
    card: {
        marginBottom: '5vh',
        marginTop: '5vh',
        width: '50vw',
        minWidth: '400px'
    },
    image: {
        width: '100%',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
    },

};


function Ads(props) {
    /**
     Component used to render an image ad that links to a clickbank offer.
     */

    const {classes} = props;

    return (
        <Card className={classes.card} raised={false}>

            <Grid container spacing={24}>
                    <CardActionArea component="a" href={adLink} target="_blank" rel="nofollow">
                        <CardContent>
                            <img className={classes.image}
                                 src={makemoneyonlinecropped}/>
                        </CardContent>
                    </CardActionArea>
            </Grid>
        </Card>
    )

}

Ads.propTypes = {};


export default withStyles(styles)(Ads);