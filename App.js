import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text>Calorie Tracker</Text>
      </View>
      
      {/* Overview */}
      <View>
        <Text>Calorie Overview</Text>
      </View>
      
      {/* Meal Section */}
      <View>
        <Text>List of meals</Text>
      </View>

      {/* App Bar */}
      <View>
        <Text>App Bar</Text>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
