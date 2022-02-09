import React, { useState } from 'react';
import { Container, Divider, styles } from './style';
import { TextInput, Button, Text } from 'react-native-paper';
import { useQuery } from 'react-query';

import { ProfileList } from './profileList';

export const HomeScreen = ({ navigation : { navigate } }) => {
    const [search, setSearch] = useState<string>('');
    const [newSearch, setNewSearch] = useState<string>('');
    
    const {isLoading, error, data} = useQuery(newSearch, () =>
        fetch('https://api.github.com/search/users?q=' + search)
        .then(res => res.json())
    )

    if (isLoading) return <Container style={{ alignItems: 'center', justifyContent: 'center' }}><Text> Loading... </Text></Container>

    if (error){ console.log(error) }

    const heandleSearch = () => {
        setNewSearch(search);
    }

    return(
        <Container>
            <TextInput
                label="Username"
                value={search}
                onChangeText={inputSearch => setSearch(inputSearch)}
                style={styles.input}
            />
            <Button 
                icon="account-search" 
                mode="contained" 
                onPress={heandleSearch}
                style={styles.button}
            >
                Search
            </Button>

            <Divider />

            <ProfileList data={ data } navigate={ navigate }/>

        </Container>
    )
}