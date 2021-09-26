import React from 'react';
import { Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const ButtonsActions = ({ user, navigate }) => {
    const confirmUserDeletion = ({ name }) => {
        Alert.alert(
            'Excluir Usuário',
            `Deseja excluir o usuário "${name}" ?`,
            [
                {
                    text: 'Sim',
                    onPress: () => console.warn('Usuário excluido!')
                },
                { text: 'Não' },
            ]
        );
    };

    return (
        <>
            <Button
                onPress={() => navigate('UserForm', user)}
                type='clear'
                icon={<Icon name='edit' size={25} color='orange' />}
            />

            <Button
                onPress={() => confirmUserDeletion(user)}
                type='clear'
                icon={<Icon name='delete' size={25} color='red' />}
            />
        </>
    );
};

export default ButtonsActions;
