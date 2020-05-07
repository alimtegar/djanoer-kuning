import Head from 'next/head';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import cx from 'classnames';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../../Bronze1.module.css';

// Import Components
import GalleryItem from './GalleryItem';
import { BottomDivider, TopDivider } from '../../../../components/Dividers';

const Gallery = ({ backgroundImage, images }) => {
    let slider;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
    };

    return (
        <section
            className={cx(styles['gallery'], "position-relative text-center mb-6 py-6 mask-dark-thin")}
            style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
        >
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <TopDivider height={25} />

            <div className="container">
                <div className="mb-4">
                    <h1 className={cx(styles['font-secondary'], "h1 text-white mb-0")}>Galeri</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 px-5">
                        <Fade bottom>
                            <div className="position-relative">
                                {/* Flower Ornaments */}
                                <img src="/assets/images/flower-corner-1.png" alt="Ornamen Floral" className="position-absolute z-1 top-0 right-0 x-25-y-min-25 filter-grayscale" height="100" />
                                <img src="/assets/images/flower-corner-2.png" alt="Ornamen Floral" className="position-absolute z-1 bottom-0 left-0 x-min-25-y-25 filter-grayscale" height="100" />

                                <div className="p-2 border-white border-2">
                                    <Slider ref={(c) => slider = c} {...settings} className={cx(styles["gallery-slider"])}>
                                        {images.map((image) => (<GalleryItem image={image} key={image.id} />))}
                                    </Slider>
                                </div>

                                <div className="slider-arrow position-absolute top-50 left-0 y-min-50 d-none d-lg-flex w-100 px-5">
                                    <button className="btn btn-outline-light circle rounded-right-2 shadow-sm" aria-label="Sebelumnya" onClick={() => slider.slickPrev()}>
                                        <i className="fa fa-chevron-left x-min-1-y-1" />
                                    </button>
                                    <button className="btn btn-outline-light circle ml-auto rounded-left-2 shadow-sm" aria-label="Selanjutnya" onClick={() => slider.slickNext()}>
                                        <i className="fa fa-chevron-right xy-1" />
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <BottomDivider height={25} />
        </section>
    );
};

Gallery.propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
};

export default Gallery;