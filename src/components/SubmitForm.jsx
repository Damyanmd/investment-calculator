import { useState } from "react";

const defaultUserInput = {
  currentSavingsData: 0,
  yearlySavingsData: 0,
  expectedInterestData: 0,
  investmentDurationData: 0
};

const SubmitForm = (props) => {
  const [formData, setFormData] = useState(defaultUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(formData)
  };

  const resetHandler = () => {
    setFormData(defaultUserInput);
  };

  

  const changeHandler = (input, value) => {
    setFormData((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              changeHandler("currentSavingsData", event.target.value)
            }
            value={formData.currentSavingsData}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              changeHandler("yearlySavingsData", event.target.value)
            }
            value={formData.yearlySavingsData}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              changeHandler("expectedInterestData", event.target.value)
            }
            value={formData.expectedInterestData}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              changeHandler("investmentDurationData", event.target.value)
            }
            value={formData.investmentDurationData}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default SubmitForm;
