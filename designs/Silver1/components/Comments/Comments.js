import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../../Silver1.module.css';

// Import Components
import CommentForm from './CommentForm';

const Comments = ({ invitationId }) => {
    const apiUrl = process.env.API_URL;

    // Use State
    const [comments, setComments] = useState([]);

    // Use Effect
    useEffect(() => {
        fetch(apiUrl + 'items/invitation_comments?filter[invitation_id]=' + invitationId)
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
                invitation_id: invitationId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const _comment = data.data;

                const _comments = [
                    ...comments,
                    _comment,
                ];

                setComments(_comments);
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="py-6">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="h2 font-secondary text-gold mb-1">Pesan Anda</h1>
                    <h2 className="small text-muted mb-0">Tinggalkan pesan untuk pasangan pengantin</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="">
                            <ul className={cx(styles['comments-list'], "nav flex-column mt-min-3 pb-3")}>
                                {comments && comments.map((comment) => (
                                    <li className="nav-item" key={comment.id}>
                                        <div className="py-4 px-2">
                                            <h3 className="h6">{comment.name}</h3>
                                            {/* {comment.created_on} */}
                                            <p className="small text-muted mb-0">{comment.comment}</p>
                                        </div>
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
    invitationId: PropTypes.number.isRequired,
};

export default Comments;