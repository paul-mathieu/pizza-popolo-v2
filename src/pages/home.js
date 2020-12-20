import React from "react";

const Home = () => {
    return (
        <main className="page landing-page">
            <section className="clean-block clean-hero" style={{backgroundImage: 'url("assets/img/pizza.jpg")', color: 'rgba(255, 210, 9, 0.85)'}}>
            <div className="text">
                <h2><br />PIZZA DEL POPOLO<br />&nbsp;COMMENCE<br />LÀ OÙ LES AUTRES<br />PIZZERIAS S’ARRÊTENT<br /></h2>
                <p>Les meilleures pizzas, cuites au feu de bois</p>
            </div>
            </section>
      </main>
    );
};

export default Home;