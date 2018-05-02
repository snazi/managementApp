import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBoWPCG_5957t5RK60oGa6yRCcyaYJ7rc8",
      authDomain: "management-project-224b2.firebaseapp.com",
      databaseURL: "https://management-project-224b2.firebaseio.com",
      projectId: "management-project-224b2",
      storageBucket: "management-project-224b2.appspot.com",
      messagingSenderId: "324787196237"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
