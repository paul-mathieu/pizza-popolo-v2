import React from "react";

const addDrink = () => {
    return (
        <main className="page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading" style={{height: '86px', padding: '47px'}}>
              <h2 className="text-info">Ajouter un Drink</h2>
            </div>
            <form>
              <div className="form-group"><label>Nom</label><input className="form-control" type="text" /></div>
              <div className="form-group"><label>Description</label><textarea className="form-control" defaultValue={""} /></div>
              <div className="form-group"><label>Prix</label><input className="form-control" type="number" /></div>
              <div className="form-group"><label>Allergènes</label><input className="form-control" type="email" /></div>
              <div className="form-group"><label><input type="checkbox" />&nbsp;Bio&nbsp;</label></div>
              <div className="form-group"><label><input type="checkbox" />&nbsp;Vegan&nbsp;</label></div>
              <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Send</button></div>
            </form>
          </div>
        </section>
      </main>
    );
};

export default addDrink;