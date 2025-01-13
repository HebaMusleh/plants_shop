import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        overflow: 'hidden',
        width:168,
        height:134,
        borderRadius:8,
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