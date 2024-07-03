import React from 'react';

// Define the types for the props
interface CartItemProps {
  img: string;
  name: string;
  qty: string;
  options: string;
  price: string;
}

interface CheckoutSummaryProps {
  subtotal: string;
  shipping: string;
  grandTotal: string;
  showActionButtons: boolean;
}

// Define the CartItem component with typed props
const CartItem: React.FC<CartItemProps> = ({ img, name, qty, options, price }) => (
  <div className="pb-3">
    {/* Cart Item */}
    <div className="cart-item">
      <img src={img} alt={name} />
      <div className="cart-item-details">
        <h4>{name}</h4>
        <p>Cantidad: {qty}</p>
        <p>{options}</p>
        <p>Price: {price}</p>
      </div>
    </div>
    {/* / Cart Item */}
  </div>
);

// Define the CheckoutSummary component with typed props
const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ subtotal, shipping, grandTotal, showActionButtons }) => (
  <>
    <div className="pb-4 border-bottom">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="m-0 fw-bolder fs-6">Subtotal</p>
        <p className="m-0 fs-6 fw-bolder">${subtotal}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0 fw-bolder fs-6">Shipping</p>
        <p className="m-0 fs-6 fw-bolder">${shipping}</p>
      </div>
    </div>
    <div className="py-4 border-bottom">
      <div className="d-flex justify-content-between">
        <div>
          <p className="m-0 fw-bold fs-5">Grand Total</p>
          <span className="text-muted small">$45.89 sales tax</span>
        </div>
        <p className="m-0 fs-5 fw-bold">${grandTotal}</p>
      </div>
    </div>
    <div className="py-4">
      <div className="input-group mb-0">
        <input type="text" className="form-control" placeholder="Enter your coupon code" />
        <button className="btn btn-dark btn-sm px-4">Apply</button>
      </div>
    </div>
    {showActionButtons && (
      <>
        {/* Accept Terms Checkbox */}
        <div className="form-group form-check my-4">
          <input type="checkbox" className="form-check-input" id="accept-terms" checked />
          <label className="form-check-label fw-bolder" htmlFor="accept-terms">
            I agree to Outdoorlys <a href="#">terms & conditions</a>
          </label>
        </div>
        <a href="/order-success.html" className="btn btn-dark w-100" role="button">
          Complete Order
        </a>
      </>
    )}
  </>
);

// Define the main CheckoutPage component
const CheckoutPage: React.FC = () => {
  return (
    <>
      <CartItem
        img="/OLDS/images/products/product-cart-1.jpg"
        name="Nike Air VaporMax 2021"
        qty="1"
        options="Size: 9"
        price="$85.00"
      />
      <CartItem
        img="/OLDS/images/products/product-cart-2.jpg"
        name="Nike ZoomX Vaporfly"
        qty="1"
        options="Size: 11"
        price="$125.00"
      />
      <CheckoutSummary subtotal="422.99" shipping="8.95" grandTotal="422.99" showActionButtons={true} />
    </>
  );
};

export default CheckoutPage;
