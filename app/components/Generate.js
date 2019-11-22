import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Lyrics from './Lyrics'
import Grid from "@material-ui/core/Grid"
import ArtistSelector from './ArtistSelector'
import SylablesSelector from './SylablesSelector'
import Button from '@material-ui/core/Button'


const styles = {
    spacer: {
        height: '30vh'
    },
    title: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
        fontFamily: 'Mr Dafoe',
        fontSize: 50,
        fontWeight: 500,
        color: '#1e1e1e',
        textAlign: 'center',

    },

    generateButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
};


class Generate extends React.Component {

    state = {
        generateLyrics: false,
        syllables: 12,
    };

    handleGenerate = () => {
        if (this.state.artist) {
            this.setState(
                {
                    generateLyrics: !this.state.generateLyrics
                }
            )
        }
    };

    //Passed down to selector component
    setArtist = (artist) => {
        this.setState(
            {
                artist: artist,
            }
        )
    };

    //Passed down to selector component
    setSylables = (syllables) => {
        this.setState(
            {
                syllables: Number(syllables),
            }
        )

    };

    render() {
        const {classes} = this.props;

        return (
            <div>

                <Grid container spacing={8} direction={"column"} alignItems={"center"}>

                    <Typography variant="inherit" className={classes.title}>
                        Endless Lyrics Generator
                    </Typography>

                    {/*Reset button*/}
                    {this.state.generateLyrics
                        ? <Button className={classes.generateButton} onClick={this.handleGenerate}>
                            Reset
                        </Button>
                        : null}

                    {!this.state.generateLyrics
                        ? <div>
                            <ArtistSelector callback={this.setArtist}/>
                            <SylablesSelector callback={this.setSylables}/>
                            <div className={classes.spacer}></div>
                        </div>
                        : null}

                    {/*If the artist and the generateLyrics button have been set*/}
                    {(this.state.generateLyrics && this.state.artist)
                        ? <Lyrics artist={this.state.artist} maxSyllables={this.state.syllables}/>
                        : null}

                    {/*Generate button*/}
                    {!this.state.generateLyrics
                        ? <Button className={classes.generateButton} onClick={this.handleGenerate}>
                            Generate
                        </Button>
                        : null}


                </Grid>

            </div>
        );
    }
}

Generate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Generate);
