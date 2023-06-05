// TODO:: Instead of individual hobby pages, the content should be output
// as a FlatList, or something of the like, to improve scalability
import Hobby from '../components/hobbies/hobby';
import { HobbiesGradient } from '../components/hobbies/hobbies-styles';

const coding_image = require('../assets/coding-button.jpg');
const volleyball_image = require('../assets/volleyball-button.jpg');
const writing_image = require('../assets/writing-button.jpg');
const everything_is_awesome = require('../assets/lego-button.jpg');

const Hobbies = () => (
    <HobbiesGradient>
        <Hobby hobby='Coding' image={coding_image}>Coding</Hobby>
        <Hobby hobby='Volleyball' image={volleyball_image}>Volleyball</Hobby>
        <Hobby hobby='Writing' image={writing_image}>Writing</Hobby>
        <Hobby hobby='Lego' image={everything_is_awesome}>Lego</Hobby>
    </HobbiesGradient>
);

export default Hobbies;