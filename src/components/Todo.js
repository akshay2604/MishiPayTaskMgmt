import React, { Component } from 'react';

import {  Header, Title, InputGroup, Input, Button, } from 'native-base';
import { View, Text, Dimensions, FlatList } from 'react-native';

import TodoItem from './TodoItem';
const shortid = require('shortid');


export default class Todo extends Component {


  constructor(props) {
    super(props);
    this.state = { inputText: '', };
  }

  onSubmit() {
    if (this.state.inputText.length > 0) {
    this.props.addTodo({id: shortid.generate(), text:this.state.inputText});
      this.setState({
        inputText: '',
      });
    }
  }

  remove(id) {
    this.props.removeTodo(id);
  }

  toggle(id) {
    this.props.toggleTodo(id);
  }

  


  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Header>
            <Title style={{alignSelf:'center'}}>Mishipay To-do App</Title>
          </Header>
          {
            this.props.todos.length <= 0 && <View style={{paddingTop: 10, alignItems: 'center'}}><Text>Please add a todo</Text></View>
          }
          <FlatList
            contentContainerStyle={{paddingTop: 15}}
            data={this.props.todos}
            renderItem={({ item }) => (
              <TodoItem
                toggle={() => this.toggle(item.id)}
                remove={() => this.remove(item.id)}
                item={item}
                key={item.id}
              />
            )}
            ItemSeparatorComponent={() => <View style={{paddingBottom: 15}}/>}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              alignSelf: 'flex-end',
              flex: 0,
              padding: 5,
              flexDirection: 'row',
            }}
        >
          <InputGroup
            borderType="underline"
            style={{ flex: 0.9 }}
          >
            <Input
              placeholder="Type Your Text Here"
              value={this.state.inputText}
              onChangeText={inputText => this.setState({ inputText })}
              onSubmitEditing={() => this.onSubmit()}
              maxLength={35}
            />
          </InputGroup>
          <Button
            style={{ flex: 0.2 }}
            onPress={() => this.onSubmit()}
          >
            <Text style={{color: '#fff', textAlign: 'center', justifyContent: 'center'}}>Add</Text>
          </Button>
        </View>
      </View>
    );
  }
}