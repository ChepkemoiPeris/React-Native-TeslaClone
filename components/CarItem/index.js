
import React from 'react';
import { StyleSheet, Text,Image, View, ImageBackground } from 'react-native';
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
    </View>
)
}
export default carItem;