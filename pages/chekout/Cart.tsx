import React, { useState, useEffect } from 'react';


import CheckoutItem from '@/components/cart/cart-itemcheck';
import CartSUMARY from '@/components/cart/cartsumary';

import Checkoutheader from '@/components/chekout/chekout-header';

const CategoryProductsComponent: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Renderiza un fallback si es necesario
  }

  return (
    <div className='bg-white'>
      <section className="mt-0 overflow-lg-hidden vh-lg-100">
        <div className="container">
          <div className="row g-0 vh-lg-100">
            <div className="col-12 col-lg-7 pt-5 pt-lg-10">
              <div className="pe-lg-5">
                <Checkoutheader activeCart={true} />
                <div className="mt-5">
                  <h3 className="fs-5 fw-bolder mb-0 border-bottom pb-4">
                    Your Cart
                  </h3>
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <tbody className="border-0">
                        {/* Cart Item */}
                        <CheckoutItem img='/OLDS/images/products/product-cart-1.jpg' border name='Nike Air VaporMax 2021' qty={1} options='Size: 9' price='$85.00' showQty />
                        {/* / Cart Item */}
                        {/* Cart Item */}
                        <CheckoutItem img='/OLDS/images/products/product-cart-2.jpg' border name='Nike ZoomX Vaporfly' qty={1} options='Size: 11' price='$125.00' showQty />
                        {/* / Cart Item */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
              <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                <CartSUMARY />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryProductsComponent;
