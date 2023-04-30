import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BikeTable = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then(response => response.json())
      .then(data => setBikes(data.bikes))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.wheel}</Text>
      <Text style={styles.cell}>{item.usage}</Text>
      <Text style={styles.cell}>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={bikes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default BikeTable;
