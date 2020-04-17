import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import BarLoader from "react-spinners/BarLoader";

// Import Helpers
import { isObjectEmpty } from '../helpers';

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
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (
            uniqueUrlSlug &&
            isObjectEmpty(invitation) &&
            isObjectEmpty(design)
        ) {
            console.log('is auto open ', is_auto_open);
            // Fetch Invitation
            fetch(apiUrl + 'items/invitations?filter[unique_url_slug]=' + uniqueUrlSlug)
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

                    // Fetch Images
                    fetch(apiUrl + 'items/invitation_images?filter[invitation_id]=' + _invitation.id)
                        .then((res) => res.json())
                        .then((data) => {
                            setImages(data.data);
                        })
                        .catch((err) => console.log(err));

                    // Fetch Videos
                    fetch(apiUrl + 'items/invitation_videos?filter[invitation_id]=' + _invitation.id)
                        .then((res) => res.json())
                        .then((data) => {
                            setVideos(data.data);
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
                                case 'Design1':
                                    import('../designs/Design1')
                                        .then((Design1) => {
                                            setDesignModule(Design1);
                                        })
                                        .catch((err) => console.log(err));
                                    break;
                                case 'Design2':
                                    import('../designs/Design2')
                                        .then((Design2) => {
                                            setDesignModule(Design2);
                                        })
                                        .catch((err) => console.log(err));
                                    break;
                                case 'Design3':
                                    import('../designs/Design3')
                                        .then((Design3) => {
                                            setDesignModule(Design3);
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
        images &&
        videos
    );

    return (
        <div>
            <InvitationLoader condition={condition} isAutoOpen={is_auto_open} />
            {condition && (
                <DesignModule.default
                    invitation={invitation}
                    backgroundImage={backgroundImage}
                    backgroundMusic={backgroundMusic}
                    images={images}
                    videos={videos}
                />
            )}
        </div>
    );
};

const InvitationLoader = ({ condition, isAutoOpen }) => {
    // Use State
    const [isHide, setIsHide] = useState(false);

    // Functions
    const hide = () => setIsHide(!isHide);

    return !isHide ? (
        <div
            className="hero position-fixed z-99 d-flex justify-content-center align-items-center text-white text-center vh-100 vw-100 mask-gold"
            style={{ backgroundImage: ' url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80)', }}
        >
            <div>
                <div className="pb-4">
                    <h1 className="font-secondary mb-0">Djanoer Kuning</h1>
                    <h2 className="h5 font-weight-bold mb-1">Online Digital Wedding</h2>
                </div>

                <div className="d-flex justify-content-center pt-2">
                    {!condition ? (
                        <BarLoader
                            css={{
                                height: 2,
                            }}
                            size={150}
                            color={"#fff"}
                            loading={true}
                        />
                    ) : (isAutoOpen ? hide() : (
                        <button className="btn btn-outline-light shadow-sm" onClick={() => hide()}>Buka Undangan</button>
                    ))}

                </div>
            </div>
        </div>
    ) : null;
};

export default Invitation;