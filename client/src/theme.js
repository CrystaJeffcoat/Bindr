// Follows Material-UI's guide for overriding primary & secondary
// styles using theme https://material-ui.com/customization/theming/#api

import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
            light: grey[400],
        },
        secondary: {
            main: blueGrey[500],
        },
    },
});
