import React from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  'sale-price'?: string;
  currency: string;
  options: string;
  img: string;
  new?: boolean;
  'sold-out'?: boolean;
}

const ListingCard: React.FC<Product> = ({
  title,
  price,
  'sale-price': salePrice,
  currency,
  options,
  img,
  new: isNew,
  'sold-out': isSoldOut
}) => {
  return (
    <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
      <div className="card-img position-relative">
        <div className="card-badges">
          {salePrice && (
            <span className="badge badge-card">
              <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale
            </span>
          )}
          {isNew && (
            <span className="badge badge-card">
              <span className="f-w-2 f-h-2 bg-success rounded-circle d-block me-1"></span> New In
            </span>
          )}
          {isSoldOut && (
            <span className="badge badge-card">
              <span className="f-w-2 f-h-2 bg-secondary rounded-circle d-block me-1"></span> Sold Out
            </span>
          )}
        </div>
        <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted">
          <i className="ri-heart-line"></i>
        </span>
        <picture className="position-relative overflow-hidden d-block bg-light">
          <img
            className="w-100 img-fluid position-relative z-index-10"
            title=""
            src={img}
            alt={title}
          />
        </picture>
        {!isSoldOut && (
          <div className="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
            <button className="btn btn-quick-add">
              <i className="ri-add-line me-2"></i> Quick Add
            </button>
          </div>
        )}
      </div>
      <div className="card-body px-0">
        <a className="text-decoration-none link-cover" href="#">
          {title}
        </a>
        <small className="text-muted d-block">{options}</small>
        {isSoldOut ? (
          <p className="mt-2 mb-0 small text-muted">Sold Out</p>
        ) : salePrice ? (
          <p className="mt-2 mb-0 small">
            <s className="text-muted">
              {currency}
              {price}
            </s>{' '}
            <span className="text-danger">
              {currency}
              {salePrice}
            </span>
          </p>
        ) : (
          <p className="mt-2 mb-0 small">
            {currency}
            {price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
