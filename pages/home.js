import Intro from '../components/home/intro';
import Bored from '../components/home/bored';
import FollowUp from '../components/home/follow-up';
import Username from '../components/home/username';

import { HomeGradient } from '../components/home/home-styles';

const Home = () => (
    <HomeGradient>
        <Username />
        <Intro />
        <Bored />
        <FollowUp />
    </HomeGradient>
);

export default Home; 