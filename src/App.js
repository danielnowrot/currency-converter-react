import { Form } from "./Form"
import { currencies } from "./Currencies/currencies";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Header title="Przelicz sobie pieniążki" />
      <Form result={result} calculateResult={calculateResult} />
      <Footer title="Kursy aktualne na dzień 27.11.2022" />
    </Container>
  );
}

export default App;
