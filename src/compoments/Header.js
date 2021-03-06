import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({

    icon: {
        marginRight: theme.spacing(2),
    },

}));

export default function Header(props) {
    const classes = useStyles();
    

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar >
                    <Toolbar>
                        <FacebookIcon style={{ fontSize: 45 }} className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            <Link href="https://web.facebook.com/natee.rung.16?_rdc=1&_rdr"  color="inherit">
                                Natee Rungsuwan
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

        </React.Fragment>
    );
}