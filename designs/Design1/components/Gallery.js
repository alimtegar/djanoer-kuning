import Head from 'next/head';
import Slider from "react-slick";
import cx from 'classnames';

// Import Styles
import styles from '../Design1.module.css';

const Gallery = () => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section
            className={cx(styles['gallery'], "text-center py-6 mask-dark")}
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")',
            }}
        >
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <div className="container">
                <div>
                    <h1 className="font-secondary text-white mb-4">Galeri</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="position-relative">
                            <div className="border p-2">
                                <Slider ref={(c) => slider = c} {...settings} className={cx(styles["gallery-slider"])}>
                                    <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
                                        <img src="https://picsum.photos/1200/600?random=1" className="fit-height" />
                                    </div>
                                    <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
                                        <img src="https://picsum.photos/1400/700?random=1" className="fit-height" />
                                    </div>
                                    <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
                                        <img src="https://picsum.photos/800/400?random=1" className="fit-height" />
                                    </div>
                                    <div className={cx(styles['gallery-item'], "d-flex justify-content-center align-items-center overflow-hidden")}>
                                        <img src="https://picsum.photos/900/600?random=1" className="fit-height" />
                                    </div>
                                </Slider>
                            </div>

                            <div className="slider-arrow position-absolute top-50 left-0 y-min-50 d-none d-lg-flex w-100 px-5">
                                <button className="btn btn-outline-light circle rounded-right-2 shadow-sm" onClick={() => slider.slickPrev()}>
                                    <i className="fa fa-chevron-left x-min-1-y-1" />
                                </button>
                                <button className="btn btn-outline-light circle ml-auto rounded-left-2 shadow-sm" onClick={() => slider.slickNext()}>
                                    <i className="fa fa-chevron-right xy-1" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;