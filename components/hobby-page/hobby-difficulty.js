import DifficultyRating from '../common/difficulty-rating';

import { styles } from '../hobby-page/hobby-page-styles';

const HobbyDifficulty = ({ rating }) => (
    <DifficultyRating 
        stylesRatingContainer={styles.ratingContainer}
        stylesHeader={styles.ratingHeader}
        stylesHeaderText={styles.ratingHeaderText}
        stylesInfoButton={styles.infoButton}
        stylesInfoIcon={styles.infoIcon}
        rating={rating}
        stylesStars={styles.stars}
    />
);

export default HobbyDifficulty;