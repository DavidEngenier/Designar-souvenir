const Dropdowncart: React.FC = () => {
  return (
    <div className="cart-dropdown dropdown-menu">
      {/* Cart Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-4">
        <h6 className="fw-bolder m-0">Cart Summary (2 items)</h6>
        <i className="ri-close-circle-line text-muted ri-lg cursor-pointer btn-close-cart" />
      </div>
      {/* / Cart Header */}
      {/* Cart Items */}
      <div>
        {/* Cart Product */}
        {/*{{
          cart/cart-item
          img="/OLDS/images/products/product-cart-1.jpg"
          name="Nike Air VaporMax 2021"
          qty="1"
          options="Size: 9"
          price="$85.00"
        }}*/}
        {/* Cart Product */}
        {/*{{
          cart/cart-item
          img="/OLDS/images/products/product-cart-2.jpg"
          name="Nike ZoomX Vaporfly"
          qty="1"
          options="Size: 11"
          price="$125.00"
        }}*/}
      </div>
      {/* /Cart Items */}
      {/* Cart Summary */}
      <div>
        <div className="pt-3">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start mb-4 mb-md-2">
            <div>
              <p className="m-0 fw-bold fs-5">Grand Total</p>
              <span className="text-muted small">Inc $45.89 sales tax</span>
            </div>
            <p className="m-0 fs-5 fw-bold">$422.99</p>
          </div>
        </div>
        <a
          href="{{webRoot}}/cart.html"
          className="btn btn-outline-dark w-100 text-center mt-4"
          role="button"
        >
          View Cart
        </a>
        <a
          href="{{webRoot}}/checkout.html"
          className="btn btn-dark w-100 text-center mt-2"
          role="button"
        >
          Proceed To Checkout
        </a>
      </div>
      {/* / Cart Summary */}
    </div>
  );
};

export default Dropdowncart;