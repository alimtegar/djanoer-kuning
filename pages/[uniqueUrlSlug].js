import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { ToastContainer, Slide } from 'react-toastify';

// Import Helpers
import { isObjectEmpty } from '../helpers';

// Import Components
import Head from '../components/Head';
import InvitationLoader from '../components/InvitationLoader';

const Invitation = () => {
    const apiUrl = process.env.API_URL;

    // Use Router
    const router = useRouter();
    const { uniqueUrlSlug, is_auto_open } = router.query;

    // Use State
    const [invitation, setInvitation] = useState({});
    const [design, setDesign] = useState({});
    const [DesignModule, setDesignModule] = useState(() => { });
    const [backgroundImage, setBackgroundImage] = useState({});
    const [backgroundMusic, setBackgroundMusic] = useState({});
    const [wording, setWording] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (
            uniqueUrlSlug &&
            isObjectEmpty(invitation) &&
            isObjectEmpty(design)
        ) {
            // Fetch Invitation
            fetch(apiUrl + 'items/invitations?filter[status]=published&filter[unique_url_slug]=' + uniqueUrlSlug)
                .then((res) => res.json())
                .then((data) => {
                    const _invitation = data.data[0];

                    setInvitation(_invitation);

                    // Fetch Background Image
                    fetch(apiUrl + 'files/' + _invitation.background_image)
                        .then((res) => res.json())
                        .then((image) => {
                            setBackgroundImage(image);
                        })
                        .catch((err) => console.log(err));

                    // Fetch Background Music
                    fetch(apiUrl + 'files/' + _invitation.background_music)
                        .then((res) => res.json())
                        .then((music) => {
                            setBackgroundMusic(music);
                        })
                        .catch((err) => console.log(err));

                    // Fetch Wording
                    fetch(apiUrl + 'items/invitation_wordings/' + _invitation.religion)
                        .then((res) => res.json())
                        .then((data) => {
                            setWording(data.data);
                        })
                        .catch((err) => console.log(err));

                    // Fetch Images
                    fetch(apiUrl + 'items/invitation_images?filter[invitation_id]=' + _invitation.id)
                        .then((res) => res.json())
                        .then((data) => {
                            setImages(data.data);
                        })
                        .catch((err) => console.log(err));

                    // Fetch Design
                    fetch(apiUrl + 'items/designs/' + _invitation.design)
                        .then((res) => res.json())
                        .then((data) => {
                            const _design = data.data;

                            setDesign(_design);

                            // Import Design
                            switch (_design.unique_name) {
                                case 'Bronze1':
                                    import('../designs/Bronze1')
                                        .then((Bronze1) => {
                                            setDesignModule(Bronze1);
                                        })
                                        .catch((err) => console.log(err));
                                    break;
                                case 'Silver1':
                                    import('../designs/Silver1')
                                        .then((Silver1) => {
                                            setDesignModule(Silver1);
                                        })
                                        .catch((err) => console.log(err));
                                    break;
                                case 'Gold1':
                                    import('../designs/Gold1')
                                        .then((Gold1) => {
                                            setDesignModule(Gold1);
                                        })
                                        .catch((err) => console.log(err));
                                    break;
                            }
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        }
    }, [uniqueUrlSlug]);

    const condition = (
        DesignModule &&
        !isObjectEmpty(invitation) &&
        !isObjectEmpty(backgroundImage) &&
        !isObjectEmpty(backgroundMusic) &&
        !isObjectEmpty(wording) &&
        images.length > 0
    );

    return (
        <Fragment>
            <Head />
            <InvitationLoader condition={condition ? condition : false} isAutoOpen={is_auto_open ? !!is_auto_open : false} />

            {condition && (
                <Fragment>
                    <Head
                        title={invitation.groom_nickname + ' & ' + invitation.bride_nickname}
                        subTitle={process.env.APP_NAME}
                    />
                    <DesignModule.default
                        invitation={invitation}
                        backgroundImage={backgroundImage}
                        backgroundMusic={backgroundMusic}
                        wording={wording}
                        images={images}
                    />
                </Fragment>
            )}

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={false}
                className="text-center"
                transition={Slide}
            />
        </Fragment>
    );
};

export default Invitation;