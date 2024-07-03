
import Cart from './dropdowncart';
import React from "react";
import Link from 'next/link';




const Menus2 : React.FC = () => {
    return(
      <>
<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  <li className="nav-item dropdown dropdown position-static">
    <Link
     className="nav-link dropdown-toggle"
     href="#"
     role="button"
     data-bs-toggle="dropdown"
     aria-expanded="false"
    >
      Men
    </Link>
    {/* Menswear dropdown menu*/}
    <div className="dropdown-menu dropdown-megamenu">
      <div className="container-fluid">
        <div className="row g-0 g-lg-3">
          {/* Menswear Dropdown Menu Links Section*/}
          <div className="col col-lg-8 py-lg-5">
             <div className="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
    
    <div className="col">
        <h6 className="dropdown-heading">Coats & Jackets</h6>
        <ul className="list-unstyled">
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Waterproof Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Insulated Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Down Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Softshell Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Casual Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Windproof Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Breathable Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Cleaning & Proofing</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item dropdown-link-all" href="/Category">View All</Link></li>
        </ul>
    </div>
   
    <div className="col">
        <h6 className="dropdown-heading">Insulated</h6>
        <ul className="list-unstyled">
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Insulated Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Bodywarmers</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Parkas</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Baselayers & Thermals</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Winter Hats</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Scarves & Neck</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Gloves & Mitts</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Accessories</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item dropdown-link-all" href="/Category">View All</Link></li>
        </ul>
    </div>
    
    <div className="d-none d-xxl-block col">
        <h6 className="dropdown-heading">Footwear</h6>
        <ul className="list-unstyled">
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Lifestyle & Casual</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Walking Shoes</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Running Shoes</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Military Boots</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Fabric Walking Boots</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Leather Walking Boots</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Wellies</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item" href="/Category">Winter Footwear</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item dropdown-link-all" href="/Category">View All</Link></li>
        </ul>
    </div>
   
    <div className="col">
        <h6 className="dropdown-heading text-danger">Special Offers</h6>
        <ul className="list-unstyled">
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Insulated Jackets</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Bodywarmers</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Parkas</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Baselayers & Thermals</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Winter Hats</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Scarves & Neck</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Gloves & Mitts</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger" href="/Category">Accessories</Link></li>
            <li className="dropdown-list-item"><Link className="dropdown-item text-danger dropdown-link-all" href="/Category">View All</Link></li>
        </ul>
    </div>
        
</div>
  </div>
          {/* /Menswear Dropdown Menu Links Section*/}
          {/* Menswear Dropdown Menu Images Section*/}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="vw-50 border-start h-100 position-absolute" />
            <div className="py-lg-5 position-relative z-index-10 px-lg-4">
              <div className="row g-4">
                <div className="col-12 col-md-6"><Cart 
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
                <div className="col-12 col-md-6"><Cart
                img={`/OLDS/images/banners/banner-12.jpg`} // Ajusta la ruta de la imagen según tu configuración
                title="Latest Arrivals"/></div>
              </div>
              <Link
                href="#"
                className="btn btn-link p-0 fw-bolder text-link-border mt-5 text-dark mx-auto d-table"
              >
                Visit Mens Section
              </Link>
            </div>
          </div>
          {/* Menswear Dropdown Menu Images Section*/}
        </div>
      </div>
    </div>
    {/* / Menswear dropdown menu*/}
  </li>
  <li className="nav-item dropdown">
    <Link
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Women
    </Link>
    <ul className="dropdown-menu">
      <li>
        <Link className="dropdown-item" href="">
          Tops
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Bottoms
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Jeans
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          T-Shirts
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Shoes
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Accessories
        </Link>
      </li>
    </ul>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="" role="button">
      Kids
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="" role="button">
      Sale
    </Link>
  </li>
  <li className="nav-item dropdown">
    <Link
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Pages
    </Link>
    <ul className="dropdown-menu">
      <li>
        <Link className="dropdown-item" href="/">
          Homepage
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="/Category">
          Category
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="/Product">
          Product
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="/Chekout/Cart">
          Cart
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="/Chekout/Chekout">
          Checkout
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Login
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Register
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" href="">
          Forgotten Password
        </Link>
      </li>
    </ul>
  </li>
</ul>

      </>);
  };

  export default Menus2;