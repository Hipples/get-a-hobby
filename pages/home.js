import HomeBackground from '../components/home/home-background';
import Username from '../components/home/username';
import Intro from '../components/home/intro';
import Bored from '../components/home/bored';
import FollowUp from '../components/home/follow-up';

import BoredProvider from '../contexts/bored-context';

const Home = () => (
    <BoredProvider>
        <HomeBackground>
            <Username />
            <Intro />
            <Bored />
            <FollowUp />
        </HomeBackground>
    </BoredProvider>
);

export default Home; 