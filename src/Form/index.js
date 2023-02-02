import { Result } from "../Result";
import { useState } from "react";
import { Button, Wrapper, InfoText, Input, Label, LabelText, StyledResult, Select } from "./styled";

export const Form = ({ calculateResult, result, ratesData }) => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const status = ratesData.status;

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(currency, amount);
    };
    
    if (["loading", "error"].includes(status)) {
        return (
            <p>
                <Label>
                    <LabelText>
                        {status === "loading" ?
                            "Ładujemy potrzebne dane 😁" :
                            `Przepraszamy, ale coś poszło nie tak😞 
                        Sprawdź połączenie z internetem, albo spróbuj później.`
                        }
                    </LabelText>
                </Label>
            </p>
        );
    };

    return (
        <Wrapper onSubmit={onFormSubmit}>
            <p>
                <Label>
                    <LabelText>Wprowadź wartość*:</LabelText>
                    <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        name="currencyValue"
                        type="number"
                        min="0.01"
                        step="any"
                        placeholder="PLN"
                        required />
                </Label>
            </p>
            <p>
                <Label>
                    <LabelText>Wybierz walutę:</LabelText>
                    <Select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        name="selectCurrency">
                        {Object.keys(ratesData.rates).map((rates => (
                            <option
                                key={rates}
                                value={rates}
                            >
                                {rates}
                            </option>
                        )))}
                    </Select>
                </Label>
            </p>
            <p>
                <Button>POLICZ</Button>
            </p>
            <StyledResult>
                <Result result={result} />
            </StyledResult>
            <InfoText>
                * - pole wymagane
            </InfoText>
        </Wrapper>
    );
}

