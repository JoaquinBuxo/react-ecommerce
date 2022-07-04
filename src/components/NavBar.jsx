import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Adventure</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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
                </div>
            </div>
        </nav>  
    )
}

export default NavBar;