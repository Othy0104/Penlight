import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  Button } from 'react-native';
import Slider from '@react-native-community/slider';

export default function ManualControlScreen() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [brightness, setBrightness] = useState(0.5);
  const [speed, setSpeed] = useState(0.5);

  const colors = [
    'red', 'blue', 'yellow',
    'lime', 'orange', 'purple',
    'deeppink', 'cyan'
  ];

  const handleRegister = () => {
    console.log('登録:', { selectedColor, brightness, speed });
    // 通信や保存処理をここに追加予定
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>マニュアル操作</Text></View>

      <View style={styles.paletteContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorBox, { backgroundColor: color, borderWidth: selectedColor === color ? 3 : 1 }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>

      <Text style={styles.label}>点滅</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={brightness}
        onValueChange={setBrightness}
        style={styles.slider}
      />

      <Text style={styles.label}>速度</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={speed}
        onValueChange={setSpeed}
        style={styles.slider}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>登録</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', alignItems: 'center' },
  header: { backgroundColor: '#14194C', width: '100%', paddingVertical: 30 },
  headerText: { color: 'white', fontSize: 28, textAlign: 'center' },
  paletteContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 20 },
  colorBox: { width: 80, height: 80, margin: 10, borderColor: 'black' },
  label: { fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 30, marginTop: 20 },
  slider: { width: '80%', marginVertical: 10 },
  registerButton: { backgroundColor: '#ADD8FF', padding: 15, borderRadius: 10, marginTop: 30 },
  registerText: { fontSize: 20, fontWeight: 'bold' },
});