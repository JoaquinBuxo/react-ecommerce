import CartWidget from './CartWidget';

const NavBar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <a className="navbar-brand" href="#">Adventure</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Sneakers<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Backpacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <CartWidget />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;