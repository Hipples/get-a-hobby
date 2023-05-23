import { StyleSheet, Dimensions } from 'react-native';

import { sizes, colors, shadows, highlights } from '../../constants/theme';

export const itemWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.secondary
    },
    titleContainer: {
        flex: 1,
        borderWidth: 2,
        padding: 10,
        margin: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 35,
        color: colors.black
    },
    imageContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "#666"
    },
    image: {
        flex: 1,
        height: 350,
        width: 350,
        resizeMode: 'contain'
    },
    ratingContainer: {
        borderWidth: 2,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10
    },
    ratingHeader: {
        flexDirection: 'row'
    },
    ratingHeaderText: {
        fontSize: sizes.large,
        fontWeight: 'bold',
        color: colors.black
    },
    infoButton: {
        marginLeft: sizes.xsmall
    },
    infoIcon: {
        height: sizes.medium,
        width: sizes.medium
    },
    stars: {
        paddingVertical: sizes.xsmall,
        alignSelf: 'flex-start'
    },
    descriptionContainer: {
        flex: 1,
        height: 500,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    descriptionHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#338",
        padding: 5
    },
    descriptionText: {
        fontSize: 20,
        color: colors.black,
        paddingVertical: 10
    },
    requirementsContainer: {
        flex: 1,
        height: 700,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    requirementsHeader: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
        padding: 5
    },
    requirementsText: {
        flex: 1,
        fontSize: 20,
        color: colors.black,
        paddingVertical: 10
    },
    healthAndSafetyContainer: {
        flex: 1,
        height: 430,
        backgroundColor: '#EFEFEF',
        borderWidth: 2,
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    healthAndSafetyHeader: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    healthAndSafetyText: {
        flex: 1,
        fontSize: 20,
        color: colors.black,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    tipContainer: {
        flex: 1,
        justifyContent: 'space-around',
        height: 600,
        width: itemWidth-20,
        backgroundColor: '#a8a',
        borderWidth: 3,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#fff',
    },
    tipHeader: {
        flex: 1,
        textAlign: 'center',
        fontSize: 50,
        color: '#335',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    tipTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 35,
        color: '#335',
        fontStyle: 'italic',
        padding: 10,
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: '#333',
        textShadowRadius: 2
    },
    tipText: {
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 5,
        paddingVertical: 10,
        color: '#335',
        textAlign: 'justify',
        textShadowOffset: {width: -1, height: 1},
        textShadowColor: '#337',
        textShadowRadius: 1
    },
    resourcesContainer: {
        flexGrow: 1,
        borderWidth: 2,
        marginHorizontal: sizes.xsmall,
        marginBottom: sizes.small
    },
    resourceLinks: {
        color: colors.black,
        fontSize: sizes.medium
    }
});