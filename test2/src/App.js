import './App.css';


const App = () => {
  return (
      <div className="App">
        <div className="content">
          <div>
            <div>Your full given name:</div>
            <div><input type="text"/></div>
          </div>
          <div>
            <div className="block">
              <div className='blockData'>
                <div>Date of Birth</div>
                <div><input type="date"/></div>
              </div>
              <div className='blockCountry'>
                <div>Country of residence or citizenship:</div>
                <div><input type="text"/></div>
              </div>
            </div>
            <div>
              <div>
                <div>What school do you plan to attend?</div>
                <div><input type="text"/></div>
              </div>
              <div>
                <div>Please take a moment to describe your intended area of study:</div>
                <div><textarea placeholder="Enter details here"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
