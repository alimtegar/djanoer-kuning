import { Fragment, useRouter } from 'next/router';

// Import Designs
import Design1 from '../designs/Design1';

const Invitation = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Design1 />
        </div>
    );
};

export default Invitation;