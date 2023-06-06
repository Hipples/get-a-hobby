import { useNavigation } from '@react-navigation/native';

import Button from '../../common/button';

import { styles } from '../settings-styles';

const GoHome = () => {
    const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate('Home');
    }
  
    return (
        <Button
            label='Go Back Home'
            buttonStyle={[styles.option, styles.goHome]} 
            labelStyle={styles.optionText}
            onPress={() => goHome()} />
    );
}

  export default GoHome;