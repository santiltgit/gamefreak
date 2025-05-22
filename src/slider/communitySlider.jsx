    import React, { useState, useEffect } from 'react';

    function CommunitySlider() {
    const recommendations = [
        {
        title: "Apex Legends",
        image: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
        comment: "Mi amigo, con el que juego a Apex Legends dijo que si publico una reseña sobre el juego y obtiene 100 'Me Gusta' y 20 Premios, me comprará una caja de cerveza y un whisky. Así que dejaré esto aquí...",
        author: "XXGAMERXX", 
        timeAgo: "1.9 h de juego en el momento de la reseña",
        helpfulCount: "A 6 personas les pareció útil esta reseña",
        tags: ["Free to Play", "Battle Royale", "Shooter"],
        price: "Gratis"
        },
        // Puedes agregar más recomendaciones aquí
    ];

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
        interval = setInterval(() => {
            setCurrent((current + 1) % recommendations.length);
        }, 5000);
        }
        return () => clearInterval(interval);
    }, [current, isPaused]);

    return (
        <div className="community-slider-container">
        <div className="community-header">
            <h2>LA COMUNIDAD RECOMIENDA</h2>
            <span>ESTOS JUEGOS HOY</span>
            <button className="explore-button">PERSONALIZAR, EXPLORAR POR ETIQUETA Y MUCHO MÁS</button>
        </div>
        <div 
            className="community-slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {recommendations.map((rec, index) => (
            <div key={index} className="community-slide">
                <div className="community-slide-content">
                <img src={rec.image} alt={rec.title} />
                <div className="community-review">
                    <p className="review-text">{rec.comment}</p>
                    <div className="review-meta">
                    <span className="author">{rec.author}</span>
                    <span className="time">{rec.timeAgo}</span>
                    <span className="helpful">{rec.helpfulCount}</span>
                    </div>
                    <div className="game-tags">
                    {rec.tags.map((tag, idx) => (
                        <span key={idx} className="game-tag">{tag}</span>
                    ))}
                    </div>
                    <span className="price-tag">{rec.price}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="community-slider-dots">
            {recommendations.map((_, idx) => (
            <button
                key={idx}
                className={`community-dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
            />
            ))}
        </div>
        </div>
    );
    }

    export default CommunitySlider;