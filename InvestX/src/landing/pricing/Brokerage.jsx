function Brokerage() {
    return (
        <div className="container mb-5 border-bottom border-top">
            <div className="row p-3">
                
                <div className="col-4 p-1">
                    <img src="/media/images/pricingEquity.svg" alt="equity" />
                    <h3>Free Equity Delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                
                <div className="col-4 p-1">
                    <img src="/media/images/other-trades.svg" alt="fno" />
                    <h3>Intraday and F&O Trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                
                <div className="col-4 mb-5 p-1">
                    <img src="/media/images/pricingEquity.svg" alt="mutual-funds" />
                    <h3>Free Direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                <p className="text-muted">Apart from this, STT/CTT, Transaction Charges, GST, SEBI charges, Stamp Charges are all applied as per rules and regulatories.
                    (Read SEBI Guidelines, NSE, BSE rules)</p>
            </div>
            <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
        </div>
    );
}

export default Brokerage;