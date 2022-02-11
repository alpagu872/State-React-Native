

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

function App() {


  const [counter, setCounter] = useState(0);

  function updateCounter(){
    setCounter(counter+1);
  }
  function downCounter(){
    setCounter(counter-1);
  }




  return(
    <SafeAreaView>
      <Text style = {{fontSize:40}}>Counter: {counter}</Text>
      <Button title= "Update Counter" onPress={updateCounter}/>
      <Button title= "Down Counter" onPress={downCounter}/>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

});

export default App;
