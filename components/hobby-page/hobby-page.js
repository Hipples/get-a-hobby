import { ScrollView } from 'react-native';

import HobbyTitle from './hobby-title';
import HobbyImage from './hobby-image';
import HobbyDifficulty from './hobby-difficulty';
import HobbyDescription from './hobby-description';
import HobbyRequirements from './hobby-requirements';
import HobbyHealthAndSafety from './hobby-health-and-safety';
import HobbyTips from './hobby-tips';
import HobbyResources from './hobby-resources';

import { styles } from './hobby-page-styles';

const HobbyPage = ( props ) => (
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
);

export default HobbyPage;