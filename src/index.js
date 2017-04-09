import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import LandingPage from './components/LandingPage';
import ourHorses from './components/ourHorses';


const StoreInstance = Store();

ReactDOM.render(
 <Provider store={StoreInstance}>
   <Router history={browserHistory}>
            <Route path="/" component={App} >
              <IndexRoute component={LandingPage} />
              <Route path="ourHorses" component={ourHorses} />
            </Route>
        </Router>
 </Provider>,
 document.getElementById('root')
);

