import React from "react";
import data from "@/public/data/category-products.json";


const Droprtitem: React.FC = () => {
    return(
        <>
  <div className="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading">Coats &amp; Jackets</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Waterproof Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Down Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Softshell Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Casual Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Windproof Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Breathable Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Cleaning &amp; Proofing
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading">Insulated</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Bodywarmers
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Parkas
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Baselayers &amp; Thermals
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Winter Hats
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Scarves &amp; Neck
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Gloves &amp; Mitts
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Accessories
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="d-none d-xxl-block col">
      <h6 className="dropdown-heading">Footwear</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Lifestyle &amp; Casual
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Walking Shoes
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Running Shoes
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Military Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Fabric Walking Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Leather Walking Boots
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Wellies
          </a>
        </li>
        <li className="dropdown-list-item">
          <a className="dropdown-item" href="{{webRoot}}/category.html">
            Winter Footwear
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
    {/* menu row*/}
    <div className="col">
      <h6 className="dropdown-heading text-danger">Special Offers</h6>
      <ul className="list-unstyled">
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Insulated Jackets
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Bodywarmers
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Parkas
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Baselayers &amp; Thermals
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Winter Hats
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Scarves &amp; Neck
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Gloves &amp; Mitts
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger"
            href="{{webRoot}}/category.html"
          >
            Accessories
          </a>
        </li>
        <li className="dropdown-list-item">
          <a
            className="dropdown-item text-danger dropdown-link-all"
            href="{{webRoot}}/category.html"
          >
            View All
          </a>
        </li>
      </ul>
    </div>
    {/* / menu row*/}
  </div>
  <div className="align-items-center justify-content-between mt-5 d-none d-lg-flex">
    
    <div className="me-5 f-w-20">
    {data.entries.map((brand, index) =>(
      <a key={index} className="d-block" href="{{webRoot}}/category.html">
        <picture>
          <img
            className="img-fluid d-table mx-auto"
            src={brand.img}
            alt={`Logo ${index + 1}`}
          />
        </picture>
      </a>  ))}
    </div>
    
  </div>
</>

    );
  };
  export default Droprtitem;