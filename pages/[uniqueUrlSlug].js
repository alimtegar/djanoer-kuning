import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Import Helpers
import { isObjectEmpty } from '../helpers';

const Invitation = () => {
    const apiUrl = process.env.API_URL;

    // Use Router
    const router = useRouter();
    const { uniqueUrlSlug } = router.query;

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

                            setDesign(_design)

                            console.log(_invitation.design);

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
                                // case 'Design3':
                                //     import('../designs/Design3')
                                //         .then((Design3) => {
                                //             setDesignModule(Design3);
                                //         })
                                //         .catch((err) => console.log(err));
                            }
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        }
    }, [uniqueUrlSlug]);

    return (
        <div>
            {
                (
                    DesignModule &&
                    !isObjectEmpty(invitation) &&
                    !isObjectEmpty(backgroundImage) &&
                    !isObjectEmpty(backgroundMusic) &&
                    images &&
                    videos
                )
                    ?
                    (
                        <DesignModule.default
                            invitation={invitation}
                            backgroundImage={backgroundImage}
                            backgroundMusic={backgroundMusic}
                            images={images}
                            videos={videos}
                        />
                    )
                    :
                    "Loading..."
            }
        </div>
    );
};

export default Invitation;