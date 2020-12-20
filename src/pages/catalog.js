import React from "react";
import CatalogElement from "../components/catalog-element"

const catalog = (pizzas, extras) => {

  console.log('extras: ')
  console.log(extras)

  return (
      <main className="page product-page">
      <section className="clean-block clean-product dark">
        <div className="container">
          <div className="block-content">
            <div className="product-info">
              <div className="row">
                {/* {console.log(pizzas)} */}
                {pizzas.pizzas.map((value, index) => 
                  <CatalogElement key={index} pizza={value} extras={extras}/>
                )}

                {/* <div className="col-md-6">
                  <div className="info">
                    <h3>Nom pizza</h3>
                    <div className="rating" />
                    <div className="price">
                      <h3>$300.00</h3>
                    </div>
                    <form>
                      <div className="form-group">
                        <label>
                          <input type="checkbox" />
                          &nbsp;[Extra 2 : description]
                        </label>
                      </div>
                      <div className="form-group"><button className="btn btn-primary btn-block" type="submit"><i className="icon-basket" />Ajouter au panier</button></div>
                    </form>
                    <div className="summary">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Vestibulum diam risus, sagittis at fringilla at, pulvinar vel risus. Vestibulum dignissim
                        eu nulla eu imperdiet. Morbi mollis tellus a nunc vestibulum consequat. Quisque tristique elit et nibh dapibus sodales. Nam sollicitudin a urna sed iaculis.</p>
                    </div>
                  </div>
                  <label><input type="checkbox" defaultChecked disabled />&nbsp;Vegan&nbsp;</label>
                  <label><input type="checkbox" defaultChecked disabled />&nbsp;Bio&nbsp;</label>
                  <label>| Allergènes :&nbsp;</label>
                  <div className="summary" />
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default catalog;