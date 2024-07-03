export default function Shiping() {
    return (
<>
  {/* Checkout Information Summary */}
  {/*{{> checkout/checkout-information-summary show-contact="true" }}*/}
  {/* / Checkout Information Summary*/}
  {/* Checkout Panel Information*/}
  <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Shipping Method</h3>
  {/* Shipping Option*/}
  <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
    <input
      className="form-check-input"
      type="radio"
      name="checkoutShippingMethod"
      id="checkoutShippingMethodOne"
      defaultChecked
    />
    <label className="form-check-label" htmlFor="checkoutShippingMethodOne">
      <span className="d-flex justify-content-between align-items-start">
        <span>
          <span className="mb-0 fw-bolder d-block">
            Click &amp; Collect Shipping
          </span>
          <small className="fw-bolder">Collect from our London store</small>
        </span>
        <span className="small fw-bolder text-uppercase">Free</span>
      </span>
    </label>
  </div>
  {/* Shipping Option*/}
  <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
    <input
      className="form-check-input"
      type="radio"
      name="checkoutShippingMethod"
      id="checkoutShippingMethodTwo"
    />
    <label className="form-check-label" htmlFor="checkoutShippingMethodTwo">
      <span className="d-flex justify-content-between align-items-start">
        <span>
          <span className="mb-0 fw-bolder d-block">UPS Next Day</span>
          <small className="fw-bolder">
            For all orders placed before 1pm Monday to Thursday
          </small>
        </span>
        <span className="small fw-bolder text-uppercase">$19.99</span>
      </span>
    </label>
  </div>
  {/* Shipping Option*/}
  <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
    <input
      className="form-check-input"
      type="radio"
      name="checkoutShippingMethod"
      id="checkoutShippingMethodThree"
    />
    <label className="form-check-label" htmlFor="checkoutShippingMethodThree">
      <span className="d-flex justify-content-between align-items-start">
        <span>
          <span className="mb-0 fw-bolder d-block">DHL Priority Service</span>
          <small className="fw-bolder">24 - 36 hour delivery</small>
        </span>
        <span className="small fw-bolder text-uppercase">$9.99</span>
      </span>
    </label>
  </div>
  <div className="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
    <a
      href="{{webRoot}}/checkout.html"
      className="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0"
      role="button"
    >
      Back to information
    </a>
    <a
      href="{{webRoot}}/checkout-payment.html"
      className="btn btn-dark w-100 w-md-auto"
      role="button"
    >
      Proceed to payment
    </a>
  </div>
</>

    );}