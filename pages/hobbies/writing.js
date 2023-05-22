import { ScrollView } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import HobbyImage from '../../components/common/hobby-pages/hobby-image';
import HobbyDifficulty from '../../components/common/hobby-pages/hobby-difficulty';
import Description from '../../components/hobbies/writing/description';
import Requirements from '../../components/hobbies/writing/requirements';
import HealthAndSafety from '../../components/hobbies/writing/health-and-safety';
import Tips from '../../components/hobbies/writing/tips'
import HobbyResources from '../../components/common/hobby-pages/hobby-resources';

import { styles } from '../../components/common/hobby-pages/hobby-page-styles';
import writingResources from '../../constants/writing-resources';

const writingImage = require('../../assets/writing_desk.jpeg');

const Writing = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Writing"/>
        <HobbyImage image={writingImage} />
        <HobbyDifficulty rating={2}/>
        <Description />
        <Requirements />
        <HealthAndSafety />
        <Tips />
        <HobbyResources hyperlinks={writingResources}/>
    </ScrollView>
);

export default Writing;