function Left({ image_url, productName, productDesc, link1, link2 }) {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-8 mt-5 mb-5 p-3">
          <img src={image_url} alt="image" />
        </div>
        <div className="col-4 p-5 mt-5 text-start">
          <h2 className="fs-2 mb-3">{productName}</h2>
          <p>{productDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Left;
