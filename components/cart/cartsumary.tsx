import Link from "next/link";



export default function CartSUMARY () {  
    return(<>
        <div className="pb-4 border-bottom">
          <div className="d-flex flex-column flex-md-row justify-content-md-between mb-4 mb-md-2">
            <div>
              <p className="m-0 fw-bold fs-5">Total</p>
              <span className="text-muted small"></span>
            </div>
            <p className="m-0 fs-5 fw-bold">$422.99</p>
          </div>
        </div>
        <div className="py-4">
          <div className="input-group mb-0">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresar Cupon"
            />
            <button className="btn btn-secondary btn-sm px-4">Aplicar</button>
          </div>
        </div>
        <Link
          href="/chekout/Chekout"
          className="btn btn-dark w-100 text-center"
          role="button"
        >
          Proceder al Pago
        </Link>
      </>
      );
};

