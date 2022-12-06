import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p className="form__paragraph">
                    <label><span className="form__labelText">Wymień:</span>
                        <input 
                        className="form__field" 
                        value={amount}
                        onChange={({target}) => setAmount(target.value)}
                        type="number" 
                        min="1" 
                        step="0.01"
                        placeholder="wpisz kwotę" 
                        autoFocus
                        required  />
                        <strong> PLN </strong>
                    </label>
                </p>
                <p>
                    <label><span className="form__labelText">Na:</span>
                        <select 
                        className="form__select"
                        value={currency}
                        onChange={({target}) => setCurrency(target.value)}
                        >
                            {currencies.map(currency => (

                                <option
                                key={currency.id}
                                value={currency.short}
                                >
                                    {currency.name} ({currency.short})
                                </option>
                            ))};
                          
                        </select>
                    </label>
                </p>
                <button className="form__button">Oblicz</button>
                <p>
                    <span className="form__resultText">Wynik: <strong></strong></span>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;