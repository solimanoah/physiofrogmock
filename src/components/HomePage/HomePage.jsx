import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-sections">
                <div className="first-section">
                    <img src="/assets/frame1.png"/>
                </div>
                <div className="middle-section">
                    <h1>WELCOME TO PHYSIOFROG!</h1>
                    <img src="/assets/logo.png" alt="Logo" />
                    <button onClick={() => navigate('/muscle')} className="start-button">START</button>
                </div>
                <div className="third-section">
                    <img src="/assets/frame2.png"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;