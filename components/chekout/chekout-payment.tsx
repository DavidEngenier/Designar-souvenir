import Checkinformacion from "./informacionchek";
import InfoList from "./chekout-sumaryshiping";
export default function Payment() {
    return (
<>
  {/* Checkout Information Summary */}
  <InfoList
    showContact={true}
    showDelivery={true}
    showMethod={true}
    webRoot="/chekout"
/>
  {/* / Checkout Information Summary*/}
  {/* Checkout Panel Information*/}
  <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">
    Payment Information
  </h3>
  <div className="row">
    {/* Payment Option*/}
    <div className="col-12">
      <div className="form-check form-group form-check-custom form-radio-custom mb-3">
        <input
          className="form-check-input"
          type="radio"
          name="checkoutPaymentMethod"
          id="checoutPaymentStripe"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="checoutPaymentStripe">
          <span className="d-flex justify-content-between align-items-start">
            <span>
              <span className="mb-0 fw-bolder d-block">
                Credit Card (Stripe)
              </span>
            </span>
            <i className="ri-bank-card-line" />
          </span>
        </label>
      </div>
    </div>
    {/* Payment Option*/}
    <div className="col-12">
      <div className="form-check form-group form-check-custom form-radio-custom mb-3">
        <input
          className="form-check-input"
          type="radio"
          name="checkoutPaymentMethod"
          id="checkoutPaymentPaypal"
        />
        <label className="form-check-label" htmlFor="checkoutPaymentPaypal">
          <span className="d-flex justify-content-between align-items-start">
            <span>
              <span className="mb-0 fw-bolder d-block">PayPal</span>
            </span>
            <i className="ri-paypal-line" />
          </span>
        </label>
      </div>
    </div>
  </div>
  {/* Payment Details*/}
  <div className="card-details">
    <div className="row pt-3">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="cc-name" className="form-label">
            Name on card
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-name"
            placeholder=""
            required
          />
          <small className="text-muted">Full name as displayed on card</small>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="cc-number" className="form-label">
            Credit card number
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-number"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="cc-expiration" className="form-label">
            Expiration
          </label>
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <div className="d-flex">
            <label
              htmlFor="cc-cvv"
              className="form-label d-flex w-100 justify-content-between align-items-center"
            >
              Security Code
            </label>
            <button
              type="button"
              className="btn btn-link p-0 fw-bolder fs-xs text-nowrap"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="A CVV is a number on your credit card or debit card that's in addition to your credit card number and expiration date"
            >
              
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder=""
            required
          />
        </div>
      </div>
    </div>
  </div>
  {/* / Payment Details*/}
  {/* Paypal Info*/}
  <div className="paypal-details bg-light p-4 d-none my-3 fw-bolder">
    Please click on complete order. You will then be transferred to Paypal to
    enter your payment details.
  </div>
  {/* /Paypal Info*/}
  {/* Accept Terms Checkbox*/}
  <div className="form-group form-check m-0">
    <input
      type="checkbox"
      className="form-check-input"
      id="accept-terms"
      defaultChecked
    />
    <label className="form-check-label fw-bolder" htmlFor="accept-terms">
      I agree to {/*{{ config.templateName }}*/}
      <a href="#">terms &amp; conditions</a>
    </label>
  </div>
  <div className="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
    <a
      href="/chekout/Checkout-shiping"
      className="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0"
      role="button"
    >
      Back to shipping
    </a>
    <a href="#" className="btn btn-dark w-100 w-md-auto" role="button">
      Complete Order
    </a>
  </div>
</>

    );}