import React from "react";

interface DropdownCardImageProps {
  img: string;
  title: string;
}

const Cart: React.FC<DropdownCardImageProps> = ({ img, title }) =>{
    return(
      <div className="dropdown-card-image">
      <img src={img} alt={title} className="img-fluid" />
      <h3>{title}</h3>
    </div>
      );
  };
  export default Cart;