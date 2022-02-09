import React from "react";
import { Avatar, Text } from "react-native-paper";
import { useQuery } from 'react-query';

import { Container, Header, Body, Divider, styles } from './style';

export const ProfileScreen = ({ route }) => {
    const urlProfile = route.params.urlProfile;
    
    const {isLoading, error, data} = useQuery('UserProfile', () =>
        fetch(urlProfile)
        .then(res => res.json())
    )

    if (isLoading) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><Text> Loading... </Text></Container>

    if (error){ console.log(error) }

    return(
        <Container>
            <Header>
                <Text style={ styles.userName }>{ data.name }</Text>
                <Avatar.Image style={ styles.userAvatar } size={250} source={{uri : data.avatar_url}} />
            </Header>

            <Body>
                <Text style={ styles.userDetailsTitle }>Details:</Text>
                <Divider />
                <Text style={ styles.userDetails }>{ data.login }</Text>
                <Text style={ styles.userDetails }>{ data.blog.replace(data.blog, 'Blog') }</Text>
                <Text style={ styles.userDetails }>{ data.company }</Text>
                <Text style={ styles.userDetails }>{ data.twitter_username }</Text>
                <Text style={ styles.userDetails }>{ data.location }</Text>
            </Body>
        </Container>
    )
}