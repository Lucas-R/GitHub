import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 16px 8px;
`;

export const Divider = styled.View`
    height: 16px;
`;

export const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
    },
    button:{
        paddingVertical: 16
    }
});