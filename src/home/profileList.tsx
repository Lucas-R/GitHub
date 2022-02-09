import React from 'react';
import { View, FlatList } from 'react-native';
import { List, Avatar, Text } from 'react-native-paper';
import { ProfileScreen } from '../profile/profileScreen';

export const ProfileList = ({ data, navigate }) => {

    const RenderList = ({ item }) => {
        return(
            <List.Item
            title={ item.login }
            left={props => <Avatar.Image {...props} source={{ uri : item.avatar_url }} />}
            onPress={() => navigate('ProfileScreen', { urlProfile : item.url })}
        />  
        )
    }

    if(data.message) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Nada a exibir :( </Text>
            </View>
        )
    }

    return(
        <>
            <FlatList 
                data={data.items} 
                renderItem={RenderList} 
                keyExtractor={item => item.id} 
            />
        </>
    )
}