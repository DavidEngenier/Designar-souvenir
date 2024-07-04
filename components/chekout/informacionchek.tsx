import Link from "next/link";

export default function Checkinformacion() {
    return (
      <div className="">
        {/* Checkout Panel Information*/}
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
          <h3 className="fs-5 fw-bolder m-0 lh-1">Informacion de contacto</h3>
          <small className="text-muted fw-bolder">
            Ya estas registrado? <a href="">Login</a>
          </small>
        </div>
        <div className="row">
          {/* First Name*/}
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="firstNameBilling" className="form-label">
                Nombres
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
                Apellidos
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
                Mantenme Acualizado de nuevas ofertas
              </label>
            </div>
          </div>
        </div>
        <h3 className="fs-5 mt-5 fw-bolder mb-4 border-bottom pb-4">
          Direccion de envio
        </h3>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Direccion
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Calle 61 #318 por 54 y 52 Francisco de Montejo"
                required
              />
            </div>
          </div>
          {/* Country*/}
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Pais
              </label>
              <select className="form-select" id="country" required>
                <option value="">Please Select...</option>
                <option>Mexico</option>
                
              </select>
            </div>
          </div>
          {/* State*/}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="state" className="form-label">
                Estado
              </label>
              <select className="form-select" id="state" required>
                <option value="">Please Select...</option>
                <option>Yucatan</option>
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
                placeholder="9454"
                required
              />
            </div>
          </div>
        </div>
        <div className=" pt-4 mt-4 pb-5 border-top d-flex justify-content-between align-items-center">
        </div>
        <div className="pt-5 mt-5 pb-5 border-top d-flex justify-content-md-end align-items-center">
          <Link
            href="/chekout/Chekout-shiping"
            className="btn btn-dark w-100 w-md-auto"
            role="button"
          >
            Proceder al envio
          </Link>
        </div>
      </div>
    );
  };
  