import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container">
      <div className="row mb-3 p-3">
        <div className="col text-start">
          <Link class="navbar-brand fs-2" to={"/"}>InvestX</Link>
          <p>&copy; 2026 - 2026, InvestX Broking Ltd. 
            All rights reserved.</p>
        </div>
        <div className="col text-start">
          <p>Company</p>
          <div className="row mt-2">
            <a className="footer-link" href="">About</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Philosophy</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Press & Media</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Careers</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">InvestX Cares(CSR)</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">InvestX.tech</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">Open Source</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">Referral Program</a>
          </div>
        </div>
        <div className="col  text-start">
          <p>Support</p>
          <div className="row mt-2">
            <a className="footer-link" href="">Contact Us</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Support Portal</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">How to file a complaint?</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Status of your Complaints</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Bulletin</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Circular</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">Z-Connect Blog</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">Downloads</a>
          </div>
        </div>
        <div className="col  text-start">
          <p>Account</p>
          <div className="row mt-2">
            <a className="footer-link" href="">Open Demat Account</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Minor Demat Account</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">NRI Demat Account</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">HUF Demat Account</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Commodity</a>
          </div>
          <div className="row mt-2">
            <a className="footer-link" href="">Dematerialisation</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">Fund Transfer</a>
          </div>

          <div className="row mt-2">
            <a className="footer-link" href="">MTF</a>
          </div>
        </div>

      </div>
      <p className="text-start mb-3" style={{color:"dark-grey"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <div className="row mt-2 mb-4">
            <div className="col">
                <a className="footer-link" href="">Terms & Conditions</a>
            </div>
            <div className="col">
                <a className="footer-link" href="">Policies And Procedures</a>

            </div>
            <div className="col">
                <a className="footer-link" href="">Privacy Policy</a>
            </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
