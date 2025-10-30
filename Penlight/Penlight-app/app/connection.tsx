import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PenlightConnectionScreen() {
  const [connectedDevices, setConnectedDevices] = useState([
    { id: '1', name: 'サイリウムA', battery: 'full', icon: 'battery-full' },
    { id: '2', name: 'サイリウムB', battery: 'medium', icon: 'battery-half' },
    { id: '3', name: 'サイリウムC', battery: 'charging', icon: 'battery-charging' },
  ]);

  const renderItem = ({ item }: any) => (
    <View style={styles.deviceContainer}>
      <TouchableOpacity style={styles.checkbox} />
      <Text style={styles.deviceName}>{item.name}</Text>
      <Ionicons
        name={item.icon as any}
        size={24}
        color="black"
        style={styles.batteryIcon}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>サイリウム接続</Text>
      <Text style={styles.subTitle}>選択</Text>

      <FlatList
        data={connectedDevices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={32} color="#002266" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>一括登録</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#11144c',
    color: 'white',
    paddingVertical: 20,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b3d9ff',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 10,
  },
  deviceName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  batteryIcon: {
    marginLeft: 10,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  registerButton: {
    backgroundColor: '#99aaff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});