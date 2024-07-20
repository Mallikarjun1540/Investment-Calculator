import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInputs }) {
  const resultData = calculateInvestmentResults(userInputs);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th> Year</th>
            <th>Inverstmet Value</th>
            <th>Intrest (Year)</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((yearData) => {
            const totalIntrest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

              const investedCapital=yearData.valueEndOfYear-totalIntrest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalIntrest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
