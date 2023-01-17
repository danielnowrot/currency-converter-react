import "./style.css";
import { currencies } from "../Currencies/currencies";
import { Result } from "../Result";
import { useState } from "react";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p>
                <label className="form__label">
                    <span className="form__labelText">Wprowadź wartość*:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__input"
                        name="currencyValue"
                        type="number"
                        min="0.01"
                        step="any"
                        placeholder="PLN"
                        required />
                </label>
            </p>
            <p>
                <label className="form__label">
                    <span className="form__labelText">Wybierz walutę:</span>
                    <select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        className="form__select"
                        name="selectCurrency">

                        {currencies.map((currency => (
                            <option
                                key={currency.name}
                                value={currency.name}
                            >
                                {currency.description}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">POLICZ</button>
            </p>
            <p className="form__result">
                <Result result={result} />
            </p>
            <p className="form__infoText">
                * - pole wymagane
            </p>

        </form>
    )

}
