import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../../Gold1.module.css';

const GalleryVideoItem = ({ youtubeVideoId }) => {
    return (
        <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
            <iframe width="100%" height="100%" frameBorder="0" src={'https://www.youtube.com/embed/' + youtubeVideoId} style={{ border: 0, transform: 'scale(1.01)', }} />
        </div>);
};

GalleryVideoItem.propTypes = {
    youtubeVideoId: PropTypes.string.isRequired,
};

export default GalleryVideoItem;