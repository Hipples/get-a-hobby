import BoredProvider from '../contexts/bored-context';

import HomeBackground from '../components/home/home-background';
import Username from '../components/home/username';
import Intro from '../components/home/intro';
import RandomActivity from '../components/home/random-activity';
import FollowUp from '../components/home/follow-up';

const Home = () => (
    <BoredProvider>
        <HomeBackground>
            <Username />
            <Intro />
            <RandomActivity />
            <FollowUp />
        </HomeBackground>
    </BoredProvider>
);

export default Home; 