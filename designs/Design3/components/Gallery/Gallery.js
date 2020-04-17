import Head from 'next/head';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import cx from 'classnames';

// Import Styles
import styles from '../../Design3.module.css';

// Import Components
import GalleryItem from './GalleryItem';

const Gallery = ({ backgroundImage, images, videos }) => {
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
            style={{ backgroundImage: 'url(' + backgroundImage.data.data.full_url + ')', }}
        >
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <div className="container">
                <div className="mb-4">
                    <h1 className="h2 font-secondary text-white mb-0">Galeri</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="position-relative">
                            <div className="p-2 border-2 rounded-xl overflow-hidden">
                                <Slider ref={(c) => slider = c} {...settings} className={cx(styles["gallery-slider"])}>
                                    {images.map((image) => (<GalleryItem image={image} key={image.id} />))}
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

Gallery.propTypes = {
    backgroundImage: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
    videos: PropTypes.array.isRequired,
};

export default Gallery;