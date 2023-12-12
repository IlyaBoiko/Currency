import { createContext, useState } from "react";


export const CurrencyContext = createContext();



const CurrencyProvider = ({children}) => {

    const [fromCurrency, setFromCurrency] = useState(
		"🇻🇮 USD - United States Virgin Islands"
	);
	const [toCurrency, setToCurrency] = useState("🇨🇽 AUD - Christmas Island");
    const [firstAmount, setFirstAmount] = useState('');
	const value = {
		fromCurrency,
		setFromCurrency,
		toCurrency,
		setToCurrency,
		firstAmount,
		setFirstAmount,
	};


    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export default CurrencyProvider;