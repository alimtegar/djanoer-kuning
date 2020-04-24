import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
    <section className="pb-6">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-lg-7">
                    <div className="text-center">
                        <div>
                            <img src="/assets/images/floral-4.png" width="202" className="mb-4" />
                        </div>
                        <div className="small text-muted text-center mb-min-3" dangerouslySetInnerHTML={{ __html: quote }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
};

export default Quote;