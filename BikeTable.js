// File: BikeTable.js
// Author: Baráth Dávid
// Copyright: 2023, Baráth Dávid
// Group: Szoft 2 N
// Date: 2023-04-30
// Github: https://github.com/davis587/
// Licenc: GNU GPL


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BikeTable = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBikes(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.wheel}</Text>
      <Text style={styles.cell}>{item.usage}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
