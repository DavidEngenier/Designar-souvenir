import React from "react";

interface DropdownCardImageProps {
    category: string;
    page: string;
  }

const Breadcrum :React.FC<DropdownCardImageProps> = ({category, page}) => {

    return(
        <>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li className="breadcrumb-item">
      <a href="#">
        {category}
      </a>
    </li>
    <li className="breadcrumb-item active" aria-current="page">
      {page}
    </li>
  </ol>
</nav>

        </>
    );

};

export default Breadcrum;