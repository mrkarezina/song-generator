import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import LyricsCard from "./LyricsCard";
import {getLyrics} from '../utils/api'
import LoadingCircle from './Loading'
import axios from 'axios'

//Keep the number of lines to generate constant
const numberLines = 250;

const styles = theme => ({

});

class Lyrics extends React.Component {
    //Presents the graph vizualization after fetching the correct dataset

    constructor(props) {
        super(props);

        //Show graph will be set to true on enough stablization iterations run
        this.state = {
            lyrics: null,
        };
    }

    getLyrics = async () => {
        this.setState(() => ({
            lyrics: null
        }));

        const lyrics = await getLyrics(this.props.artist, numberLines, this.props.maxSyllables);

        this.setState(() => ({lyrics}))
    };

    componentDidMount() {
        this.getLyrics()
    }

    render() {

        const {lyrics} = this.state;

        return (

            <div>

                {!lyrics
                    ? <LoadingCircle text={["Brainstorming lyrics 🤔", "Trying to think of rhyming lines 🤨"]}/>
                    : <LyricsCard lyrics={lyrics}/>}

            </div>
        )
    }
}

Lyrics.propTypes = {
    classes: PropTypes.object.isRequired,
    artist: PropTypes.string.isRequired,
    maxSyllables: PropTypes.number.isRequired,
};

export default withStyles(styles)(Lyrics);