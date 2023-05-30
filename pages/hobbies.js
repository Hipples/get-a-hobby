import Hobby from '../components/hobby/hobby';

import { HobbiesGradient } from '../components/home/home-styles';

const coding_image = require('../assets/coding-button.jpg');
const volleyball_image = require('../assets/volleyball-button.jpg');
const writing_image = require('../assets/writing-button.jpg');
const everything_is_awesome = require('../assets/lego-button.jpg');

const Hobbies = () => (
    <HobbiesGradient>
        <Hobby hobby='Coding' image={coding_image}>Coding</Hobby>
        <Hobby hobby='Volleyball' image={volleyball_image}>Volleyball</Hobby>
        <Hobby hobby='Writing' image={writing_image}>Writing</Hobby>
        <Hobby hobby='Legos' image={everything_is_awesome}>Legos</Hobby>
    </HobbiesGradient>
);

export default Hobbies;