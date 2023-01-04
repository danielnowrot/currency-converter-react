import "./style.css"

const Form =() => (
<form className="form">
        <p>
            <label className="form__label">
                <span className="form__labelText">Wprowadź wartość*:</span>
                <input className="form__input" name="currencyValue" type="number" min="0.01" step="any"
                    placeholder="PLN" required/>
            </label>
        </p>
        <p>
            <label className="form__label">
                <span className="form__labelText">Wybierz walutę:</span>
                <select className="form__select" name="selectCurrency">
                    <option value="EUR">Euro</option>
                    <option value="GBP">Funt brytyjski (szterling)</option>
                    <option value="USD">Dolar amerykański</option>
                </select>
            </label>
        </p>
        <p>
            <button className="form__button">POLICZ</button>
        </p>
        <p>
            <span className="form__result">Policz coś</span>
        </p>
        <p className="form__infoText">
            * - pole wymagane
        </p>
    </form>
)

export default Form;