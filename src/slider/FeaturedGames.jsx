import React, { useState } from 'react';

function FeaturedGames() {
const [showAlert, setShowAlert] = useState(false);
const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
};

const games = [
    {
    title: "JDM: Japanese Drift Master",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000",
    tags: ["Carreras", "Simulación", "Mundo abierto"],
    price: "COL$ 110.499,00",
    discount: "-15%",
    finalPrice: "COL$ 58.800,00",
    releaseDate: "21 MAY 2025"
    },
    {
    title: "Monster Train 2",
    image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=1470",
    tags: ["Estrategia", "Juegos de cartas", "Roguelike"],
    price: "COL$ 139.900,00", 
    releaseDate: "20 MAY 2025"
    },
    {
    title: "Capcom Fighting Collection 2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    tags: ["Acción", "Arcade", "Luchador en 2D"],
    price: "COL$ 139.900,00",
    releaseDate: "15 MAY 2025"
    }
];

return (
    <div className="featured-games-container">
    {showAlert && (
        <div className="cart-alert" style={{position: 'fixed', top: 30, left: '50%', transform: 'translateX(-50%)', background: '#222', color: '#fff', padding: '16px 32px', borderRadius: 8, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>Producto agregado al carrito</div>
    )}
    <div className="featured-games-header">
        <nav className="featured-nav">
        <a href="#novedades" className="active">Novedades y tendencias</a>
        <a href="#vendido">Lo más vendido</a>
        <a href="#proximos">Próximos lanzamientos populares</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#gratuitos">Gratuitos populares</a>
        </nav>
    </div>
    <div className="games-list">
        {games.map((game, index) => (
        <div key={index} className="game-item">
            <img src={game.image} alt={game.title} />
            <div className="game-info">
            <h3>{game.title}</h3>
            <div className="tags">
                {game.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
                ))}
            </div>
            <div className="price-info">
                {game.discount && (
                <span className="discount">{game.discount}</span>
                )}
                <div className="prices">
                {game.discount && <span className="original-price">{game.price}</span>}
                <span className="final-price">{game.discount ? game.finalPrice : game.price}</span>
                </div>
            </div>
            <span className="release-date">{game.releaseDate}</span>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Añadir al carrito</button>
            <button className="buy-now">Comprar ahora</button>
        </div>
        ))}
    </div>
    </div>
);
}

export default FeaturedGames;