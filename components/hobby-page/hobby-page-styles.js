import { StyleSheet, Dimensions } from 'react-native';

import { sizes, colors, shadows, highlights } from '../../constants/theme';

export const itemWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.gray
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: shadows.primary,
        marginHorizontal: sizes.xsmall,
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
        height: 325,
        width: 325,
        resizeMode: 'cover'
    },
    contentContainer: {
        marginHorizontal: sizes.xsmall,
        padding: sizes.xsmall
    },
    contentHeader: {
        fontSize: sizes.large,
        fontWeight: '300',
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
    ratingHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: shadows.primary,
        marginBottom: sizes.xsmall
    },
    ratingHeaderText: {
        fontSize: sizes.large,
        fontWeight: '300',
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