import React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import {withStyles} from '@material-ui/core/styles';

import logo from '../img/logo_transparent.png'

const styles = theme => ({
    root: {
        //5*theme spacing unit
        paddingBottom: 3*theme.spacing.unit,
        flexGrow: 1
    },
    appBar: {
        position: 'wrap',
    },
    homeButton: {

        //No hover effect for logo button
        "&:hover": {
            backgroundColor: 'transparent',
        },
    },
    logo: {
        maxWidth: 12 * theme.spacing.unit,
        maxHeight: 12 * theme.spacing.unit,
    },
    spacer: {
        flexGrow: 1,
    },
    button: {
        marginLeft: -3,
        marginRight: 3,
    }
});


function NavBar(props) {
    //Used for toggoling if the help pannel is visible or not. Also links to main page.

    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar color={"inherit"} className={classes.appBar}>
                <Toolbar>

                    <Button variant={"text"} className={classes.homeButton} disableRipple={true}>
                        <img src={logo} className={classes.logo}/>
                    </Button>

                    {/*Used as spacer between the logo and buttons*/}
                    <div className={classes.spacer}/>


                    <Button variant={"text"} href={"https://www.subscribepage.com/freshbots"} target="_blank"
                            className={classes.button}>
                        About
                    </Button>

                </Toolbar>
            </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggle: PropTypes.func,
};

export default withStyles(styles)(NavBar);