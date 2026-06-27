import { useState } from "react";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((st, index) => {
          return <WatchlistItem stock={st} key={index}></WatchlistItem>;
        })}
      </ul>
    </div>
  );
};

const WatchlistItem = ({ stock, index }) => {
  const [showWatchlist, setshowWatchlist] = useState(false);

  const handlemouseEnter = (e) => {
    setshowWatchlist(true);
  };
  const handlemouseExit = (e) => {
    setshowWatchlist(false);
  };

  return (
    <li onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"></KeyboardArrowDown>
          ) : (
            <KeyboardArrowUp className="up"></KeyboardArrowUp>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlist && <WatchlistActions uid={stock.name}></WatchlistActions>}
    </li>
  );
};

const WatchlistActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy"
          placement="top"
          arrow={true}
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Sell"
          placement="top"
          arrow={true}
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow={true}
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon"></BarChartOutlined>
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow={true}
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz></MoreHoriz>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
