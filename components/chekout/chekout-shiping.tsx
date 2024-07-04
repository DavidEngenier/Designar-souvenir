export default function Shiping() {
    return (
<>
  {/* Checkout Information Summary */}
  {/*{{> checkout/checkout-information-summary show-contact="true" }}*/}
  {/* / Checkout Information Summary*/}
  {/* Checkout Panel Information*/}
  <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Metodo de envio</h3>
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
           Recoger en Tienda
          </span>
          <small className="fw-bolder">Recoge en nuestra sucursal</small>
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
          <span className="mb-0 fw-bolder d-block">Estafeta</span>
          <small className="fw-bolder">
           Envio en Mexico
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
          <span className="mb-0 fw-bolder d-block">Fedex</span>
          <small className="fw-bolder">Rapido y a todo el mundo</small>
        </span>
        <span className="small fw-bolder text-uppercase">$9.99</span>
      </span>
    </label>
  </div>
  <div className="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
    <a
      href="chekout/Checkout.html"
      className="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0"
      role="button"
    >
      Atras
    </a>
    <a
      href="chekout/Checkout-payment"
      className="btn btn-dark w-100 w-md-auto"
      role="button"
    >
      Proceder al pago
    </a>
  </div>
</>

    );}