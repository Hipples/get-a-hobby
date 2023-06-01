import { useState } from 'react';
import { StyleSheet, Modal, Text } from 'react-native';

const Login = () => {
    const [ isVisible, setVisibility ] = useState(false)

    return(
        <View style={styles.container}>
            <Modal 
                visible={isVisible}
                onRequestClose={() => setVisibility(!isVisible)} >
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>
                            Login
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});

export default Login;