import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from 'react-native';
import * as math from 'mathjs';  // <-- Updated import

export default function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      const result = math.evaluate(input);  
      setInput(String(result));
      setHistory([`${input} = ${result}`, ...history]);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      const result = math.sqrt(input);
      setInput(String(result));
      setHistory([`${input} √ = ${result}`, ...history]);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleSquare = () => {
    try {
      const result = math.square(input);
      setInput(String(result));
      setHistory([`${input}² = ${result}`, ...history]);
    } catch (error) {
      setInput('Error');
    }
  };

  const handlePower = () => {
    try {
      const [base, exponent] = input.split('^');
      const result = math.pow(base, exponent);
      setInput(String(result));
      setHistory([`${input}^ = ${result}`, ...history]);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleInverse = () => {
    try {
      const result = math.inv(input);
      setInput(String(result));
      setHistory([`${input}⁻¹ = ${result}`, ...history]);
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={[styles.container, styles.darkMode]}>
      <Text style={styles.historyText}>History:</Text>

      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          value={input}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} style={styles.circleButton} />
          <Button title="8" onPress={() => handleButtonPress('8')} style={styles.circleButton} />
          <Button title="9" onPress={() => handleButtonPress('9')} style={styles.circleButton} />
          <Button title="/" onPress={() => handleButtonPress('/')} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} style={styles.circleButton} />
          <Button title="5" onPress={() => handleButtonPress('5')} style={styles.circleButton} />
          <Button title="6" onPress={() => handleButtonPress('6')} style={styles.circleButton} />
          <Button title="*" onPress={() => handleButtonPress('*')} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} style={styles.circleButton} />
          <Button title="2" onPress={() => handleButtonPress('2')} style={styles.circleButton} />
          <Button title="3" onPress={() => handleButtonPress('3')} style={styles.circleButton} />
          <Button title="-" onPress={() => handleButtonPress('-')} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleButtonPress('0')} style={styles.circleButton} />
          <Button title="." onPress={() => handleButtonPress('.')} style={styles.circleButton} />
          <Button title="=" onPress={handleEvaluate} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
          <Button title="+" onPress={() => handleButtonPress('+')} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>
        <View style={styles.row}>
          <Button title="C" onPress={handleClear} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
          <Button title="DEL" onPress={handleDelete} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>

        <View style={styles.row}>
          <Button title="√" onPress={handleSquareRoot} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
          <Button title="x²" onPress={handleSquare} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
          <Button title="x^" onPress={handlePower} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
          <Button title="1/x" onPress={handleInverse} style={[styles.circleButton, { backgroundColor: '#FFA500' }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkMode: {
    backgroundColor: '#121212',
  },
  historyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  historyList: {
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 14,
    color: 'gray',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 40,
    borderBottomWidth: 1,
    padding: 10,
    textAlign: 'right',
    color: 'white',
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    flexWrap: 'wrap',
    gap: 0,
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    margin: 5,
  },
});
