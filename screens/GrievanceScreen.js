import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function GrievanceScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = () => {
    console.log('Grievance Submitted:', { name, email, issue });
  };

  return (
    <View>
      <Text>Create a New Grievance</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Issue" value={issue} onChangeText={setIssue} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
