function Pricing() {
    return ( 
        <div className="container p-3">
            <div className="row">
                <div className="col-4 p-3">
                    <h4 className="text-start">Unbeatable Pricing</h4>
                    <p className="text-start mt-2 mb-2">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className="text-start">
                        <a href="" style={{textDecoration:"none"}}>See Pricings<i class="fa-solid fa-arrow-down"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6 p-3">
                    <div className="row">
                        <div className="col border">
                            <h3>&#8377;0</h3>    
                            <p className="mt-2">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border">
                            <h3>&#8377;20</h3>    
                            <p className="mt-2">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;