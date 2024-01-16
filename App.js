import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Input your goal' />
        <Button title='Input Goals' />
      </View>

      <View style={styles.goalsContainer}>
        <Text>Your list of goals...</Text>
      </View>

    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#48cae4",
    paddingBottom: 20,
    alignItems: "center",
    flex: 1
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#48cae4",
    width: "70%",
    padding: 10
  },

  goalsContainer: {
    flex: 14
  }
})