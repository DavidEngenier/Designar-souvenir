export default function Area() {
    return(
        <div className="top_catagory_area section-padding-80 clearfix">
    <div className="container">
      <div className="row justify-content-center">
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-2.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Clothing</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-3.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Shoes</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-4.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
        {/* Single Catagory */}
        <div className="col-6 col-sm-4 col-md-3">
          <div
            className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
            style={{
              backgroundImage: "url(img/bg-img/bg-4.jpg)",
              borderRadius: "100%"
            }}
          >
            <div className="catagory-content">
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );

 };