import cx from 'classnames';

// Import Styles
import styles from '../Design1.module.css';

const Information = () => (
    <div className="py-5">
        <section className="py-4">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-lg-7">
                        <p className="small text-muted text-center mb-5"> Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami</p>
                    </div>
                </div>
                <div className={cx(styles['information-content'], 'my-min-3-1 my-lg-0')}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 position-relative">
                            <div className="text-center py-5 py-lg-3 px-5">
                                <h1 className="font-secondary text-gold mb-0">Adam</h1>
                                <h2 className="h6 mb-4">Adam Doe</h2>
                                <p className="small text-muted mb-0">Putra Pertama dari John Doe dan Janie Doe.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center py-5 py-lg-3 px-5">
                                <h1 className="font-secondary text-gold mb-0">Hawa</h1>
                                <h2 className="h6 mb-4">Hawa Roe</h2>
                                <p className="small text-muted mb-0">Putri Pertama dari John Doe dan Janie Doe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-lg-7">
                        <p className="small text-muted text-center mb-5">Untuk melaksanankan syariat agama-Mu, mengikuti sunnah rasul-Mu. Dalam membentuk rumah tangga Sakinah, Mawaddah Wa Rahmah dalam ikatan pernikahan. Yang insya Allah akan diselenggarakan pada:</p>
                    </div>
                </div>
                <div className={cx(styles['information-content'], 'my-min-3-1 my-lg-0')}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5">
                            <div className="text-center py-5 py-lg-3 px-5">
                                <h1 className="font-secondary text-gold mb-4">Akad</h1>
                                <h2 className="h6 mb-1">Waktu</h2>
                                <p className="small text-muted">Minggu. 13 Maret 2020 pukul 08:00 s/d 10:00 WIB</p>
                                <h2 className="h6 mb-1">Alamat</h2>
                                <p className="small text-muted">Gedung Taman Budaya Raden Saleh, Jalan Sriwijaya No.27, Kota Semarang, Jawa Tengah 50242</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-center py-5 py-lg-3 px-5">
                                <h1 className="font-secondary text-gold mb-4">Resepsi</h1>

                                <h2 className="h6 mb-1">Waktu</h2>
                                <p className="small text-muted">Minggu. 13 Maret 2020 pukul 08:00 s/d 10:00 WIB</p>
                                <h2 className="h6 mb-1">Alamat</h2>
                                <p className="small text-muted">Gedung Taman Budaya Raden Saleh, Jalan Sriwijaya No.27, Kota Semarang, Jawa Tengah 50242</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Information;