import PropTypes from 'prop-types';

// Import Components
import BackgroundMusic from './components/BackgroundMusic';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Information from './components/Information';
import Map from './components/Map';
import Gallery from './components/Gallery';
import Comments from './components/Comments';
import Footer from './components/Footer';

const Design3 = ({ invitation, backgroundImage, backgroundMusic, images, videos }) => (
    <div>
        <BackgroundMusic backgroundMusic={backgroundMusic} />
        <Hero
            backgroundImage={backgroundImage}
            groomNickname={invitation.groom_nickname}
            brideNickname={invitation.bride_nickname}
            weddingDate={invitation.wedding_date}
        />
        <Countdown weddingDate={invitation.wedding_date} />
        <Information
            groomNickname={invitation.groom_nickname}
            brideNickname={invitation.bride_nickname}
            groomName={invitation.groom_name}
            brideName={invitation.bride_name}
            groomFatherName={invitation.groom_father_name}
            brideFatherName={invitation.bride_father_name}
            groomMotherName={invitation.groom_mother_name}
            brideMotherName={invitation.bride_mother_name}
            weddingDate={invitation.wedding_date}
            contractStartTime={invitation.contract_start_time}
            receptionStartTime={invitation.reception_start_time}
            contractEndTime={invitation.contract_end_time}
            receptionEndTime={invitation.reception_end_time}
            contractAddress={invitation.contract_address}
            receptionAddress={invitation.reception_address}
        />
        <Map embedMap={invitation.embed_map} />
        <Gallery 
            backgroundImage={backgroundImage} 
            images={images}
            videos={videos}
        />
        <Comments invitationId={invitation.id} />
        <Footer backgroundImage={backgroundImage} />
    </div>
);

Design3.propTypes = {
    invitation: PropTypes.object.isRequired,
    backgroundImage: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
    videos: PropTypes.array.isRequired,
};

export default Design3;