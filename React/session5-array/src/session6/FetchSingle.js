import { useState } from "react";

function FetchSingle() {
    const [data, setData] = useState(null);
    const handleClick = async () => {
        try {
            const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
            const json = await resp.json();
            setData(json);
        } catch (error) {

        }
    }
    return (
        <div>
            <button className="btn btn-primary w-100" onClick={handleClick}>
                Get Nasa Data</button>
            {
                data &&
                <div className="container">
                    <h3>{data.title}</h3>
                    <img src={data.url} alt={data.title} />
                    <p>{data.explanation}</p>
                    <hr />
                    <h3>{data.copyright}, {data.date}</h3>
                </div>
            }
        </div>
    );
}

export default FetchSingle;