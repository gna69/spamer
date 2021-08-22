import React from "react";
import {connect} from "react-redux";
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <Typography variant={'h3'}>
                Instagram спаммер
            </Typography>
        </Box>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);