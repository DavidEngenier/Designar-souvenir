export default function Mediumstart () {
    return(
        <>
  {/* Review Stars Medium*/}
  <div className="rating position-relative d-table">
    <div
      className="position-absolute stars"
      style={{ width: "{{#if width}}{{width}}{{else}}80%{{/if}}" }}
    >
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} ri-2x mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} ri-2x mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} ri-2x mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} ri-2x mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} ri-2x mr-1" />
    </div>
    <div className="stars">
      <i className="ri-star-fill ri-2x mr-1 text-muted" />
      <i className="ri-star-fill ri-2x mr-1 text-muted" />
      <i className="ri-star-fill ri-2x mr-1 text-muted" />
      <i className="ri-star-fill ri-2x mr-1 text-muted" />
      <i className="ri-star-fill ri-2x mr-1 text-muted" />
    </div>
  </div>
</>

    );
  };