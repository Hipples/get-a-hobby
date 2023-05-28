import { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Bored = () => {
    let [ loading, setLoading ] = useState(true);
    let [ error, setError ] = useState();
    let [ response, setResponse ] = useState();

    const url = 'http://www.boredapi.com/api/activity/';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                (result) => {
                    setLoading(false);
                    setResponse(result);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
    }, []);

    const getContent = () => {
        if (loading) {
            return <ActivityIndicator size='large' />
        }

        if (error) {
            return <Text>{error}</Text>
        }

        console.log(response)
        return <Text>Activity: {response['activity']}</Text>
    } 

    return (
        <View>
            { getContent() }
        </View>
    );
}

export default Bored;