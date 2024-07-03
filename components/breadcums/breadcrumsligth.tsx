import React from "react";

interface DropdownCardImageProps {
    category: string;
    page: string;
  }

const Breadcrum :React.FC<DropdownCardImageProps> = ({category, page}) => {

    return(
        <>
        <nav className="m-0" aria-label="breadcrumb">
  <ol className="breadcrumb m-0">
    <li className="breadcrumb-item breadcrumb-light">
      <a href="#">Home</a>
    </li>
    <li className="breadcrumb-item breadcrumb-light">
      <a href="#">
        {category}
      </a>
    </li>
    <li className="breadcrumb-item  breadcrumb-light active" aria-current="page">
      {page}
    </li>
  </ol>
</nav>

        </>
    );

};

export default Breadcrum;