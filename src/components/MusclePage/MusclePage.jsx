import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MusclePage.css';

function MusclePage() {
    const [viewBack, setViewBack] = useState(false);
    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const navigate = useNavigate();

    const muscles = [
        {
            id: 1, name: 'Pectorals', x: 80, y: 100, width: 80, height: 70, side: 'front',
            image: '/src/assets/pectorals.jpg', description: 'The pectoral muscles are located on the chest and are responsible for arm movement and pushing motions',
            description2: 'Strains, tears, or tendon ruptures, often caused by heavy lifting or sudden stretching during bench presses or similar exercises.'
         },
        {
            id: 2, name: 'Quadriceps', x: 80, y: 280, width: 100, height: 100, side: 'front',
            image: '/src/assets/quadriceps.jpg', description: 'The quadriceps are a group of muscles located on the front of the thigh. They help in leg extension and walking.',
            description2: 'Strains, contusions, or tendonitis due to overuse, sudden stops, or forceful contractions during running, jumping, or squatting activities.'
         },

        {
            id: 3, name: 'Back', x: 80, y: 120, width: 80, height: 140, side: 'back',
            image: '/src/assets/back.jpg', description: 'The back muscles provide support to the spine and enable movements like pulling and lifting.',
            description2: 'Muscle strains, disc herniation, or lower back pain caused by improper lifting, poor posture, or repetitive movements.'
         },
        {
            id: 4, name: 'Hamstrings', x: 80, y: 300, width: 80, height: 80, side: 'back',
            image: '/src/assets/hamstrings.jpg', description: 'The hamstrings are located on the back of the thigh and are responsible for bending the knee and extending the hip.',
            description2: 'Strains, tears, or tendon injuries, frequently resulting from sprinting, overstretching, or rapid acceleration during sports or physical activity.'
         } 
    ];

    const filteredMuscles = muscles.filter((muscle) => muscle.side === (viewBack ? 'back' : 'front'));

    return (
        <div className="muscle-page">

            {/* BACK BUTTON */}
            <button className="nav-button" onClick={() => navigate('/')}>
                Back
            </button>

            <div className="muscle-left-side">
                {/* TITLE */}
                <h1><i>WHERE IS THE DISCOMFORT?</i></h1>
                
                <div className={`muscle-container ${viewBack ? 'flip' : ''}`}>
                    <div className="muscle-flip-inner">
                        {/* FRONT IMAGE */}
                        <div className="muscle-front">
                            <img src="/assets/muscle-front.jpg" alt="Front"/>
                        </div>

                        {/* BACK IMAGE */}
                        <div className="muscle-back">
                            <img src="/assets/muscle-back.jpg" alt="Back"/>
                        </div>
                    </div>
                    
                    {/* CLICKABLE AREAS FOR MUSCLES */}
                    {filteredMuscles.map((muscle, index) => (
                        <button
                            key={index}
                            style={{
                                position: 'absolute',
                                left: muscle.x,
                                top: muscle.y,
                                width: muscle.width,
                                height: muscle.height,
                                opacity: 0,
                                cursor: 'pointer',
                            }}
                            onClick={() => setSelectedMuscle(muscle.id === selectedMuscle?.id ? null : muscle)} />
                    ))}
                </div>

                {/* TURN BUTTON */}
                <button className="turn-button" onClick={() => setViewBack(!viewBack)}>
                    Turn
                </button>
            </div>

            {/* MUSCLE INFORMATION BOX */}
            {selectedMuscle && (
                <div className="info-box">
                    <h2>{selectedMuscle.name.toUpperCase()}</h2>
                    <div className="info-box-content">
                        <img
                            src={selectedMuscle.image}
                            alt={selectedMuscle.name}
                            className="muscle-image"
                        />
                        <div className="info-box-text">
                          <h3>FUNCTION</h3>
                          <p>{selectedMuscle.description}</p>
                          <h3>INJURY RISKS</h3>
                          <p>{selectedMuscle.description2}</p>
                        </div>
                    </div>
                    <button className="video-button" onClick={() => navigate(`/video/${selectedMuscle.name.toLowerCase()}`)}>
                        Exercise Video
                    </button>
                </div>
            )}
        </div>
    )
}

export default MusclePage;