import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    form: {
        padding: 15
    }, input: {
        height: 40,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        marginTop: 5,
        marginBottom: 10
    }
});

const UserForm = ({ route, navigation }) => {
    const [user, setUser] = React.useState(route.params || {});

    return (
        <SafeAreaView style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe o nome do usuário'
                onChangeText={(name) => setUser((state) => ({ ...state, name }))}
                value={user?.name || ''}
            />

            <Text>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe o e-mail do usuário'
                onChangeText={(email) => setUser((state) => ({ ...state, email }))}
                value={user?.email || ''}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe a url do avatar do usuário'
                onChangeText={(avatar) => setUser((state) => ({ ...state, avatar }))}
                value={user?.avatar || ''}
            />

            <Button
                title='Salvar'
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </SafeAreaView>
    )
};

export default UserForm;
