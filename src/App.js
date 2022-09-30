import React from 'react'
import { Typography, AppBar, createTheme } from "@material-ui/core"
import VideoPlayer from './component/VideoPlayer'
import Notification from "./component/Notification"
import Options from "./component/Options"
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/styles'
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        // [theme.breakpoints.down('xs')]: {
        //     width: '90%',
        // },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));
const App = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}> <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Video App</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
        </ThemeProvider>

    )
}

export default App