import React from "react";
import { FlatList } from "react-native";
import { Text, List, Avatar } from "react-native-paper";
import { useQuery } from 'react-query';
import { Container } from './style';

export const FollowersScreen = ({ route, navigation : { navigate } }) => {
    const urlFollowers = route.params.urlFollowers;
    
    const {isLoading, error, data} = useQuery('UserFollowers', () =>
        fetch(urlFollowers)
        .then(res => res.json())
    )

    if (isLoading) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><Text> Loading... </Text></Container>

    if (error){ console.log(error) }

    const renderItem = ({ item }) => (
        <List.Item
            title={ item.login }
            left={props => <Avatar.Image {...props} size={50} source={{ uri : item.avatar_url }} />}
            onPress={() => navigate('ProfileScreen', { urlProfile : item.url })}
        />
    );

    return(
        <Container>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </Container>
    )
}