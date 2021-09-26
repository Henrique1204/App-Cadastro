import React from 'react';
import { SafeAreaView, ScrollView, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import ButtonsActions from '../Components/ButtonsActions';

import users from '../data/users';

const UserList = ({ navigation }) => {
    const getUserItem = ({ item: user }) => {
        return (
            <ListItem
                bottomDivider
                onPress={() => navigation.navigate('UserForm', user)}
            >
                <Avatar source={{uri: user.avatar}} rounded />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                <ButtonsActions user={user} navigate={navigation.navigate} />
            </ListItem>
        );
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList
                    keyExtractor={(user) => user.id.toString()}
                    data={users}
                    renderItem={getUserItem}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserList;
