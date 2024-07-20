export default function User_Inputs({inputValues,onChange}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          INITIAL INVESTMENT
          <input
            type="number"
            name="initialInvestment"
            value={inputValues.initialInvestment}
            onChange={(event)=>onChange('initialInvestment',event.target.value)}
          />
        </label>
        <label>
          ANNUAL INVESTMENT
          <input
            type="number"
            name="annualInvestment"
            value={inputValues.annualInvestment}
            onChange={(event)=>onChange('annualInvestment',event.target.value)}
          />
        </label>
      </div>
      <br />
      <br />
      <div className="input-group">
        <label>
          EXPECTED-RETURN
          <input
            type="number"
            name="expectedReturn"
            value={inputValues.expectedReturn}
            onChange={(event)=>onChange('expectedReturn',event.target.value)}
          />
        </label>

        <label>
          DURATION
          <input
            type="number"
            name="duration"
            value={inputValues.duration}
            onChange={(event)=>onChange('duration',event.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
