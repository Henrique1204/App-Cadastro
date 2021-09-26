import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import users from '../data/users';

const UserList = ({ navigation }) => {
    const getUserItem = ({ item: user }) => {
        return (
            <ListItem
                bottomDivider
                onPress={() => navigation.navigate('UserForm')}
            >
                <Avatar source={{uri: user.avatar}} rounded />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </SafeAreaView>
    );
};

export default UserList;
