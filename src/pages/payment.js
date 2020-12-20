import React from "react";

const payment = () => {
    return (
        <main className="page payment-page">
        <section className="clean-block payment-form dark" style={{paddingBottom: '50px'}}>
          <div className="container">
            <form>
              <div className="products">
                <h3 className="title">Vérification</h3>
                <div className="item"><span className="price">$200</span>
                  <p className="item-name">Product 1</p>
                  <p className="item-description">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="item"><span className="price">$120</span>
                  <p className="item-name">Product 2</p>
                  <p className="item-description">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="total"><span>Total</span><span className="price">$320</span></div>
              </div>
              <div className="card-details">
                <h3 className="title">Payement bancaire</h3>
                <div className="form-row">
                  <div className="col-sm-7">
                    <div className="form-group"><label htmlFor="card-holder">Propriétaire</label><input className="form-control" type="text" placeholder="Propriétaire de la carte" /></div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group"><label>Date d'Expiration</label>
                      <div className="input-group expiration-date"><input className="form-control" type="text" placeholder="MM" /><input className="form-control" type="text" placeholder="AAAA" /></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group"><label htmlFor="card-number">Numéro de carte</label><input className="form-control" type="text" id="card-number" placeholder="Numéro de carte" /></div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group"><label htmlFor="cvc">CVC</label><input className="form-control" type="text" id="cvc" placeholder="CVC" /></div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Procéder au payement</button></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
};

export default payment;