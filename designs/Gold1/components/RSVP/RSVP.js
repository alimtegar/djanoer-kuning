import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';

// Import Styles
import styles from '../../Gold1.module.css';

// Import Components
import RSVPForm from './RSVPForm';

// Import Helpers
import {isObjectEmpty} from '../../../../helpers';

const MyRSVP = ({ id }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [RSVP, setRSVP] = useState({
        attendees: [],
    });

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'items/invitation_rsvp?filter[invitation]=' + id)
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length) {
                    setRSVP(data.data[0]);
                }
            })
            .catch((err) => console.log(err));
    }, [])

    // Functions
    const addRSVP = (attendees) => {
        const newAttendees = {
            [attendees.name]: attendees.status,
        };

        fetch(apiUrl + 'items/invitation_rsvp', {
            method: 'POST',
            body: JSON.stringify({
                invitation: id,
                attendees: newAttendees,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!isObjectEmpty(data.data)) {
                    setRSVP(data.data);

                    toast.success('Sukses mengkonfirmasi kehadiran!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                } else if (!isObjectEmpty(data.error)) {
                    toast.error(data.error.message, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                } else {
                    toast.error('Error!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    const updateRSVP = (attendees) => {
        const newAttendees = {
            ...RSVP.attendees,
            [attendees.name]: attendees.status,
        };

        fetch(apiUrl + 'items/invitation_rsvp/' + RSVP.id, {
            method: 'PATCH',
            body: JSON.stringify({
                ...RSVP,
                attendees: newAttendees,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!isObjectEmpty(data.data)) {
                    setRSVP(data.data);

                    toast.success('Sukses mengkonfirmasi kehadiran!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                } else if (!isObjectEmpty(data.error)) {
                    toast.error(data.error.message, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                } else {
                    toast.error('Error!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="pb-6">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-1")}>Daftar Hadir</h1>
                    {/* <h2 className="small text-muted mb-0">Tinggalkan pesan untuk pasangan pengantin</h2> */}
                </div>
                <div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <RSVPForm
                                RSVP={RSVP}
                                addRSVP={addRSVP}
                                updateRSVP={updateRSVP}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

MyRSVP.propTypes = {
    id: PropTypes.number.isRequired,
};

export default MyRSVP;