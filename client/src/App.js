import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { Container } from '@material-ui/core';
import AppNav from './components/AppNav';
import AppFrame from './pages/AppFrame';
import SavedBooks from './pages/SavedBooks';
import './index.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                {/*  
                Mui StylesProvider allows our styles to override Material-UI 
                styles - https://material-ui.com/styles/advanced/#injectfirst 
                */}
                <StylesProvider injectFirst>
                    <AppNav />

                    <Container fixed maxWidth="xs" className="app-container">
                        <Switch>
                            <Route exact path={'/'}>
                                <AppFrame />
                            </Route>
                            <Route exact path="/saved">
                                <SavedBooks />
                            </Route>
                        </Switch>
                    </Container>
                </StylesProvider>
            </Router>
        </ThemeProvider>
    );
}

export default App;
