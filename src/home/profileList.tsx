import React from 'react';
import { View, FlatList } from 'react-native';
import { List, Avatar, Text } from 'react-native-paper';

export const ProfileList = ({ data }) => {

    const RenderList = ({ item }) => {
        return(
            <List.Item
            title={ item.login }
            left={props => <Avatar.Image {...props} source={{ uri : item.avatar_url }} />}
        />  
        )
    }

    if(!data) {
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