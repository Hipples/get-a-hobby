import HobbyPage from '../../components/hobby-page/hobby-page';

import { description, requirements, healthAndSafety, tips, resources } from '../../constants/hobby-data/lego-data.js';

const image = require('../../assets/lego_button.png');

const Lego = () => (
    <HobbyPage 
        title="Lego"
        image={image}
        rating={4}
        description={description}
        requirements={requirements}
        healthAndSafety={healthAndSafety}
        tips={tips}
        resources={resources} />
);

export default Lego;