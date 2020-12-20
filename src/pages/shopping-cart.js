import React from "react";

const shoppingCart = () => {
    return (
        <main className="page shopping-cart-page">
            <section className="clean-block clean-cart dark">
                <div className="container">
                    <div className="content">
                    <div className="row no-gutters">
                        <div className="col-md-12 col-lg-8">
                        <div className="items">
                            <div className="product">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-5 product-info"><a className="product-name" href="./catalog">Nom pizza</a>
                                <div className="product-specs" style={{height: '0%'}}>
                                    <div><span>Description :&nbsp;</span><span className="value">xxx</span></div>
                                    <div><span>Liste des extras :&nbsp;</span><span className="value">xxx</span></div>
                                </div>
                                </div>
                                <div className="col-6 col-md-2 price"><span>$120</span></div>
                            </div>
                            </div>
                            <div className="product">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-5 product-info"><a className="product-name" href="./catalog">Nom boisson</a>
                                <div className="product-specs" style={{height: '0%'}}>
                                    <div><span>Description :&nbsp;</span><span className="value">xxx</span></div>
                                </div>
                                </div>
                                <div className="col-6 col-md-2 price"><span>$120</span></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="summary">
                                <h3>Facture</h3>
                                <h4>
                                    <span className="text">Total à payer</span>
                                    <span className="price">$360</span>
                                </h4>
                                <button className="btn btn-primary btn-block btn-lg" type="button">Procéder au payement</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default shoppingCart;