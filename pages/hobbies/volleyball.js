import { ScrollView } from 'react-native';

import HobbyTitle from '../../components/common/hobby-pages/hobby-title';
import HobbyImage from '../../components/common/hobby-pages/hobby-image';
import Difficulty from '../../components/hobbies/volleyball/difficulty';
import Description from '../../components/hobbies/volleyball/description';
import Requirements from '../../components/hobbies/volleyball/requirements';
import HealthAndSafety from '../../components/hobbies/volleyball/health-and-safety';
import Tips from '../../components/hobbies/volleyball/tips';
import HobbyResources from '../../components/common/hobby-pages/hobby-resources';

import { styles } from '../../components/common/hobby-pages/hobby-page-styles'
import volleyballResources from '../../constants/volleyball-resources';

const volleyballImage = require('../../assets/volleyball.png');

const Volleyball = () => (
    <ScrollView 
        contentContainerStyle={styles.container}
        persistentScrollbar={true} >
        <HobbyTitle hobby="Volleyball" />
        <HobbyImage image={volleyballImage} />
        <Difficulty />
        <Description />
        <Requirements />
        <HealthAndSafety />
        <Tips />
        <HobbyResources hyperlinks={volleyballResources} />

    </ScrollView>
);

export default Volleyball;