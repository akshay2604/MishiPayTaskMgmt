import React from 'react';
import { Icon, CheckBox } from 'native-base';
import { View, Text } from 'react-native';

const TodoItem = ({ toggle, remove, item }) => {
  return(
    <View style={{flexDirection: 'row', flex: 1,justifyContent: 'space-around'}}>
    <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-around' }}>
      <CheckBox onPress={toggle} checked={item.completed} />
        <Text style={{ alignSelf: 'center' }}>
          {item.text}
        </Text>
        <Icon name="md-trash" style={{ color: '#000000' }} onPress={remove} />
    </View>
    <View style={{flex: 1.5}}></View>
    </View>
  
)};

export default TodoItem;