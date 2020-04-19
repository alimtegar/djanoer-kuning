import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

const WhatsAppButton = ({ orderUrl }) => orderUrl ? (
    <Bounce>
        <div className="position-fixed bottom-0 left-0 m-3">
            <a href={orderUrl} className="btn-whatsapp shadow-sm"><i className="fab fa-whatsapp fa-2p5x" /></a>
        </div>
    </Bounce>
) : null;

WhatsAppButton.propTypes = {
    orderUrl: PropTypes.string.isRequired,
};

export default WhatsAppButton;