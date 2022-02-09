import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query'

import { activateKeepAwake } from 'expo-keep-awake';

import { theme } from './theme';
import { HomeScreen } from './src/home/homeScreen';
import { ProfileScreen } from './src/profile/profileScreen';
import { ReposScreen } from './src/repos/reposScreen';
import { FollowersScreen } from './src/followers/followersScreen';

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
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                  title: " Home Page "
                }}
              />
               <Stack.Screen
                name="ProfileScreen" 
                component={ProfileScreen} 
                options={{
                  title: " Profile Page "
                }}
              />
              <Stack.Screen
                name="ReposScreen" 
                component={ReposScreen} 
                options={{
                  title: "Repos Page "
                }}
              />
              <Stack.Screen
                name="FollowersScreen" 
                component={FollowersScreen} 
                options={{
                  title: "Followers Page "
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}