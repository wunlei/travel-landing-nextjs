import { useState } from "react";
import cn from "classnames";
import InputElement from "./Input";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";
import Checkbox from "./Checkbox";
import SelectElement from "./Select";
import s from "./CreateTourForm.module.scss";

const labelClass = s.formLabel;
const inputClass = s.formInput;

function CreateTourForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [commentary, setCommentary] = useState("");
  const [adultRadioValue, setAdultRadioValue] = useState("false");
  const [agreementValue, setAgreementValue] = useState(false);
  const [selectedDest, setSelectedDest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (form instanceof HTMLFormElement) {
      console.log(Object.fromEntries(new FormData(form)));
    }
  }

  function handleReset(e) {
    e.preventDefault();
    [
      setName,
      setEmail,
      setPhone,
      setDateFrom,
      setDateTo,
      setCommentary,
      setSelectedDest,
    ].forEach((setValue) => setValue(""));

    setAgreementValue(false);
    setAdultRadioValue("false");
  }

  return (
    <form
      className={cn("text_normal", s.form)}
      action="#"
      method="post"
      id="form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className={s.container}>
        <InputElement
          label="Имя"
          type="text"
          name="name"
          value={name}
          placeholder="Введите Ваше имя"
          labelClasses={[labelClass]}
          inputClasses={[inputClass]}
          onChange={(e) => setName(e.target.value)}
        />

        <SelectElement
          title="Направление"
          name="direction"
          value={selectedDest}
          options={["Горы", "Стамбул"]}
          placeholder="Куда хотите ехать"
          labelClasses={[labelClass]}
          selectClasses={[inputClass, "text_normal"]}
          onChange={(e) => setSelectedDest(e.target.value)}
        />

        <InputElement
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="example@mail.com"
          labelClasses={[labelClass]}
          inputClasses={[inputClass]}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputElement
          label="Телефон"
          type="tel"
          name="phone"
          value={phone}
          placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
          labelClasses={[labelClass]}
          inputClasses={[inputClass]}
          onChange={(e) => setPhone(e.target.value)}
        />

        <DateInput
          label="Дата от"
          name="date-from"
          value={dateFrom}
          labelClasses={[labelClass]}
          inputClasses={[inputClass]}
          onChange={(e) => setDateFrom(e.target.value)}
        />

        <DateInput
          label="Дата до"
          name="date-to"
          value={dateTo}
          labelClasses={[labelClass]}
          inputClasses={[inputClass]}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>

      <label className={labelClass}>
        Комментарий
        <textarea
          className={cn(inputClass, s.textarea)}
          name="commentary"
          value={commentary}
          rows={4}
          onChange={(e) => setCommentary(e.target.value)}
        ></textarea>
      </label>

      <fieldset className={s.setAgeContainer}>
        <legend className={s.setAgeContainerTitle}>Вам есть 18 лет?</legend>
        <div className={s.radiobtnContainer}>
          <RadioInput
            label="Да"
            name="adult"
            value="true"
            checked={adultRadioValue}
            onChange={(e) => setAdultRadioValue(e.target.value)}
          />
          <RadioInput
            label="Нет"
            name="adult"
            value="false"
            checked={adultRadioValue}
            onChange={(e) => setAdultRadioValue(e.target.value)}
          />
        </div>
      </fieldset>

      <Checkbox
        name="agreement"
        value="true"
        checked={agreementValue}
        onChange={(e) => setAgreementValue(e.target.checked)}
      >
        Нажимая кнопку, я принимаю условия{" "}
        <a className={s.linkAccent} href="#" target="_blank">
          Лицензионного договора
        </a>
      </Checkbox>

      <div className={s.btnsContainer}>
        <button className={cn(s.btnForm, s.btnFormSubmit)} type="submit">
          Найти тур
        </button>
        <button className={cn(s.btnForm, s.btnFormReset)} type="reset">
          Сбросить
        </button>
      </div>
    </form>
  );
}

export default CreateTourForm;
