export default function User_Inputs() {
    
  return (
    <div id="user-input">
        <div className="input-group">
            <label>INITIAL INVESTMENT
            <input type="number"/>
            </label>
            <label>ANNUAL INVESTMENT
            <input type="number"/>
            </label>
            
        </div><br /><br />
        <div className="input-group">
        <label>EXPECTED-RETURN
            <input type="number" />
            </label>

            <label>DURATION
            <input type="number" />
            </label>
        </div>
      
    </div>
  )
}
