import Head from 'next/head';
import PropTypes from 'prop-types';

const MyHead = ({ title, subTitle, description, keywords }) => (
    <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title} | {subTitle}</title>

        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' /> */}
        {/* <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}
        {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
        {/* <meta name="theme-color" content="#317EFB" /> */}
    </Head>
);

MyHead.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
};

MyHead.defaultProps = {
    title: process.env.APP_NAME,
    subTitle: process.env.APP_TAGLINE,
    description: process.env.APP_DESCRIPTION,
    keywords: 'undangan nikah, undangan nikah online, undangan nikah digital, wedding invitation, online wedding invitation, digital wedding invitation'
}

export default MyHead;