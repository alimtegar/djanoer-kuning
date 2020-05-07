import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';

// Import Styles
import styles from '../../Gold1.module.css';

// Import Components
import CommentForm from './CommentForm';

// Import Helpers
import {isObjectEmpty} from '../../../../helpers';

const Comments = ({ id }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [comments, setComments] = useState([]);

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'items/invitation_comments?filter[invitation]=' + id)
            .then((res) => res.json())
            .then((data) => {
                setComments(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Functions
    const addComment = (comment) => {
        fetch(apiUrl + 'items/invitation_comments', {
            method: 'POST',
            body: JSON.stringify({
                ...comment,
                invitation: id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!isObjectEmpty(data.data)) {
                    const _comment = data.data;

                    const _comments = [
                        ...comments,
                        _comment,
                    ];

                    setComments(_comments);

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
                <div className="text-center mb-5">
                    <h1 className={cx(styles['font-secondary'], "h1 text-gold mb-1")}>Pesan Anda</h1>
                    <h2 className="small text-muted mb-0">Tinggalkan pesan untuk pasangan pengantin</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div>
                            <ul className={cx(styles['comments-list'], "nav flex-column my-min-1 pb-3")}>
                                {comments && comments.map((comment) => (
                                    <li className="nav-item" key={comment.id}>
                                        <Fade bottom>
                                            <div className="bg-gradient-black text-white my-1 p-3 rounded-xl shadow">
                                                <h3 className="h6">{comment.name}</h3>
                                                {/* {comment.created_on} */}
                                                <p className="small mb-0">{comment.comment}</p>
                                            </div>
                                        </Fade>
                                    </li>
                                ))}
                            </ul>
                            <CommentForm addComment={addComment} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Comments.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Comments;