import React from "react";
import style from "./style/app.module.css";
import { Result, Translation } from "../components/Card";
import Button from "../components/Button";
import { BsMic } from "react-icons/bs";
import Amount from "../components/Amount";
import Options from "../components/Options";

const App = ({ amount }) => {
  return (
    <section className={style.root}>
      <div className={style.resultRoot}>
        <Result title="Amount">
          <Amount
            defaultValue={amount}
            type="text"
            className={style.h1}
            placeholder={!amount ? "NGN50,000" : amount}
            disabled
          />
        </Result>
        <Translation />
      </div>
      <Options className={style.inputRoot} />
      <Button className="btn--rounded-md btn--primary">
        <BsMic />
      </Button>
    </section>
  );
};

export default App;
