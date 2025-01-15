import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Customer Grievance Tracker</Text>
      <Button
        title="Create a Grievance"
        onPress={() => navigation.navigate('Grievance')}
      />
    </View>
  );
}
