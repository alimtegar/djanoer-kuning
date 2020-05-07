import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toast } from 'react-toastify';

// Import Styles
import styles from '../../Gold1.module.css';

const RSVPForm = ({ RSVP, addRSVP, updateRSVP }) => {
    // Use State
    const [form, setForm] = useState({
        name: '',
        status: '',
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

        if (form.name && form.status) {
            if (Object.entries(RSVP.attendees).length) {
                updateRSVP(form);
            } else {
                addRSVP(form);
            }
        } else {
            toast.error('Mohon isi semua kolom!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }

        setForm({
            name: '',
            status: '',
        });
    };

    return (
        <form className={cx(styles['form'], "text-center")} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <input type="text" name="name" placeholder="Nama Anda" className="form-control" aria-label="name" value={form.name} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline mx-2">
                    <input className="form-check-input" type="radio" name="status" id="status-1" value="1" checked={form.status == '1'} onChange={(e) => handleChange(e)} />
                    <label className="form-check-label" htmlFor="status-1">Hadir</label>
                </div>
                <div className="form-check form-check-inline mx-2">
                    <input className="form-check-input" type="radio" name="status" id="status-0" value="0" checked={form.status == '0'} onChange={(e) => handleChange(e)} />
                    <label className="form-check-label" htmlFor="status-0">Tidak Hadir</label>
                </div>
            </div>
            <div className="form-group mb-0">
                <button type="submit" className="btn btn-outline-gold">Konfirmasi</button>
            </div>
        </form>
    );
};

RSVPForm.propTypes = {
    RSVP: PropTypes.object.isRequired,
    addRSVP: PropTypes.func.isRequired,
    updateRSVP: PropTypes.func.isRequired,
};

export default RSVPForm;