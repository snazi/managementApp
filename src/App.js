import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        ha putangina
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;