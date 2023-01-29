import { Form } from "./Form"
import { useCurrencies } from "./data/useCurrencies";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { Clock } from "./Clock";
import { useState } from "react";
import GlobalStyle from "./GlobalStyles/globalStyles";

function App() {
  const [result, setResult] = useState();
  const ratesData = useCurrencies();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <main>
    <GlobalStyle />
    <Container>
      <Clock />
      <Header title="Przelicz sobie pieniążki" />
      <Form result={result} calculateResult={calculateResult} ratesData={ratesData} />
      <Footer title="Kursy aktualne na dzień " ratesData={ratesData} />
    </Container>
    </main>
  );
}

export default App;
