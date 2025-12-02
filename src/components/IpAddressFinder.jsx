import axios from "axios";
import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

const IpAddressFinder = () => {
    const [ipDetail, setIpDetail] = useState({});
    

    const fetchIP = async () => {
        const response = await axios.get("https://ipapi.co/json/")
            .then((res) => {
                setIpDetail(res.data);

            })

            .catch((err) =>
                console.log(err)
            );
    }


    useEffect(() => {
        fetchIP();
    }, []);

    

    return (
        <div className="flex flex-row gap-10 p-10 border-2 border-black">

            {/* LEFT SIDE */}
            <div className="left">
                <h4>What is my IPv4 address?</h4>
                <h1 id="ip">{ipDetail.ip}</h1>

                <h4>Approximate location:</h4>
                <p>
                   {ipDetail.city}, {ipDetail.region},
                        {ipDetail.country_name}
                </p>

                <h4>Internet Service Provider (ISP):</h4>
                <p>{ipDetail.org}</p>
            </div>

           
            </div>
    );
}
export default IpAddressFinder;
