import { createTheme } from "@material-ui/core";
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';


export const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
            dark: deepPurple[800],
            light: deepPurple[300],
        },

        secondary: {
            main: indigo[500],
            dark: indigo[800],
            light: indigo[300],
        }
    }
})