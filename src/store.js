import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const getStore = (navReducer) => {
    return createStore(reducers(navReducer), {}, applyMiddleware(ReduxThunk))
}

export default getStore;