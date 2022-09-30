import React from 'react'
import { Grid, Typography, Paper, createTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { SocketContext } from './SocketContext'
import { ThemeProvider } from '@material-ui/styles'
import { useContext } from 'react'
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        // [theme.breakpoints.down('xs')]: {
        //     width: '300px',
        // },
    },
    gridContainer: {
        justifyContent: 'center',
        // [theme.breakpoints.down('xs')]: {
        //     flexDirection: 'column',
        // },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme} >
            <div className={classes.gridContainer}>
                <Grid container className={classes.gridContainer}>
                    {
                        stream && (
                            <Paper className={classes.paper}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h5' gutterBottom>{name || "Name"}</Typography>
                                    <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                                </Grid>
                            </Paper>
                        )
                    }
                    {
                        callAccepted && !callEnded && (
                            <Paper className={classes.paper}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h5' gutterBottom>{call.name}</Typography>
                                    <video playsInline muted ref={userVideo} autoPlay className={classes.video} />
                                </Grid>
                            </Paper>
                        )
                    }

                </Grid></div>

        </ThemeProvider>
    )
}

export default VideoPlayer