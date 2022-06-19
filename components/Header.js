import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textLogo}>Instagram</Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Text style={styles.textAdd}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textAdd}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textAdd}>+</Text>
        </TouchableOpacity>
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
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  textLogo: {
    color: '#fff',
  },
  textAdd: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
    marginLeft: 5,
  },
  unreadBadge: {
    backgroundColor: '#de4747',
    position: 'absolute',
    left: 20,
    bottom: 20,
    height: 18,
    width: 25,
    borderRadius: 25,
    alignItems: 'center',
  },
  unreadBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
