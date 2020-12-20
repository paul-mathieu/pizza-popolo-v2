function render(){
    const header =
        <div className="container">
            <a className="navbar-brand logo" href="../">Pizza del Popolo</a>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation"></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="../public-catalog">Nos pizzas</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="../public-shopping-cart">Votre Panier</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="../public-login">Se Connecter</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="../public-registration">Créer un compte</a></li>
                </ul>
            </div>
        </div>

    ReactDOM.render(header, document.getElementById('navbar-element'))
}

render()