import React from 'react';
import {View} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Please Login" titleStyle={{alignSelf: 'center'}}/>
                <Scene key="employeeList" 
                    titleStyle={{alignSelf: 'center'}}
                    component={EmployeeList} 
                    title="Employees"
                    leftTitle=" "
                    left={()=>null}
                    renderBackButton={()=> <View/>}
                    backTitle=" "
                    rightTitle="ADD"
                    onRight={() => Actions.employeeCreate()} />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" titleStyle={{alignSelf: 'center'}} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;