import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query'

import { activateKeepAwake } from 'expo-keep-awake';

import { theme } from './theme';
import { HomeScreen } from './src/home/homeScreen';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient()

  if(__DEV__){
    activateKeepAwake();
  }

export default function App() {
  return (  
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={ theme }>
        <NavigationContainer theme={ theme }>
            <Stack.Navigator>
              <Stack.Screen
                name="Home" 
                component={HomeScreen} 
                options={{
                  title: " Home Page "
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}