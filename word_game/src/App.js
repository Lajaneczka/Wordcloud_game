import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from './components/Home';
import {Play} from './components/Play';
import {Score} from './components/Score';
import './scss/main.scss';
import {UserContext} from './components/UserContext';
import {useState} from 'react';

function App() {

    const [value, setValue] = useState('');

    return (
        <Router>
            <Switch>
                <UserContext.Provider value={{value, setValue}}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/play" component={Play}/>
                    <Route path="/score" component={Score}/>
                </UserContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;
