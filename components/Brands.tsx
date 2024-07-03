import Image from "next/image";



export default function Brands() {
 return   ( <div className="brands-area d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <div className="single-brands-logo">

          <Image src="/img/core-img/brand1.png" alt="alt" width={150} height={25} />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <Image src="/img/core-img/brand2.png" alt="alt" width={150} height={25} /> 
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <Image src="/img/core-img/brand3.png" alt="alt" width={150} height={25} />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <Image src="/img/core-img/brand4.png" alt="alt" width={150} height={25} />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
          <Image src="/img/core-img/brand5.png" alt="alt" width={150} height={25} />
        </div>
        {/* Brand Logo */}
        <div className="single-brands-logo">
        <Image src="/img/core-img/brand6.png" alt="alt" width={150} height={25} />
        </div>
      </div>);
  };