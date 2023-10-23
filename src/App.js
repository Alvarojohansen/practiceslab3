import { useState } from "react";
import "./App.css";
import FormTask from "./components/formTask/FormTask";
import Login from "./components/login/Login";
import Table from "./components/table/Table";

function App() {
  const [isValid, setIsValid] = useState(false);

  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const onLongOutHandler = () => {
    console.log("sesion cerrada!")
    setIsValid(false);
  };

  const handleIsValidChange = (value) => {
    setIsValid(value);
    
    
  };

  const sumIncome = netIncomes.reduce((sum, item) => sum + item.income, 0);
  const averageIncome = sumIncome / netIncomes.length;
  return (
    <div className="App">
      <h1>Practica 2 obligatoria</h1>
      <h2>ejercicio 2</h2>
      <div className="ejer2">
        <Table netIncomes={netIncomes} />
        <p>Total de ingresos brutos: {averageIncome}</p>
      </div>
      <div>
        <h2>ejercicio 3</h2>
        <Login onIsValidChange={handleIsValidChange} />
      </div>
      {}
      <div>
        {isValid ? (
          <>
            <h2>ejercicio4</h2>
            <button onClick={onLongOutHandler}>Cerrar sesion</button>
            <FormTask />
          </>
        ) : (
          <p>
            Primero debe registrarse en el login para poder acceder a la
            practica 4
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
