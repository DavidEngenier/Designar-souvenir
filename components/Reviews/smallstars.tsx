export default function Startsamls() {
    return(
        <>
  {/* Review Stars Small*/}
  <div className="rating position-relative d-table">
    <div
      className="position-absolute stars"
      style={{ width: "{{#if width}}{{width}}{{else}}80%{{/if}}" }}
    >
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} mr-1" />
      <i className="ri-star-fill {{#if colour}}{{colour}}{{else}}text-dark{{/if}} mr-1" />
    </div>
    <div className="stars">
      <i className="ri-star-fill mr-1 text-muted opacity-25" />
      <i className="ri-star-fill mr-1 text-muted opacity-25" />
      <i className="ri-star-fill mr-1 text-muted opacity-25" />
      <i className="ri-star-fill mr-1 text-muted opacity-25" />
      <i className="ri-star-fill mr-1 text-muted opacity-25" />
    </div>
  </div>
</>

    );
  };