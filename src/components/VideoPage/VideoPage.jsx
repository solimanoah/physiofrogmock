import { useParams, useNavigate } from 'react-router-dom';
import './VideoPage.css';

function VideoPage() {
    const { muscle } = useParams();
    const navigate = useNavigate();

    const videos = {
        pectorals: 'https://www.youtube.com/embed/tatrv67rou8?si=YDz2QEOLud2OYzas',
        quadriceps: 'https://www.youtube.com/embed/26hnV630E3Q?si=gQHBlSGsh9Rm_Jwm',
        back: 'https://www.youtube.com/embed/S4JoZx7MNOs?si=nokAlbW_ADzmuM9m',
        hamstrings: 'https://www.youtube.com/embed/T_l0AyZywjU?si=jx7rUvaGroJIlkMy'
    };

    return (
        <div className="video-page">
            <div className="video-container">
              <iframe
                  src={videos[muscle]}
                  title="Exercise Video"
                  allow="autoplay; encrypt-media"
                  allowFullScreen
              ></iframe>
            </div>
            <button className="back-button" onClick={() => navigate('/muscle')}>
                Back
            </button>
        </div>
    );
}

export default VideoPage;