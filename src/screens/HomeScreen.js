/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Video Call App',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        value={userName}
        onChangeText={newValue => setUserName(newValue)}
        style={{borderWidth: 2, width: '50%',marginTop:15,marginBottom:15}}
      />
      <Button
        onPress={() => {
          navigation.navigate('call', {
            userName,
          });
        }}
        title="Join Call"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});
