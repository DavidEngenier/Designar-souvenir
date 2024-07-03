import React from 'react';

interface CheckoutItemProps {
  img: string;
  border: boolean;
  name: string;
  qty: number;
  options: string;
  price: string;
  showQty: boolean;
  
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  img,
  border,
  name,
  qty,
  options,
  price,
  showQty
}) => {
  return (
    <div className="row mx-0 py-4 g-0 border-bottom">
      <div className="col-2 position-relative">
        {showQty && <span className="checkout-item-qty">{qty}</span>}
        <picture className={`d-block ${border ? 'border' : ''}`}>
          <img className="img-fluid" src={img} alt=''/>
        </picture>
      </div>
      <div className="col-9 offset-1">
        <div>
          <h6 className="justify-content-between d-flex align-items-start mb-2">
            {name}
            <i className="ri-close-line ms-3"></i>
          </h6>
          <span className="d-block text-muted fw-bolder text-uppercase fs-9">
            {options} / Qty: {qty}
          </span>
        </div>
        <p className="fw-bolder text-end text-muted m-0">{price}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
