import { useState, useEffect, use } from 'react';

const useExchangeRates = () => {
  const [exchangeRatesState, setExchangeRatesState] = useState('LOADING');
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/7d8e1fb29066ccf8eb3b3e9b/latest/USD');
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        setExchangeRatesState(data);
      } catch (err) {
        console.error('Fetch exchange rates error:', err);
        setExchangeRatesState('ERROR');
        setErrorMsg(err.message);
      }
    };

    fetchExchangeRates();
  }, []);

  return {
    exchangeRatesState,
    errorMsg
  };
};

export default useExchangeRates;
