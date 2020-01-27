import React from "react";

import Stock from "./Stock"

function Stocks() {
    return (
        <div className="stocks">
            <Stock token="BTCUSD" name="Bitcoin" currency="Dollar" />
            <Stock token="ETHUSD" name="Ethereum" currency="Dollar" />
            <Stock token="LTCUSD" name="Litecoin" currency="Dollar" />
            <Stock token="BCHUSD" name="Bitcoin Cash" currency="Dollar" />
        </div>
    );
}

export default Stocks;