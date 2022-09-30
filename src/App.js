import React from 'react'
import { Typography, AppBar } from "@material-ui/core"
import VideoPlayer from './component/VideoPlayer'
import Notification from "./component/Notification"
import Options from "./component/Options"

const App = () => {
    return (
        <div>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Video App</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    )
}

export default App