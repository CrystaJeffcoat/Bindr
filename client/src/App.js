import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import AppFrame from './pages/AppFrame';

function App() {
    return (
        <Router>
            <div>
                <Nav />
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
            </div>
        </Router>
    );
}

export default App;
