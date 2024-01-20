import React from 'react';
import { SafeAreaView, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const contactsData = [
  {
    id: '1',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    position: 'Marketing Specialist',
    phone: '111-222-3333',
    photo: 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-avatar-pattern-flat-avatar-png-image_4492883.jpg',
  },
  {
    id: '2',
    name: 'Eva Williams',
    email: 'eva.williams@example.com',
    position: 'Accountant',
    phone: '777-888-9999',
    photo: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-user-flat-character-avatar-png-png-image_4651285.jpg',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    position: 'Project Manager',
    phone: '333-444-5555',
    photo: 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-flat-user-pattern-round-avatar-pattern-png-image_4492888.jpg',
  },
  {
    id: '4',
    name: 'Sophie Taylor',
    email: 'sophie.taylor@example.com',
    position: 'Graphic Designer',
    phone: '666-777-8888',
    photo: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-flat-pattern-user-pattern-image_1200088.jpg',
  },
  {
    id: '5',
    name: 'Alex Turner',
    email: 'alex.turner@example.com',
    position: 'Software Developer',
    phone: '444-555-6666',
    photo: 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-flat-user-pattern-round-png-image_4492882.jpg',
  },
  {
    id: '6',
    name: 'Olivia Smith',
    email: 'olivia.smith@example.com',
    position: 'Human Resources',
    phone: '999-000-1111',
    photo: 'https://png.pngtree.com/png-clipart/20190904/original/pngtree-user-cartoon-girl-avatar-png-image_4492903.jpg',
  },
  // Add more contacts as needed
];

const ContactItem = ({ name, email, position, phone, photo, onCallPress }) => (
  <View style={styles.item}>
    <Image source={{ uri: photo }} style={styles.photo} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
    <TouchableOpacity onPress={() => onCallPress(phone)} style={styles.callButton}>
      <Text style={styles.callButtonText}>Call</Text>
    </TouchableOpacity>
  </View>
);

const Bai1 = () => {
  const handleCallPress = (phoneNumber) => {
    // Implement the calling functionality here
    console.log(`Calling ${phoneNumber}`);
    // For a real application, you would use a library like react-native-communications
    // to initiate a phone call.
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            name={item.name}
            email={item.email}
            position={item.position}
            phone={item.phone}
            photo={item.photo}
            onCallPress={handleCallPress}
          />
        )}
      />
    </SafeAreaView>
  );
}
export default Bai1;