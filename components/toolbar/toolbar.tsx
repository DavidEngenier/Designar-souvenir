import React from "react";
import Breadcrum from "../breadcums/Breadcrum";

const Toolbar =()=>{

    return(
        <>
        <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
  <div>
   <Breadcrum category="Sneakers" page="New Releases"/>
    {/*
  {{> breadcrumbs/breadcrumbs 
      category="Sneakers"
      page="New Releases" 
  }}*/}
    <h1 className="fw-bold fs-3 mb-2">New Releases (121)</h1>
    <p className="m-0 text-muted small">Showing 1 - 9 of 121</p>
  </div>
  <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
    {/* Filter Trigger*/}
    <button
      className="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto "
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasFilters"
      aria-controls="offcanvasFilters"
    >
      <i className="ri-equalizer-line me-2" /> Filters
    </button>
    {/* / Filter Trigger*/}
    {/* Sort Options*/}
    <select className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7">
      <option selected="">Sort By</option>
      <option value={1}>Hi Low</option>
      <option value={2}>Low Hi</option>
      <option value={3}>Name</option>
    </select>
    {/* / Sort Options*/}
  </div>
</div>

        </>
    );
};

export default Toolbar;