import { ScrollView } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import HobbyImage from '../../components/common/hobby-pages/hobby-image';
import HobbyDifficulty from '../../components/common/hobby-pages/hobby-difficulty';
import Description from '../../components/hobbies/coding/description';
import Requirements from '../../components/hobbies/coding/requirements';
import HealthAndSafety from '../../components/hobbies/coding/health-and-safety';
import Tips from '../../components/hobbies/coding/tips';
import HobbyResources from '../../components/common/hobby-pages/hobby-resources';

import { styles } from '../../components/common/hobby-pages/hobby-page-styles'
import codingResources from '../../constants/coding-resources';

const codingImage = require('../../assets/coding.png');

const Coding = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Coding" />
        <HobbyImage image={codingImage} />
        <HobbyDifficulty rating={3} />
        <Description />
        <Requirements />
        <HealthAndSafety />
        <Tips />
        <HobbyResources hyperlinks={codingResources}/>

    </ScrollView>
);

export default Coding;