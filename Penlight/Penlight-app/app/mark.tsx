import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';

const COLORS = [
  'red', 'blue', 'yellow', 'lime', 'orange', 'purple', 'deeppink', 'cyan', 'white',
];

const GRID_SIZE = 16;

export default function MarkCreateScreen() {
  const [selectedColor, setSelectedColor] = useState('red');
  const [gridData, setGridData] = useState(
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill('white'))
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleCellPress = (rowIndex: number, colIndex: number) => {
    const newGrid = [...gridData];
    newGrid[rowIndex][colIndex] = selectedColor;
    setGridData(newGrid);
  };

  const handleRegister = () => {
    console.log('登録されたマーク：', gridData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>マーク作成</Text>

      <View style={styles.grid}>
        {gridData.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cellColor, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.cell, { backgroundColor: cellColor }]}
                onPress={() => handleCellPress(rowIndex, colIndex)}
              />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.palette}>
        {COLORS.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>

      <View style={styles.templateButtons}>
        <TouchableOpacity style={styles.templateButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.templateText}>あa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.templateButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.templateText}>★</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>登録</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalContent} onPress={() => setModalVisible(false)}>
            <Text>テンプレートは準備中です</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    backgroundColor: '#11124c',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
  },
  grid: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  palette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  colorButton: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  templateButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  templateButton: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginHorizontal: 10,
  },
  templateText: {
    fontSize: 24,
  },
  registerButton: {
    backgroundColor: '#add8ff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  registerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
});
