export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1
    },
    header:{
      backgroundColor: '#ff6666',
      height: 90,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    menu:{
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
    },
    text: {
      color: Platform.OS === 'android' ? 'white' : 'black' ,
      fontSize: 20
    },
    icon:{
      color: Platform.OS === 'android' ? 'white' : 'black' ,
    }    
});