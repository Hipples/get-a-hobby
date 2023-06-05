import DifficultyRating from './difficulty-rating';

import { styles } from '../hobby-page-styles';

const HobbyDifficulty = ({ rating }) => (
    <DifficultyRating 
        stylesRatingContainer={styles.contentContainer}
        stylesHeader={styles.ratingHeader}
        stylesHeaderText={styles.ratingHeaderText}
        stylesInfoButton={styles.infoButton}
        stylesInfoIcon={styles.infoIcon}
        starBackground={styles.container.backgroundColor}
        starPosition={styles.stars}
        starSize={styles.stars.imageSize}
        rating={rating}
    />
);

export default HobbyDifficulty;