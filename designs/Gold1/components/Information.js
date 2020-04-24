import PropTypes from 'prop-types';
import cx from 'classnames';
import Fade from 'react-reveal//Fade';

// Import Styles
import styles from '../Gold1.module.css';

// Import Components
import Photo from './Photo';

const Information = ({
    backgroundImage,
    wording,
    groomPhoto,
    bridePhoto,
    groomNickname,
    brideNickname,
    groomName,
    brideName,
    groomFatherName,
    brideFatherName,
    groomMotherName,
    brideMotherName,
    weddingDate,
    contractStartTime,
    receptionStartTime,
    contractEndTime,
    receptionEndTime,
    contractAddress,
    receptionAddress,
}) => (
        <div className="pb-5">
            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-lg-7">
                            <div className="small text-muted text-center mb-5" dangerouslySetInnerHTML={{ __html: wording.content_1 }} />
                        </div>
                    </div>

                    <div className={cx(styles['information-content'], 'my-min-2 my-lg-0')}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-4 px-5 px-lg-1 py-1">
                                <Fade bottom>
                                    <div 
                                        className={cx(styles['information-item'], "position-relative mask-dark rounded-xl")}
                                        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
                                    >
                                        {/* Flower Ornaments */}
                                        <img src="/assets/images/flower-corner-3.png" alt="Ornamen Floral" className="position-absolute z-1 top-0 left-0 x-min-25-y-min-25" height="100" />

                                        <div className=" text-white text-center py-5 py-lg-5 px-5 rounded-xl">
                                            <Photo photo={groomPhoto} name={groomName} />

                                            <h1 className={cx(styles['font-secondary'], "h1 mb-0")}>{groomNickname}</h1>
                                            <h2 className="h6 mb-4">{groomName}</h2>
                                            <p className="small mb-0 px-2">Putra Pertama dari {groomFatherName} dan {groomMotherName}.</p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-12 col-lg-0 px-0 position-relative">
                                <Fade bottom>
                                    <div className="d-flex justify-content-center">
                                        <div className="position-absolute z-1 top-50 y-min-50 bg-gradient-black circle circle-md shadow">
                                            <img src="/assets/images/heart.svg" alt="" height="35" className="y-2" />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-4 z-min-1 px-5 px-lg-1 py-1">
                                <Fade bottom>
                                    <div 
                                        className={cx(styles['information-item'], "position-relative mask-dark rounded-xl")}
                                        style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
                                    >
                                        {/* Flower Ornaments */}
                                        <img src="/assets/images/flower-corner-4.png" alt="Ornamen Floral" className="position-absolute z-1 bottom-0 right-0 x-25-y-25" height="100" />

                                        <div className=" text-white text-center py-5 py-lg-5 px-5 rounded-xl">
                                            <Photo photo={bridePhoto} name={brideName} />

                                            <h1 className={cx(styles['font-secondary'], "h1 mb-0")}>{brideNickname}</h1>
                                            <h2 className="h6 mb-4">{brideName}</h2>
                                            <p className="small mb-0 px-2">Putra Pertama dari {brideFatherName} dan {brideMotherName}.</p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-lg-7">
                            <div className="small text-muted text-center mb-5" dangerouslySetInnerHTML={{ __html: wording.content_2 }} />
                        </div>
                    </div>
                    <div className={cx(styles['information-content'], 'my-min-2 my-lg-0')}>
                        <div className="row justify-content-center align-items-center">
                            {contractStartTime && contractEndTime && contractAddress ? (
                                <div className="col-lg-4 px-5 px-lg-1 py-1">
                                    <Fade bottom>
                                        <div 
                                            className={cx(styles['information-item'], "position-relative mask-dark rounded-xl")}
                                            style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
                                        >
                                            {/* Flower Ornaments */}
                                            <img src="/assets/images/flower-corner-3.png" alt="Ornamen Floral" className="position-absolute z-1 top-0 left-0 x-min-25-y-min-25" height="100" />

                                            <div className=" text-white text-center py-5 py-lg-5 px-5 rounded-xl">
                                                <h1 className={cx(styles['font-secondary'], "h1 mb-4")}>Akad</h1>
                                                <h2 className="h6 mb-1">Waktu</h2>
                                                <p className="small">
                                                    {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} pukul <br /> {contractStartTime} s/d {contractEndTime} WIB
                                        </p>
                                                <h2 className="h6 mb-1">Alamat</h2>
                                                <p className="small mb-2">{contractAddress}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ) : null}
                            {(contractStartTime && contractEndTime && contractAddress) && (receptionStartTime && receptionEndTime && receptionAddress) ? (
                                <div className="col-12 col-lg-0 px-0 position-relative">
                                    <Fade bottom>
                                        <div className="d-flex justify-content-center">
                                            <div className="position-absolute top-50 y-min-50 bg-gradient-black circle circle-md shadow">
                                                <img src="/assets/images/wedding-day.svg" alt="" width="35" className="y-min-1" />
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ) : null}
                            {receptionStartTime && receptionEndTime && receptionAddress ? (
                                <div className="col-lg-4 z-min-1 px-5 px-lg-1 py-1">
                                    <Fade bottom>
                                        <div 
                                            className={cx(styles['information-item'], "position-relative mask-dark rounded-xl")}
                                            style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
                                        >
                                            {/* Flower Ornaments */}
                                            <img src="/assets/images/flower-corner-4.png" alt="Ornamen Floral" className="position-absolute z-1 bottom-0 right-0 x-25-y-25" height="100" />

                                            <div className=" text-white text-center py-5 py-lg-5 px-5 rounded-xl">
                                                <h1 className={cx(styles['font-secondary'], "h1 mb-4")}>Resepsi</h1>

                                                <h2 className="h6 mb-1">Waktu</h2>
                                                <p className="small">
                                                    {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} pukul <br /> {receptionStartTime} s/d {receptionEndTime} WIB
                                        </p>
                                                <h2 className="h6 mb-1">Alamat</h2>
                                                <p className="small mb-2">{receptionAddress}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

Information.propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    wording: PropTypes.object.isRequired,
    groomNickname: PropTypes.string.isRequired,
    brideNickname: PropTypes.string.isRequired,
    groomName: PropTypes.string.isRequired,
    brideName: PropTypes.string.isRequired,
    groomFatherName: PropTypes.string.isRequired,
    brideFatherName: PropTypes.string.isRequired,
    groomMotherName: PropTypes.string.isRequired,
    brideMotherName: PropTypes.string.isRequired,
    weddingDate: PropTypes.string.isRequired,
    contractStartTime: PropTypes.string.isRequired,
    receptionStartTime: PropTypes.string.isRequired,
    contractEndTime: PropTypes.string.isRequired,
    receptionEndTime: PropTypes.string.isRequired,
    contractAddress: PropTypes.string.isRequired,
    receptionAddress: PropTypes.string.isRequired,
};



export default Information;