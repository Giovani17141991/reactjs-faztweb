import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";
//Document Object Model

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

const handleChange = (event) => {
  console.log(event.target.value + " :D");
};

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Jonathan Joestar",
    image: "https://robohash.org/user2",
  },
];

function Counter() {
  const [counter, setCounter] = useState(0);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
    <button onClick={()=>{
      setCounter(counter+1)
    }}>Sumar</button>

<button onClick={()=>{
      setCounter(counter-1)
    }}>Restar</button>

<button onClick={()=>{
      setCounter(0)
    }}>Reiniciar</button> */}
      <input
        onChange={(event) => {
          setMensaje(event.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje es:" + mensaje);
        }}
      >
        Save
      </button>
      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
      setCounter(counter+1)
    }}>Sumar</button>
    </div>
  );
}

// Greeting props="Valor"
root.render(
  <>
    <Counter />
    {/* {users.map((user, i) => {
      return (
        <div key={i}>
          <h1 >{user.name}</h1>;
          <img src={user.image}/>
        </div>
      );
    })} */}

    {/* <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludar" />

    <input id="hola" onChange={handleChange} />

    <form onSubmit={(event)=>
      {event.preventDefault()
      console.log("enviadooo")}}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form> */}

    {/* <Button text='Click'/>
  <Button text='' name='Joe'/>
  <Button /> */}
    {/* <Greeting title="hola" name="Joe" />
    <Greeting x="bye" />
    <Greeting y={30} />
    <Greeting z={true} />
    <Greeting z={[1, 2, 3]} />
    <Greeting title=" mundo" name="Ryan" />
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 street", city: "new york" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
    name="Joe JAJA"
    amount={1000}
    married={false}
    points={[100, 3.14]}
    address={{ street: "321 av street", city: "new york" }}
    /> */}
  </>
);
