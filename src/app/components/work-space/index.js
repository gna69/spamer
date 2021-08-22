import React from "react";
import {Grid} from "@material-ui/core";
import Accounts from "./scenes/accounts";
import Comments from "./scenes/comments";
import Target from "./scenes/target";

function WorkSpace() {

    return (
        <Grid container spacing={3}>
            <Accounts />
            <Comments />
            <Target />
        </Grid>
    );
}

export default WorkSpace;