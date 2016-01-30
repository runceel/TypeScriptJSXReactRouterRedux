import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import * as ReactRouterRedux from 'react-router-redux';
import {Provider} from 'react-redux';
import App from './components/App';
import IndexPage from './components/IndexPage';
import NextPage from './components/NextPage';
import * as history from 'history';
import * as reducers from './reducers';

const browserHistory = history.createHashHistory();
const createStoreWithMiddleware = Redux.applyMiddleware(ReactRouterRedux.syncHistory(browserHistory))(Redux.createStore);
const store = createStoreWithMiddleware(reducers.reducer);

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={IndexPage} />
            <Route path='/next' component={NextPage} />
        </Route>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('content'));
