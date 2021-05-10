import React from 'react'
import{TouchableOpacity,View,Text,StyleSheet} from "react-native"

function Button( props) {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={props.onPress}
       >
        <View style={{...styles.buttonstyle,backgroundColor:"red"}} >
          <Text style={{color:"white" ,fontSize:20}}>
            {props.text}
          </Text>
        </View>
      </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
  buttonstyle:{
  padding:10,borderRadius:20,marginTop:20
  }
})
export default Button
