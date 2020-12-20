import React from "react";

const Login = () => {
    return (
        <main className="page login-page">
        <section className="clean-block clean-form dark" style={{paddingBottom: '50px'}}>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control item" type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input className="form-control" type="password" id="password" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="checkbox" />
                  <label className="form-check-label" htmlFor="checkbox">Se souvenir de moi</label>
                </div>
              </div>
              <button className="btn btn-primary btn-block" type="submit">Se connecter</button>
            </form>
          </div>
        </section>
      </main>

    );
};

export default Login;