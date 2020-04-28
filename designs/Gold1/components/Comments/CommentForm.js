import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Import Styles
import styles from '../../Gold1.module.css';

const CommentForm = ({ addComment }) => {
    // Use State
    const [form, setForm] = useState({
        name: '',
        comment: '',
    });

    // Functions
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addComment(form);

        e.target.reset();
    };

    return (
        <form className={cx(styles['comments-form'], "text-center")} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <input type="text" name="name" placeholder="Nama Anda" className="form-control" aria-label="name" onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <textarea name="comment" id="comment" rows="8" placeholder="Ketikkan pesan Anda disini..." className="form-control" aria-label="comment" onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group mb-0">
                <button type="submit" className="btn btn-outline-gold">
                    Kirim Pesan
                </button>
            </div>
        </form>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default CommentForm;