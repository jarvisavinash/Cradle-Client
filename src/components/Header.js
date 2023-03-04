import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";


function Header() {

  const {
    totalItems
} = useCart();

  const Logout = (event) => {
    localStorage.clear();
    window.location = 'http://localhost:3000/';
  }

  const notify = () => {
    toast.success('Successfully Logged Out', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
  }

    return(
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <a class="navbar-brand mt-2 mt-lg-0"><Link to="/" style={{ color: "black", textDecoration: 'none' }} >
                <i class="fa-solid fa-house fa-lg"></i></Link>
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link"><Link to="/login" style={{ color: "black", textDecoration: 'none'}}> Login </Link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><Link to="/signup" style={{ color: "black", textDecoration: 'none' }} > Sign Up </Link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><Link to="/about" style={{ color: "black", textDecoration: 'none' }} > About </Link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><Link to="/contactus" style={{ color: "black", textDecoration: 'none' }} > Contact Us </Link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><Link to="/products" style={{ color: "black", textDecoration: 'none' }} > Products </Link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link"><Link to="/cart" style={{ color: "black", textDecoration: 'none' }} > Cart </Link></a>
              </li>
            </ul>
    </div>

    <div class="d-flex align-items-center">
        <a class="text-reset me-3">
            <Link to="cart" >
                <div>
                    <i class="fas fa-shopping-cart fa-xl position-relative">
                        <span class="position-top translate-middle badge rounded-pill bg-danger" style={{ "font-size": "10px" }} >
                            {totalItems}
                        </span>
                    </i>
                </div>
            </Link>
        </a>
    </div>

    &nbsp;&nbsp;&nbsp;

    <div class="d-flex align-items-center">
        <a class="link-secondary fa-xl me-3" onClick={() => { Logout(); notify();}} ><i class="icon-download"></i> <i class="fa-solid fa-right-from-bracket fa-lg"></i> </a>
    </div>

  </div>
</nav>
    );
}

export default Header;


