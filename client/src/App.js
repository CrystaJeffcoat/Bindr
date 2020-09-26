import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import AppNav from './components/AppNav';
import AppFrame from './pages/AppFrame';
import SavedBooks from './pages/SavedBooks';
function App() {
    return (
        <Router>
            <StylesProvider injectFirst>
                <Container maxWidth="xs" disableGutters={true}>
                    <AppNav />
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
    );
}

export default App;
