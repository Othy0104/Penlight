import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ホーム</Text>
      </View>

      <View style={styles.statusRow}>
        <Text style={styles.label}>ライブ名</Text>
        <Text style={styles.label}>接続中 <Text style={styles.dot}>●</Text></Text>
      </View>

      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/manual')}>
          <Text style={styles.buttonText}>マニュアル操作</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AI自動制御</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/connection')}>
          <Text style={styles.buttonText}>ペンライト接続</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/mark')}>
          <Text style={styles.buttonText}>推しマーク作成</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#14194C',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
  },
  dot: {
    color: 'deepskyblue',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#ADD8FF',
    width: '40%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});