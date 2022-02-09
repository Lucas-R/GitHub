import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 16px 8px;
`;

export const Header = styled.View`
    align-items: center;
    margin-bottom: 32px;
`;

export const Body = styled.View`
    margin-bottom: 32px;
`;

export const Footer = styled.View`
    margin-bottom: 32px;
`;

export const Divider = styled.View`
    height: 16px;
`;

export const styles = StyleSheet.create({
    title:{
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
    },
    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16
    },
    userDetails:{
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 8,

    },
    userDetailsListItem:{
        paddingVertical: 0,
    },
    userDetailsIcon:{
        marginVertical: 0,
        marginHorizontal: 0

    },
});