import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {USERS} from '../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: user.image}} style={styles.story} />
            <Text style={{color: 'white'}}>
              {user.name.length > 11
                ? user.name.slice(0, 11).toLowerCase() + '...'
                : user.name.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#de7447',
  },
});

export default Stories;
