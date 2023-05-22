import HobbyPage from '../../components/hobby-page/hobby-page';

import { description, requirements, healthAndSafety, tips, resources } from '../../constants/hobby-data/writing-data';

const image = require('../../assets/writing_desk.jpeg');

const Writing = () => (
    <HobbyPage 
        title="Writing"
        image={image}
        rating={2}
        description={description}
        requirements={requirements}
        healthAndSafety={healthAndSafety}
        tips={tips}
        resources={resources} />
);

export default Writing;