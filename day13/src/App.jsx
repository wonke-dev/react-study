import { useState } from "react";
import "./App.css";

function CurrenyInput({ currency, value, onChange }) {
  return (
    <div>
      <lable>{currency} : </lable>
      <input
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

const exChange = 1300;
function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / exChange,
      });
    } else {
      setState({
        krw: value * exChange,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrenyInput currency={"krw"} value={state.krw} onChange={onChange} />
      <CurrenyInput currency={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
