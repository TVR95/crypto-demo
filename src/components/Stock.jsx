import React, { useEffect, useState } from "react";

// No idea why axios doesn't work here
function Stock(props) {

    const [data, setData] = useState({
        items: null,
        isLoaded: false
    });

    useEffect(() => {
        const fetchData = async () => { await fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/' + props.token).then(result => {
            return result.json();
        }).then(result => {
            setData({items: result, isLoaded: true});
        })}

        fetchData();

        const interval = setInterval(fetchData, 1000);

        return () => {
            clearInterval(interval);
            data.isLoaded = false;
        };
    }, []);

    return (
        <div className = "stock-container">
            <div className="stock-fiat">
                <h4>{props.name} to {props.currency}</h4>
            </div>
            {data.isLoaded ?
            (
            <div className="stock-price">
                <div className="stock-last">
                    <h4>Last price</h4>
                    <h1>{data.items.last}</h1>
                </div>
                <div className="today-open">
                    <h4>Today's Open</h4>
                    <h2>{data.items.open.day}</h2>
                </div>
                <div className="today-high">
                    <h4>Today's High</h4>
                    <h2>{data.items.high}</h2>
                </div>
                <div className="today-low">
                    <h4>Today's Low</h4>
                    <h2>{data.items.low}</h2>
                </div>
                <div className="day-average">
                    <h4>24h Average</h4>
                    <h2>{data.items.averages.day}</h2>
                </div>
                <div className="volume">
                    <h4>Global Volume</h4>
                    <h2>{data.items.volume}</h2>
                </div>
            </div>
            ) : <h1>No Data</h1>}
        </div>
    );
}

export default Stock;