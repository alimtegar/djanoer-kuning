import { useRouter } from 'next/router';

const Invitation = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            ini invitation : {id}
        </div>
    );
};

export default Invitation;