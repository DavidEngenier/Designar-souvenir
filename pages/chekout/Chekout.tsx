import Checkoutheader from '@/components/chekout/chekout-header';
import CheckoutPage from '@/components/chekout/chekoutcart';
import Checkinformacion from '@/components/chekout/informacionchek';
import React, { useState, useEffect } from 'react';

const Checkout: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Renderiza un fallback si es necesario
  }

  return (
    <div className="mt-0 bg-white ">
  {/* Page Content Goes Here */}
  <div className="container">
    <div className="row g-0 ">
      <div className="col-lg-7 pt-5 pt-lg-10">
        <div className="pe-lg-5">
          <Checkoutheader activeInformation={true}/>
          <div className="mt-5">
            <Checkinformacion/>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5  pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
        <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
          <CheckoutPage/>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</div>

  );
};

export default Checkout;
