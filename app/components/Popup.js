import React from 'react';
import adImage from '../img/myVoiceBriefing.png'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"

const adLink = 'https://assistant.google.com/services/a/uid/000000948558d976?hl=en_ca&source=web';


const styles = {

    actions: {
        display: 'flex',
        alignItems: 'center'
    },
    card: {
        marginBottom: '5vh',
        marginTop: '5vh',
        height: '10vh',
        maxWidth: '90vw',
        alignItems: 'center'
    },
    image: {
        height: '10vh',
        maxWidth: '90vw',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
    },

};


function Popup(props) {
    const {classes} = props;

    return (
        <Card className={classes.card} raised={false}>
            <Grid container spacing={24}>
                    <CardActionArea component="a" href={adLink} target="_blank" rel="nofollow">
                        <CardContent>
                            <img className={classes.image}
                                 src={adImage}/>
                        </CardContent>
                    </CardActionArea>

                    {/*<CardContent>*/}
                        {/*<img className={classes.image}*/}
                             {/*src={adImage}/>*/}
                    {/*</CardContent>*/}
            </Grid>
        </Card>
    )

}

Popup.propTypes = {};


export default withStyles(styles)(Popup);