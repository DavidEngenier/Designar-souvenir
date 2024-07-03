import Script from "next/script";


export default function Footer2() {
    return(<footer className="border-top py-5 mt-4 {{configClassList}} {{classList}}">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <div>
              <ul className="list-unstyled">
                <li className="d-inline-block me-1">
                  <a
                    className="text-decoration-none text-dark-hover transition-all"
                    href="#"
                  >
                    <i className="ri-instagram-fill" />
                  </a>
                </li>
                <li className="d-inline-block me-1">
                  <a
                    className="text-decoration-none text-dark-hover transition-all"
                    href="#"
                  >
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li className="d-inline-block me-1">
                  <a
                    className="text-decoration-none text-dark-hover transition-all"
                    href="#"
                  >
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li className="d-inline-block me-1">
                  <a
                    className="text-decoration-none text-dark-hover transition-all"
                    href="#"
                  >
                    <i className="ri-snapchat-fill" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-end flex-column flex-lg-row">
              <p className="small m-0 text-center text-lg-start">
                © 2021 OldSkool All Rights Reserved. Template by{" "}
                <a href="https://www.pixelrocket.store">Pixel Rocket</a>
              </p>
              <ul className="list-unstyled mb-0 ms-lg-4 mt-3 mt-lg-0 d-flex justify-content-end align-items-center">
                <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                  <i className="pi pi-sm pi-paypal" />
                </li>
                <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                  <i className="pi pi-sm pi-mastercard" />
                </li>
                <li className="bg-light p-2 d-flex align-items-center justify-content-center me-2">
                  <i className="pi pi-sm pi-american-express" />
                </li>
                <li className="bg-light p-2 d-flex align-items-center justify-content-center">
                  <i className="pi pi-sm pi-visa" />
                </li>
              </ul>
            </div>
          </div>
        </div>


      </footer>);
      };

