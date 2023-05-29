import HobbyPage from '../../components/hobby-page/hobby-page';

import { description, requirements, healthAndSafety, tips, resources } from '../../constants/hobby-data/lego-data.js';

const image = require('../../assets/lego_button.png');

const Legos = () => (
    <HobbyPage 
        title="Lego Building"
        image={image}
        rating={4}
        description={description}
        requirements={requirements}
        healthAndSafety={healthAndSafety}
        tips={tips}
        resources={resources} />
);

export default Legos;