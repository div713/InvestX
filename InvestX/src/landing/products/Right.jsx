function Right({ image_url, productName, productDesc, link1 }) {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col-4 mt-3 p-5 text-start">
          <h2 className="fs-2 mb-3 mt-5 ">{productName}</h2>
          <p>{productDesc}</p>
        </div>
        <div className="col-8 mt-5 p-5">
          <img src={image_url} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Right;
