import { useState } from 'react';
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Table from "./components/Table/Table";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment : 15000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  });

  const changeData = (data, value) => {
    setInvestmentData(prevInvestmentData =>  {
      return{
        ...prevInvestmentData,
        [data]: +value
      }
    })
  };

  return (
    <>
      <Header></Header>
      <UserInput onChange={changeData} userData={investmentData}></UserInput>
      {!investmentData.duration>0 && <h3 className='center'>Investment year should be greater than zero</h3>}
      {investmentData.duration>0 && <Table investment={investmentData}></Table>}
    </>
  )
}

export default App
