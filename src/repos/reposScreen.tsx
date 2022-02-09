import React from "react";
import { FlatList, Linking } from "react-native";
import { Text, List } from "react-native-paper";
import { useQuery } from 'react-query';
import { Container } from './style';

export const ReposScreen = ({ route }) => {
    const urlRepos = route.params.urlRepos;
    
    const {isLoading, error, data} = useQuery('UserRepos', () =>
        fetch(urlRepos)
        .then(res => res.json())
    )

    if (isLoading) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><Text> Loading... </Text></Container>

    if (error){ console.log(error) }

    const renderItem = ({ item }) => (
        <List.Item
            title={ item.name }
            description={ item.full_name }
            left={props => <List.Icon {...props} icon="link" />}
            onPress={() => Linking.openURL(item.html_url)}
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