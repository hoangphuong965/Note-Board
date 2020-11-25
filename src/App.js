import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Create from './components/form/Create';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
// import { addText } from './_action/text';
import Edit from './components/form/Edit';


const store = configStore;
// store.dispatch(addText({text: "text 1"}))

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <br />
                <Container text>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/create" component={Create} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </Provider>

    );
};

export default App;
