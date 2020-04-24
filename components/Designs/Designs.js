import PropTypes from 'prop-types';

// Import Components
import DesignsItem from './DesignsItem';
import DesignsItemLoader from './DesignsItemLoader';
import { range } from '../../helpers';

const Designs = ({ designs }) => (
    <section className="text-center py-6">
        <div className="container">
            <div className="mb-5">
                <h1 className="font-secondary h2 text-gold mb-1">Contoh Desain</h1>
                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="row">
                {designs.length ? designs.map((design) => (
                    <DesignsItem design={design} key={design.id} />
                )) : range(0,3).map(() => (
                    <DesignsItemLoader key={Math.random()} />
                ))}
            </div>
        </div>
    </section>
);

Designs.propTypes = {
    designs: PropTypes.array.isRequired,
};

export default Designs;