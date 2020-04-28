import PropTypes from 'prop-types';

// Top Divider
export const TopDivider = ({ height, space }) => {
    const style = space ? { height: height * 0.75, } : null;

    return (
        <div style={style}>
            <img src="/assets/images/top-divider.svg" height={height} alt="Top Divider" className="top-divider" />
        </div>
    );
};

TopDivider.defaultProps = {
    height: 25,
    space: true,
}

TopDivider.propTypes = {
    height: PropTypes.number,
    space: PropTypes.bool,
};

// Bottom Divider
export const BottomDivider = ({ height, space }) => {
    const style = space ? { height: height * 0.75, } : null;

    return (
        <div style={style}>
            <img src="/assets/images/bottom-divider.svg" height={height} alt="Bottom Divider" className="bottom-divider" />
        </div>
    );
};

BottomDivider.defaultProps = {
    height: 25,
    space: true,
}

BottomDivider.propTypes = {
    height: PropTypes.number,
    space: PropTypes.bool,
};