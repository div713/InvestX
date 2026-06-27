import Hero from "./Hero";
import Left from "./Left";
import Right from "./Right";
import Openaccount from "../Openaccount";

function Productpage() {
  return (
    <>
      <Hero></Hero>
      <Left
        image_url={"/media/images/investments-stocks.png"}
        productName={"Stocks"}
        productDesc={
          "Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
        }
      ></Left>
      <Right
        productName={"Direct mutual funds"}
        productDesc={
          "Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year."
        }
        image_url={"/media/images/investments-mf.png"}
      ></Right>
      <Left
        image_url={"/media/images/investments-fo.png"}
        productName={"Futures & Options"}
        productDesc={
          "Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE."
        }
      ></Left>
      <Right
        image_url={"media/images/ipo-products.png"}
        productName={"IPO"}
        productDesc={
          "Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app. "
        }
      ></Right>
      <Left
        image_url={"/media/images/image.png"}
        productName={"Gift stocks"}
        productDesc={
          "Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."
        }
      ></Left>
      <Right
        productName={"Fixed Income"}
        productDesc={
          "Invest in bonds with yields better than bank FDs guaranteed by the Government of India.Govt and Gold electronically and gain market returns + fixed 2.5% per year on the invested amount, guaranteed by the Government of India"
        }
        image_url={"/media/images/investments-income.png"}
      ></Right>
      <Openaccount></Openaccount>
    </>
  );
}

export default Productpage;
