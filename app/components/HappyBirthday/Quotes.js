import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import QuotesCard from "./QuotesCard";
import {getInspirationalQuote} from '../../utils/api'
import LoadingCircle from './Loading'
import axios from 'axios'

//Keep the number of lines to generate constant
const numberLines = 200;

const styles = theme => ({

});

class Quotes extends React.Component {
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

        const lyrics = await getInspirationalQuote();

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
                    ? <LoadingCircle text={["Brainstorming qoutes 🤔", "Trying to think of qoutes 🤨"]}/>
                    : <QuotesCard lyrics={lyrics}/>}

            </div>
        )
    }
}

Quotes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quotes);