import Intro from '../components/home/intro';
import Bored from '../components/home/bored';
import FollowUp from '../components/home/follow-up';
import { HomeGradient } from '../components/home/home-styles';

const Home = () => (
    <HomeGradient>
        <Intro />
        <Bored />
        <FollowUp />
    </HomeGradient>
);

export default Home; 