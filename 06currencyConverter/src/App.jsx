import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <>
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
         style={{ backgroundImage: `url('https://images.pexels.com/photos/19955948/pexels-photo-19955948/free-photo-of-snow-on-hill-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')` }}>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
          <div className='w-full mb-1'>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
          />
          </div>
          <div className="relative w-full h-0.5 my-4">
            <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-2 py-0.5 rounded-md" onClick={swap}>swap</button>
          </div>
          <div className="w-full mt-1 mb-4"></div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 mt-4 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
    </>
  );
  
}

export default App;
