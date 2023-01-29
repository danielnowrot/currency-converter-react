import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useCurrencies = () => {
    const [ratesData, setRatesData] = useState({
        date: null,
        rates: {},
        status: "loading",
    });

    useEffect(() => {
        const dataApi = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success",
                });
            } catch (error) {
                setRatesData({
                    status: "error"
                });
            };
        };
        setTimeout(dataApi, 2000);
    },[]);
console.log(ratesData.status);
    return ratesData;
};
