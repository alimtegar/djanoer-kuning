import Head from 'next/head';

const MyHead = () => {
    const appName = process.env.APP_NAME;
    const appTagline = process.env.APP_TAGLINE;
    const appDescription = process.env.APP_DESCRIPTION;

    return (
        <Head>
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
            <meta name='description' content={appDescription} />
            <meta name='keywords' content='Keywords' />
            <title>{appName} | {appTagline}</title>

            {/* <link rel="manifest" href="/manifest.json" /> */}
            {/* <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' /> */}
            {/* <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}
            {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
            {/* <meta name="theme-color" content="#317EFB" /> */}
        </Head>
    );
};

export default MyHead;