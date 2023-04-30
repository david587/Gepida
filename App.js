import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BikeTable from "./BikeTable.js";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bikes</Text>
      <Text style={styles.subHeaderText}>Baráth Dávid, Szoft 2 N, 2023-04-30</Text>
      <BikeTable />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default App;
