import React from 'react';
import firebase from 'firebase';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import getStore from './src/store';
import AppNavigator from './src/Router';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LoginPage'));

const AppWithNavigationState = ({ dispatch, nav }) => (
	<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapSateToProps = (state) => ({ 
	...state,
	nav: state.nav,
});

const AppNavigationWithState = connect(mapSateToProps)(AppWithNavigationState);


const navReducer = (state, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);
  
	return nextState || state;
};

export default class App extends React.Component {
	componentWillMount(){
		
		const config = {
			apiKey: "AIzaSyDiYvDjmNk6jb7tFsVkn6E0YmedNW8ZStE",
			authDomain: "manager-d9e42.firebaseapp.com",
			databaseURL: "https://manager-d9e42.firebaseio.com",
			projectId: "manager-d9e42",
			storageBucket: "manager-d9e42.appspot.com",
			messagingSenderId: "404689507751"
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={ getStore(navReducer) }>
				<AppNavigationWithState />
			</Provider>
		);
	}
}
