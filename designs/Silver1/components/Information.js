import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../Silver1.module.css';

const Information = ({
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
        <div className="py-5">
            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-7">
                            <p className="small text-muted text-center mb-5"> Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami</p>
                        </div>
                    </div>
                    <div className={cx(styles['information-content'], 'my-min-3-1 my-lg-0')}>
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="text-center py-5 py-lg-3 px-5">
                                    <h1 className="h2 font-secondary text-gold mb-0">{groomNickname}</h1>
                                    <h2 className="h6 mb-4">{groomName}</h2>
                                    <p className="small text-muted mb-2">Putra Pertama dari {groomFatherName} dan {groomMotherName}.</p>
                                </div>
                            </div>
                            <div className="col-lg-1 position-relative">
                                <div className="bg-dark position-absolute z-1 top-50 left-50 x-min-50-y-min-50 circle circle-md border-2 border-dark">
                                    <img src="/assets/images/heart.svg" alt="" height="35" className="y-2" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center py-5 py-lg-3 px-5">
                                    <h1 className="h2 font-secondary text-gold mb-0">{brideNickname}</h1>
                                    <h2 className="h6 mb-4">{brideName}</h2>
                                    <p className="small text-muted mb-2">Putra Pertama dari {brideFatherName} dan {brideMotherName}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-7">
                            <p className="small text-muted text-center mb-5">Untuk melaksanankan syariat agama-Mu, mengikuti sunnah rasul-Mu. Dalam membentuk rumah tangga Sakinah, Mawaddah Wa Rahmah dalam ikatan pernikahan. Yang insya Allah akan diselenggarakan pada:</p>
                        </div>
                    </div>
                    <div className={cx(styles['information-content'], 'my-min-3-1 my-lg-0')}>
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="text-center py-5 py-lg-3 px-5">
                                    <h1 className="h2 font-secondary text-gold mb-4">Akad</h1>
                                    <h2 className="h6 mb-1">Waktu</h2>
                                    <p className="small text-muted">
                                        {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} pukul <br /> {contractStartTime} s/d {contractEndTime} WIB
                                    </p>
                                    <h2 className="h6 mb-1">Alamat</h2>
                                    <p className="small text-muted mb-2">{contractAddress}</p>
                                </div>
                            </div>
                            <div className="col-lg-1 position-relative">
                                <div className="bg-dark position-absolute z-1 top-50 left-50 x-min-50-y-min-50 circle circle-md border-2 border-dark">
                                    <img src="/assets/images/wedding-day.svg" alt="" width="35" className="y-min-1" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center py-5 py-lg-3 px-5">
                                    <h1 className="h2 font-secondary text-gold mb-4">Resepsi</h1>

                                    <h2 className="h6 mb-1">Waktu</h2>
                                    <p className="small text-muted">
                                        {new Date(weddingDate).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} pukul <br /> {receptionStartTime} s/d {receptionEndTime} WIB
                                    </p>
                                    <h2 className="h6 mb-1">Alamat</h2>
                                    <p className="small text-muted mb-2">{receptionAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

Information.propTypes = {
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