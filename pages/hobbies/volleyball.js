import HobbyPage from '../../components/hobby-page/hobby-page';

import { description, requirements, healthAndSafety, tips, resources } from '../../constants/hobby-data/volleyball-data';

const image = require('../../assets/volleyball.png');

const Volleyball = () => (
    <HobbyPage 
        title="Volleyball"
        image={image}
        rating={5}
        description={description}
        requirements={requirements}
        healthAndSafety={healthAndSafety}
        tips={tips}
        resources={resources} />
);

export default Volleyball;