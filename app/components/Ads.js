import React from 'react';
import adImage from '../img/MyVoiceBriefingAd.png'
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


function Ads(props) {
    /**
     Component used to render an image ad that links to a clickbank offer.
     */

    const {classes} = props;

    return (

        // <div className={classes.card}>
        //     <a href="https://www.producthunt.com/posts/freshbots?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-freshbots" target="_blank" ><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=155948&theme=light" alt="Freshbots - Lyrics generator for over 40 artist styles | Product Hunt Embed" style={{
        //         backgroundSize: 'auto 100%',
        //         backgroundPosition: 'center center',
        //         height: '9vh',
        //         alignItems: 'center',
        //     }}/></a>
        // </div>

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

Ads.propTypes = {};


export default withStyles(styles)(Ads);