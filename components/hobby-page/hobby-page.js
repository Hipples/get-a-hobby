import { ScrollView, SafeAreaView } from 'react-native';

import HobbyTitle from '../../components/hobby-page/hobby-title';
import HobbyImage from '../../components/hobby-page/hobby-image';
import HobbyDifficulty from '../../components/hobby-page/hobby-difficulty';
import HobbyDescription from '../../components/hobby-page/hobby-description';
import HobbyRequirements from '../../components/hobby-page/hobby-requirements';
import HobbyHealthAndSafety from './hobby-health-and-safety';
import HobbyTips from '../../components/hobby-page/hobby-tips';
import HobbyResources from '../../components/hobby-page/hobby-resources';

import { styles } from '../hobby-page/hobby-page-styles';

const HobbyPage = ( props ) => (
    <SafeAreaView>
        <ScrollView 
            contentContainerStyle={styles.container}
            persistentScrollbar={true} >
            <HobbyTitle hobby={props.title} />
            <HobbyImage image={props.image} />
            <HobbyDifficulty rating={props.rating} />
            <HobbyDescription description={props.description}/>
            <HobbyRequirements requirements={props.requirements}/>
            <HobbyHealthAndSafety healthAndSafety={props.healthAndSafety}/>
            <HobbyTips tips={props.tips} />
            <HobbyResources hyperlinks={props.resources}/>
        </ScrollView>
    </SafeAreaView>
);

export default HobbyPage;