import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AppNav from './components/AppNav';

import Books from './pages/Books';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import AppFrame from './pages/AppFrame';

function App() {
    return (
        <Router>
            <Container maxWidth="sm">
                <AppNav />
                <Switch>
                    <Route exact path={['/', '/books']}>
                        <AppFrame />
                    </Route>
                    <Route exact path="/books/:id">
                        <Detail />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
