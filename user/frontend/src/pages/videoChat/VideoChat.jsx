import React from "react";
import "./videoChat.css";
import { Typography, AppBar } from "@material-ui/core";
import Topbar from "../../components/topbar/Topbar";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import Options from "../../components/videoPlayer/Options";
import Notifications from "../../components/videoPlayer/Notifications";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        border: "2px solid black",

        [theme.breakpoints.down("xs")]: {
            width: "90%",
        },
    },
    image: {
        marginLeft: "15px",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
}));

const VideoChat = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper + " videoChat"}>
            <Topbar />
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography variant="h2" align="center">
                    Video Chat
                </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
};

export default VideoChat;
