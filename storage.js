import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const navigation = useNavigation();

// set user data
export const setData = async (name, age, setName=setName, setAge=setAge) => {
    if (name.length == 0 || age.length == 0) {
        alert('Warning!', 'Please write your data.')
    } else {
        try {
            var user = {
                Name: name,
                Age: age
            }
            await AsyncStorage.setItem('UserData', JSON.stringify(user));
            setName("")
            setAge("")
            // navigation.navigate('Home');
        } catch (error) {
            console.log(error);
        }
    }
}

// // check for user data
// export const checkData = () => {
//     try {
//         AsyncStorage.getItem('UserData')
//             .then(value => {
//                 if (value != null) {
//                     navigation.navigate('Home');
//                 }
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }

// get user data
export const getData = (setName, setAge) => {
    try {
        AsyncStorage.getItem('UserData')
            .then(value => {
                if (value != null) {
                    let user = JSON.parse(value);
                    setName(user.Name);
                    setAge(user.Age);
                    console.log(user);
                }
            })
    } catch (error) {
        console.log(error);
    }
}

// update user data (just name atm)
export const updateData = async () => {
    if (name.length == 0) {
        alert('Warning!', 'Please write your data.')
    } else {
        try {
            var user = {
                Name: name
            }
            await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
            alert('Success!', 'Your data has been updated.');
        } catch (error) {
            console.log(error);
        }
    }
}

export const removeData = async () => {
    try {
        await AsyncStorage.clear();
        // navigation.navigate('Welcome');
    } catch (error) {
        console.log(error);
    }
}
