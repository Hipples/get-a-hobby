import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { useUserContext } from '../../contexts/user-context';

const GreetUser = () => {
    const [ currentUser, setCurrentUser ] = useState(user);
    const { user } = useUserContext();
    const { getItem } = useAsyncStorage('@user');

    const getStoredUser = async () => {
        try{
            const data = await getItem();
            setCurrentUser(data)
        }
        catch(error){ console.error(error) }
    }

    useEffect(() => { getStoredUser() }, []);
    console.log(`Hello from settings, ${currentUser}!`);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{fontsize: 30}}>Hey { user }!</Text>
            <Text style={{fontsize: 30}}>What would you like to do?</Text>
        </View>
    )
}

export default GreetUser;