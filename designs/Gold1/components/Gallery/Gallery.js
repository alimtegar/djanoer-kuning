import Head from 'next/head';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import cx from 'classnames';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../../Gold1.module.css';

// Import Components
import GalleryImageItem from './GalleryImageItem';
import GalleryVideoItem from './GalleryVideoItem';
import { BottomDivider, TopDivider } from '../../../../components/Dividers';

const Gallery = ({ backgroundImage, images, youtubeVideoIds }) => {
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

    // const SliderItems = () => {
    //     if ()
    // };

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
                    <div className="col-lg-7">
                        <Fade bottom>
                            <div className="position-relative">
                                <div className="rounded-xl overflow-hidden shadow">
                                    <Slider ref={(c) => slider = c} {...settings} className={cx(styles["gallery-slider"])}>
                                        {images.map((image) => (<GalleryImageItem image={image} key={image.id + Math.random()} />))}
                                        {youtubeVideoIds.map((youtubeVideoId) => (<GalleryVideoItem youtubeVideoId={youtubeVideoId} key={youtubeVideoId.id + Math.random()} />))}
                                    </Slider>
                                </div>

                                <div className="slider-arrow position-absolute top-50 left-0 y-min-50 d-none d-lg-flex w-100 px-5">
                                    <button className="btn btn-mask-dark circle rounded-right-2 shadow" aria-label="Sebelumnya" onClick={() => slider.slickPrev()}>
                                        <i className="fa fa-chevron-left x-min-1-y-1" />
                                    </button>
                                    <button className="btn btn-mask-dark circle ml-auto rounded-left-2 shadow" aria-label="Selanjutnya" onClick={() => slider.slickNext()}>
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
    youtubeVideoIds: PropTypes.array.isRequired,
};

export default Gallery;