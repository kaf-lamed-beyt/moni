import React from "react";
import { currencies, languages } from "../data";
import Amount from "./Amount";

// mapping the list of languages gotten from
// tuforty's API into this language select component
// passing and validating the props that are
// sent into these components with React's "prop-type" module

// mapping the list of languages gotten from
// tuforty's API into this language select component

const Options = ({ className }) => {
  const [currencyCode, setCurrencyCode] = React.useState("");
  const [language, setLanguage] = React.useState("");

  return (
    <div className={className}>
      <Amount type="number" placeholder="amount" />
      {/* languages */}
      <select
        name="languages"
        id="language_codes"
        className={`controls form-control`}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="" defaultValue>
          Language
        </option>
        {languages.map((currencyLang, index) => {
          return (
            <option value={currencyLang.code} key={index}>
              {language.lang}
            </option>
          );
        })}
      </select>
      {/* currency codes */}
      <select
        name="currencies"
        id="currency_codes"
        className={`controls form-control`}
        value={currencyCode}
        onChange={(e) => setCurrencyCode(e.target.value)}
      >
        <option value="" defaultValue>
          Currency
        </option>
        {currencies.map((currency, index) => {
          return (
            <option value={currency.currency_code} key={index}>
              {currency.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options;
