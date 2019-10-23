import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './scene/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const EmployeeStack = StackNavigator({
    EmployeeList: {
        screen: EmployeeList,
        title: 'Employee'
    },
    EmployeeCreate: {
        screen: EmployeeCreate,
        title: 'Add Employee'
    },
    EmployeeEdit: {
        screen: EmployeeEdit,
        title: 'Edit Employee'
    }

}, {
    headerMode: "none",
})


export default AppNavigator =  StackNavigator(
    {
        LoginPage: { screen: LoginForm },
        EmployeeStack: { screen: EmployeeStack },
    },{
        cardStyle: {paddingTop: StatusBar.currentHeight}
    }
);