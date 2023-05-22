import HobbyPage from '../../components/hobby-page/hobby-page';

import { description, requirements, healthAndSafety, tips, resources } from '../../constants/hobby-data/coding-data';

const image = require('../../assets/coding.png');

const Coding = () => (
    <HobbyPage 
        title="Coding"
        image={image}
        rating={3}
        description={description}
        requirements={requirements}
        healthAndSafety={healthAndSafety}
        tips={tips}
        resources={resources} />
);

export default Coding;