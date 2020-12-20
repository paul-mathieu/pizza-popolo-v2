import React from "react";

const registration = () => {
    return (
        <main className="page registration-page">
            <section className="clean-block clean-form dark" style={{paddingBottom: '50px'}}>
            <div className="container">
                <form>
                <div className="form-group"><label htmlFor="name">Nom</label><input className="form-control item" type="text" id="name" /></div>
                <div className="form-group"><label htmlFor="password">Mot de Passe</label><input className="form-control item" type="password" id="password" /></div>
                <div className="form-group"><label htmlFor="email">Email</label><input className="form-control item" type="email" id="email" /></div><button className="btn btn-primary btn-block" type="submit">Sign Up</button></form>
            </div>
            </section>
        </main>
    );
};

export default registration;