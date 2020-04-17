import PropTypes from 'prop-types';

// Import Components
import DesignsItem from './DesignsItem';

const Designs = ({ designs }) => (
    <section className="text-center py-6">
        <div className="container">
            <div className="mb-5">
                <h1 className="font-secondary h2 text-gold mb-1">Contoh Desain</h1>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="row">
                {designs.map((design) => (
                    <DesignsItem design={design} key={design.id} />
                ))}
            </div>
        </div>
    </section>
);

Designs.propTypes = {
    designs: PropTypes.array.isRequired,
};

export default Designs;