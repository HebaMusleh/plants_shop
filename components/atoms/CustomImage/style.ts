import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        width:200,
        height:200,
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius:8,
      },
      loader: {
        position: 'absolute',
        zIndex: 1,
      },
      cartWrapper:{
        width:80,
        height:80,
      }
})