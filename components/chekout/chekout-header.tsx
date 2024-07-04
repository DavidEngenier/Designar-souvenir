import React from 'react';
import Link from 'next/link';
import LOGS from '../SVG/Logo';

interface NavbarProps {
  activeCart?: boolean;
  activeInformation?: boolean;
  activeShipping?: boolean;
  activePayment?: boolean;
}

const Checkoutheader: React.FC<NavbarProps> = ({
  activeCart = false,
  activeInformation = false,
  activeShipping = false,
  activePayment = false,
}) => {
  return (
    <div className=''>
      {/* Logo */}
      <Link href="/" passHref>
        <div className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0">
          <LOGS width={160} height={110}/>
        </div>
      </Link>
      {/* / Logo */}
      <nav className="d-none d-md-block">
        <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
          <li className="me-4">
            <Link href="/chekout/Cart" passHref>
              <div className={`nav-link-checkout ${activeCart ? 'active' : ''}`}>
                Tu carrito
              </div>
            </Link>
          </li>
          <li className="me-4">
            <Link href="/chekout/Chekout" passHref>
              <div className={`nav-link-checkout ${activeInformation ? 'active' : ''}`}>
                Infomacion
              </div>
            </Link>
          </li>
          <li className="me-4">
            <Link href="/chekout/Chekout-shiping" passHref>
              <div className={`nav-link-checkout ${activeShipping ? 'active' : ''}`}>
                Envio
              </div>
            </Link>
          </li>
          <li>
            <Link href="/chekout/Chekout-payment" passHref>
              <div className={`nav-link-checkout nav-link-last ${activePayment ? 'active' : ''}`}>
                Pago
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Checkoutheader;
