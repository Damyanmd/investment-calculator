import logo from "./assets/investment-calculator-logo.png";
import SubmitForm from "./components/SubmitForm";
import { useState } from "react";
import TableInfo from "./components/TableInfo";

function App() {
  const [data, setData] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavingsData;
    const yearlyContribution = +userInput.yearlySavingsData;
    const expectedReturn = +userInput.expectedInterestData / 100;
    const duration = +userInput.investmentDurationData;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setData(yearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <SubmitForm onCalculate={calculateHandler} />
      {data && (
        <TableInfo
          yearlyData={data}
          initialInvestment={userInput.currentSavingsData}
        />
      )}
    </div>
  );
}

export default App;
