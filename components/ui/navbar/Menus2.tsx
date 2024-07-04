import React, { useEffect } from 'react';
import Link from 'next/link';
import Droprtitem from './dropdown';
import Cart from './dropdowncart';


const Menus2: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dropdownToggles = document.querySelectorAll<HTMLAnchorElement>('.nav-item.dropdown .nav-link');
      const dropdownMenus = document.querySelectorAll<HTMLDivElement>('.dropdown-menu.dropdown-megamenu');

      if (dropdownToggles.length && dropdownMenus.length) {
        console.log("Dropdown elements found");

        dropdownToggles.forEach((toggle, index) => {
          const menu = dropdownMenus[index];

          if (menu) {
            // Función para mostrar el menú desplegable
            const showDropdown = () => {
              menu.classList.add('show');
              toggle.setAttribute('aria-expanded', 'true');
            };

            // Función para ocultar el menú desplegable
            const hideDropdown = () => {
              menu.classList.remove('show');
              toggle.setAttribute('aria-expanded', 'false');
            };

            // Event listeners para mostrar el menú al pasar el cursor y ocultarlo al salir
            toggle.addEventListener('mouseenter', showDropdown);
            toggle.addEventListener('focus', showDropdown);

            toggle.addEventListener('mouseleave', (event) => {
              if (!menu.contains(event.relatedTarget as Node)) {
                hideDropdown();
              }
            });

            menu.addEventListener('mouseleave', (event) => {
              if (!toggle.contains(event.relatedTarget as Node)) {
                hideDropdown();
              }
            });

            // También puedes agregar event listeners para eventos de clic/touchstart
            toggle.addEventListener('click', (event) => {
              event.preventDefault();
              if (menu.classList.contains('show')) {
                hideDropdown();
              } else {
                showDropdown();
              }
            });

            document.addEventListener('click', (event) => {
              if (!menu.contains(event.target as Node) && !toggle.contains(event.target as Node)) {
                hideDropdown();
              }
            });

            document.addEventListener('touchstart', (event) => {
              if (!menu.contains(event.target as Node) && !toggle.contains(event.target as Node)) {
                hideDropdown();
              }
            });
          } else {
            console.log(`No menu found for toggle at index ${index}`);
          }
        });
      } else {
        console.log("Mismatched number of dropdown elements found");
      }
    } else {
      console.log("Dropdown elements not found");
    }
  }, []);


  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown position-static">
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hombres
        </Link>
        {/* Menswear dropdown menu */}
        <div className="dropdown-menu dropdown-megamenu">
          <div className="container-fluid">
            <div className="row g-0 g-lg-3">
              {/* Menswear Dropdown Menu Links Section */}
              <div className="col col-lg-8 py-lg-5">
                <Droprtitem />
              </div>
              {/* /Menswear Dropdown Menu Links Section */}
              {/* Menswear Dropdown Menu Images Section */}
              <div className="col-lg-4 d-none d-lg-block">
                <div className="vw-50 border-start h-100 position-absolute" />
                <div className="py-lg-5 position-relative z-index-10 px-lg-4">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <Cart img={`/OLDS/images/banners/banner-12.jpg`} title="Latest Arrivals" />
                    </div>
                    <div className="col-12 col-md-6">
                      <Cart img={`/OLDS/images/banners/banner-12.jpg`} title="Latest Arrivals" />
                    </div>
                    <div className="col-12 col-md-6">
                      <Cart img={`/OLDS/images/banners/banner-12.jpg`} title="Latest Arrivals" />
                    </div>
                    <div className="col-12 col-md-6">
                      <Cart img={`/OLDS/images/banners/banner-12.jpg`} title="Latest Arrivals" />
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="btn btn-link p-0 fw-bolder text-link-border mt-5 text-dark mx-auto d-table"
                  >
                    Visit Mens Section
                  </Link>
                </div>
              </div>
              {/* /Menswear Dropdown Menu Images Section */}
            </div>
          </div>
        </div>
        {/* /Menswear dropdown menu */}
      </li>
      <li className="nav-item dropdown ">
        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mujeres
        </Link>
        <ul className="dropdown-menu dropdown-megamenu ">
        <div className="container-fluid  ">
            <div className="row g-0 g-lg-3">
              {/* Menswear Dropdown Menu Links Section */}
              <div className="">
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
          </div>
          </div>
          </div>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="" role="button">
          Niños
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="" role="button">
          Venta
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Paginas
        </Link>
        <ul className="dropdown-menu dropdown-megamenu">
        <div className="container-fluid ">
            <div className="row g-0 g-lg-3">
              {/* Menswear Dropdown Menu Links Section */}
              <div className="">
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
            <Link className="dropdown-item" href="/chekout/Cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/chekout/Chekout">
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
          </div>
          </div>
          </div>
        </ul>
      </li>
    </ul>
  );
};

export default Menus2;
