// styles for the individual hobby pages
import { StyleSheet, Dimensions } from 'react-native';
import { LinearGradient  } from 'expo-linear-gradient';

import { sizes, colors, shadows, highlights } from '../../constants/theme';

export const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white, 
    },
    titleContainer: {
        borderColor: shadows.primary,
        margin: sizes.xsmall,
        paddingTop: sizes.medium
    },
    titleText: {
        textAlign: 'center',
        fontSize: sizes.large*2,
        color: colors.tertiary,
        fontWeight: '300',
    },
    imageContainer: {
        marginHorizontal: sizes.xsmall,
        padding: sizes.xsmall,
        alignItems: 'center',
    },
    image: {
        height: 350,
        width: 350,
        resizeMode: 'cover'
    },
    ratingHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: shadows.primary,
        marginBottom: sizes.xsmall
    },
    ratingHeaderText: {
        fontSize: sizes.large,
        color: colors.tertiary,
    },
    infoButton: {
        marginLeft: sizes.xxsmall,
        height: sizes.medium+1,
        borderRadius: (sizes.medium+1) / 2,
        justifyContent: 'space-around',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: shadows.tertiary,
        elevation: 3
    },
    infoIcon: {
        height: sizes.medium,
        width: sizes.medium,
    },
    stars: {
        alignSelf: 'flex-start',
        imageSize: sizes.large,
    },
    contentContainer: {
        margin: sizes.xsmall,
    },
    contentHeader: {
        fontSize: sizes.large,
        color: colors.tertiary,
        borderBottomWidth: 1,
        borderColor: shadows.primary
    },
    contentText: {
        fontSize: sizes.medium,
        color: colors.black,
        paddingVertical: 10,
        fontWeight: '300'
    },
    tipContainer: {
        flexGrow: 1,
        width: screenWidth-30,
        justifyContent: 'space-evenly',
        marginVertical: sizes.xsmall,
        marginHorizontal: sizes.xxsmall,
        padding: sizes.small,
        borderWidth: 2,
        backgroundColor: colors.white,
    },
    tipHeader: {
        fontSize: sizes.small,
        color: colors.black,
        textAlign: 'right',
    },
    tipTitle: {
        textAlign: 'center',
        fontSize: sizes.medium,
        color: colors.black,
        fontStyle: 'italic',
        marginVertical: sizes.small
    },
    tipText: {
        fontSize: sizes.small,
        color: colors.black,
        textAlign: 'justify',
    },
    resourcesContainer: {
        flexGrow: 1,
        marginHorizontal: sizes.xsmall,
        marginBottom: sizes.small
    },
    resourceLinks: {
        color: colors.black,
        fontSize: sizes.medium
    },
    infoContainer: {
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
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    closeButtonPressed: {
        backgroundColor: '#2196F3',
    },
    closeButtonLabel: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoText: {
        marginBottom: 15,
        textAlign: 'left',
    }
});

export const TipsGradient = (props) => (
    <LinearGradient 
        colors={[ highlights.quaternary, colors.quaternary ]}
        start={{ x: .7, y: .7 }}
        end={{ x: .9, y: 1 }}
        style={styles.tipContainer}>
            {props.children}
    </LinearGradient>
);