import { currencies } from "../data/currencies";
import { Result } from "../Result";
import { useState } from "react";
import { Button, FormComponents, InfoText, Input, Label, LabelText, ResultComponents, Select } from "./styled";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(currency, amount);
    }

    return (
        <FormComponents onSubmit={onFormSubmit}>
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

                        {currencies.map((currency => (
                            <option
                                key={currency.name}
                                value={currency.name}
                            >
                                {currency.description}
                            </option>
                        )))}
                    </Select>
                </Label>
            </p>
            <p>
                <Button>POLICZ</Button>
            </p>
            <ResultComponents>
                <Result result={result} />
            </ResultComponents>
            <InfoText>
                * - pole wymagane
            </InfoText>

        </FormComponents>
    )

}
