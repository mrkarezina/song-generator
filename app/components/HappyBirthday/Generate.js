import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import About from './About'
import Typography from '@material-ui/core/Typography';
import Quote from './Quotes'
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'


const styles = {
    spacer: {
        height: '30vh'
    },
    title: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
        fontFamily: 'Pacifico',
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
        generateQuote: false,
    };

    handleGenerate = () => {
            this.setState(
                {
                    generateQuote: !this.state.generateQuote
                }
            )
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <div style={{minHeight: '90vh', flex: '1 0 auto'}}>

                    <Grid container spacing={8} direction={"column"} alignItems={"center"}>

                        <Typography variant="inherit" className={classes.title}>
                            С днем ​​рождения мама!
                        </Typography>

                        {/*Reset button*/}
                        {this.state.generateQuote
                            ? <Button className={classes.generateButton} onClick={this.handleGenerate}>
                                Reset
                            </Button>
                            : null}

                        {/*If the artist and the generateQuote button have been set*/}
                        {(this.state.generateQuote)
                            ? <Quote/>
                            : null}

                        {/*Generate button*/}
                        {!this.state.generateQuote
                            ? <Button className={classes.generateButton} onClick={this.handleGenerate}>
                                Inspire me
                            </Button>
                            : null}

                    </Grid>
                </div>

                <About/>

            </div>
        );
    }
}

Generate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Generate);
