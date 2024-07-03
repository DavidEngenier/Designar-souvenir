export default function Checkinformacion() {
    return (
      <div className="">
        {/* Checkout Panel Information*/}
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
          <h3 className="fs-5 fw-bolder m-0 lh-1">Contact Information</h3>
          <small className="text-muted fw-bolder">
            Already registered? <a href="{{webRoot}}/login.html">Login</a>
          </small>
        </div>
        <div className="row">
          {/* First Name*/}
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="firstNameBilling" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstNameBilling"
                placeholder=""
                defaultValue=""
                required
              />
            </div>
          </div>
          {/* Last Name*/}
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="lastNameBilling" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastNameBilling"
                placeholder=""
                defaultValue=""
                required
              />
            </div>
          </div>
          {/* Email*/}
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            {/* Mailing List Signup*/}
            <div className="form-group form-check m-0">
              <input
                type="checkbox"
                className="form-check-input"
                id="add-mailinglist"
                defaultChecked
              />
              <label
                className="form-check-label small text-muted"
                htmlFor="add-mailinglist"
              >
                Keep me updated with your latest news and offers
              </label>
            </div>
          </div>
        </div>
        <h3 className="fs-5 mt-5 fw-bolder mb-4 border-bottom pb-4">
          Shipping Address
        </h3>
        <div className="row">
          {/* First Name*/}
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                defaultValue=""
                required
              />
            </div>
          </div>
          {/* Last Name*/}
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                defaultValue=""
                required
              />
            </div>
          </div>
          {/* Address*/}
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="123 Some Street Somewhere"
                required
              />
            </div>
          </div>
          {/* Country*/}
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select className="form-select" id="country" required>
                <option value="">Please Select...</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          {/* State*/}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select className="form-select" id="state" required>
                <option value="">Please Select...</option>
                <option>California</option>
              </select>
            </div>
          </div>
          {/* Post Code*/}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="zip" className="form-label">
                Zip/Post Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className=" pt-4 mt-4 pb-5 border-top d-flex justify-content-between align-items-center">
          {/* Shipping Same Checkbox*/}
          <div className="form-group form-check m-0">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="same-address">
              Use for billing address
            </label>
          </div>
        </div>
        {/* Billing Address*/}
        <div className="billing-address d-none">
          <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Billing Address</h3>
          <div className="row">
            {/* First Name*/}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="firstNameAddress" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameAddress"
                  placeholder=""
                  defaultValue=""
                  required
                />
              </div>
            </div>
            {/* Last Name*/}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="lastNameAddress" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameAddress"
                  placeholder=""
                  defaultValue=""
                  required
                />
              </div>
            </div>
            {/* Address*/}
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="addressAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressAddress"
                  placeholder="123 Some Street Somewhere"
                  required
                />
              </div>
            </div>
            {/* Country*/}
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="countryAddress" className="form-label">
                  Country
                </label>
                <select className="form-select" id="countryAddress" required>
                  <option value="">Please Select...</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
            {/* State*/}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="stateAddress" className="form-label">
                  State
                </label>
                <select className="form-select" id="stateAddress" required>
                  <option value="">Please Select...</option>
                  <option>California</option>
                </select>
              </div>
            </div>
            {/* Post Code*/}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="zipAddress" className="form-label">
                  Zip/Post Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zipAddress"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* / Billing Address*/}
        <div className="pt-5 mt-5 pb-5 border-top d-flex justify-content-md-end align-items-center">
          <a
            href="/checkout-shipping"
            className="btn btn-dark w-100 w-md-auto"
            role="button"
          >
            Proceed to shipping
          </a>
        </div>
      </div>
    );
  };
  