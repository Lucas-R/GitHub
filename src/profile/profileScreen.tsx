import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Text, List } from "react-native-paper";
import { useQuery } from 'react-query';

import { Container, Header, Body, Footer, Divider, styles } from './style';

export const ProfileScreen = ({ route, navigation : { navigate }}) => {
    const urlProfile = route.params.urlProfile;
    
    const {isLoading, error, data} = useQuery(route.params.urlProfile, () =>
        fetch(urlProfile)
        .then(res => res.json())
    )

    if (isLoading) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><Text> Loading... </Text></Container>

    if (error){ console.log(error) }

    return(
        <Container>
            <ScrollView>
                <Header>
                    <Text style={ styles.userName }>{ data.name }</Text>
                    <Avatar.Image size={250} source={{uri : data.avatar_url}} />
                </Header>

                <Body>
                    <Text style={ styles.title }>Details:</Text>
                    <Divider />
                    <List.Item
                        style={ styles.userDetailsListItem }
                        title={ data.login }
                        left={props => <List.Icon {...props} style={ styles.userDetailsIcon } icon="account" />}
                    />
                    <List.Item
                        style={ styles.userDetailsListItem }
                        title={ data.blog.replace(data.blog, 'Blog') }
                        left={props => <List.Icon {...props} style={ styles.userDetailsIcon } icon="web" />}
                    />
                    <List.Item
                        style={ styles.userDetailsListItem }
                        title={ data.company }
                        left={props => <List.Icon {...props} style={ styles.userDetailsIcon } icon="briefcase" />}
                    />
                    <List.Item
                        style={ styles.userDetailsListItem }
                        title={ data.twitter_username }
                        left={props => <List.Icon {...props} style={ styles.userDetailsIcon } icon="twitter" />}
                    />
                    <List.Item
                        style={ styles.userDetailsListItem }
                        title={ data.location }
                        left={props => <List.Icon {...props} style={ styles.userDetailsIcon } icon="map-marker" />}
                    />
                </Body>
                <Footer>
                    <Text style={ styles.title }> More informations: </Text>
                    <Divider />
                    <List.Item
                        title={`${data.public_repos} - Repositories`}
                        left={props => <List.Icon {...props} icon="folder-multiple" />}
                        onPress={() => navigate('ReposScreen', {urlRepos : data.repos_url } )}
                    />
                    <List.Item
                        title={`${data.followers} - Followers`}
                        left={props => <List.Icon {...props} icon="account-arrow-left" />}
                        onPress={() => navigate('FollowersScreen', {urlFollowers : data.followers_url } )}
                    />
                    <List.Item
                        title={`${data.following} - Following`}
                        left={props => <List.Icon {...props} icon="account-arrow-right" />}
                        onPress={() => console.log(data.following_url)}
                    />
                </Footer>
            </ScrollView>
        </Container>
    )
}