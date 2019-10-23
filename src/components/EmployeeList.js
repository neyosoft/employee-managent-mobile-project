import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FetchEmployees } from '../actions'
import ListItem from './ListItem';


import {Button} from './common';


class EmployeeList extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Employees',
        headerRight: <Button onClick={ () => { navigation.navigate('EmployeeCreate') } }>Add</Button>
    })

    componentWillMount(){
        this.props.FetchEmployees();

        this.createDataSource(this.props);
        
    }
    
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render(){
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow = (employee) => {
        return <ListItem employee={employee} nav={this.props.navigation}  />
    }
    
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    });

    return { employees };
}

export default connect(mapStateToProps, {FetchEmployees})(EmployeeList);