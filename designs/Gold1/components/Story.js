import { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../Gold1.module.css';

const Story = ({ story }) => (
    <section className="pb-6">
        <div className="container">
            <div className="text-center mb-5">
                <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-1")}>Perjalanan Kami</h1>
                <h2 className="small text-muted mb-0">Cerita perjalanan kami hingga ke jenjang pernikahan </h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div>
                        <ul className="nav">
                            {Object.entries(story).map((storyItem) => {
                                const storyItemValues = Object.entries(storyItem[1]);
                                const year = storyItem[0];

                                return (
                                    <Fragment>
                                        {storyItemValues.map((storyItemValue) => {
                                            console.log(storyItemValue)

                                            const title = storyItemValue[0];
                                            const content = storyItemValue[1];

                                            return (
                                                <li className={cx(styles['story-item'], "nav-item")} key={storyItem[0]}>
                                                    <Fade bottom>
                                                        <div className="bg-gradient-black text-white my-1 p-3 rounded-xl shadow">
                                                            <h3 className="h6 font-weight-bold">{year} <span className="mx-1">·</span> {title}</h3>
                                                            <p className="small">{content}</p>
                                                        </div>
                                                    </Fade>
                                                </li>
                                            );
                                        })}
                                    </Fragment>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Story.propTypes = {
    story: PropTypes.object.isRequired,
};

export default Story;