import cx from 'classnames';

// Import Styles
import styles from '../Design1.module.css';

const Hero = () => (
    <section 
        className={cx(styles['hero'], "d-flex justify-content-center align-items-center vh-100 vh-lg-75 p-3 mask-dark")}
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")', }}
    >
        <div className="position-relative text-white text-center p-5 p-lg-6">
            <img src="/assets/images/ring.svg" alt="" className="position-absolute top-0 left-50 x-min-50-y-min-50 mt-min-2" height="30"/>
            <div className="position-absolute top-0 left-0 w-100 h-100 border-top" style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 60% 0, 60% 15%, 40% 15%, 40% 0)' }} />
            <div className="position-absolute top-0 left-0 w-100 h-100 border-left border-right border-bottom" />

            <h2 className="h5 mb-1">Undangan Pernikahan</h2>
                <h1 className="font-secondary mb-2">Adam <span className="d-block d-lg-inline h4 mb-0 y-3">&amp;</span> Hawa</h1>
            <h2 className="h5 mb-0">02 Februari 2020</h2>

            {/* <img src="/assets/images/floral-design.svg" alt="" className="my-min-3 rotate-180" height="80"/> */}
        </div>
    </section>
);

export default Hero;