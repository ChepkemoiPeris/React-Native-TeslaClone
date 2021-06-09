
import React from 'react';
import { StyleSheet, Text,Image, View, ImageBackground } from 'react-native';
 import StyledButton from '../StyledButton'
import styles from './styles'
const carItem =(props) =>{
return (
    <View style={styles.carContainer}>
    <ImageBackground 
    source={require('../../assets/images/ModelX.jpeg')}
      style={styles.image}
    />
     <View style={styles.titles}>
     <Text style={styles.title}>Model S</Text>
     <Text style={styles.subtitle}>Starting at $68,420</Text>
     </View>
     <StyledButton 
     type="primary" 
     content={"Custom Order"}
      onPress={() =>{
        console.log("Custom order pressed")
      }}
     />
        <StyledButton 
     type="secondary" 
     content={"Existing Inventory"}
      onPress={() =>{
        console.log("Existing Inventory pressed")
      }}
     />
    </View>
)
}
export default carItem;