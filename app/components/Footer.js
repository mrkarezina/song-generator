import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import React, {Component} from 'react'

//Material UI footer exmaple: https://github.com/fus-marcom/franciscan-react/blob/master/components/Footer.js

class Footer extends Component {
    render() {
        const {classes} = this.props;
        const currentYear = new Date().getFullYear();
        return (
            <Grid container alignItems={"center"} className={classes.root}>

                <Grid className={classes.subFooter} item xs={12}>

                    <Typography
                        variant="subheading"
                        component={'span'}
                        className={classes.white}
                    >
                        <a href={"https://twitter.com/mrkarezina"} target={'_blank'}
                           className={classes.link}>Twitter</a>
                    </Typography>

                    <Typography
                        className={classes.white}
                        variant="subheading"
                        component={'span'}
                    >
                        © {currentYear} FreshBots
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

const styles = theme => ({
    root: {

    },
    subFooter: {
        marginTop: 100,
        backgroundColor: `#1e1e1e`,
        overflowX: 'hidden',
        padding: '8px 8px 8px 8px',
    },
    white: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12,
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
    },
    flexContainer: {
        display: 'flex'
    }
});

export default withStyles(styles)(Footer)