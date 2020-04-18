import PropTypes from 'prop-types';

const BackgroundMusic = ({ backgroundMusic }) => (
    <audio autoPlay loop>
        <source src={backgroundMusic.data.data.full_url} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
);

BackgroundMusic.propTypes = {
    backgroundMusic: PropTypes.object.isRequired,
};

export default BackgroundMusic;