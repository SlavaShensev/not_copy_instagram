import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Instagram</Text>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <Text style={styles.text}>Dummy</Text>
        <Text style={styles.text}>Dummy</Text>
        <Text style={styles.text}>Dummy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
  },
});

export default Header;
