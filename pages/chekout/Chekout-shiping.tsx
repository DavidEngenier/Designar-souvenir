
import Checkoutheader from '@/components/chekout/chekout-header';
import Shiping from '@/components/chekout/chekout-shiping';
import CheckoutPage from '@/components/chekout/chekoutcart';
import React from 'react';

const Checkout: React.FC = () => {
  
  return (
<div className='bg-white'>
  {/* Page Content Goes Here */}
  <div className="container ">
    <div className="row g-0 ">
      <div className="col-lg-7 pt-5 pt-lg-10">
        <div className="pe-lg-5">
          <Checkoutheader activeShipping/>
          <div className="mt-5"><Shiping/></div>
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
