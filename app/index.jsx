import { ScrollView, Text, View } from "react-native";
import Login  from "./Screens/LoginScreen/Login";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SignOutButton } from '@/app/components/SignOutButton'
import { Link } from 'expo-router'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function Index() {

  

  return (<ScrollView
      style={{
        flex: 1,
        paddingTop: 10,
        
      }}
      options={{ headerShown: false }}
    >
      <SignedIn>
              <Text>You are signed In</Text>
              <SignOutButton />
            </SignedIn>
            <SignedOut>
                <Login />
            </SignedOut> 
    </ScrollView>);
}
