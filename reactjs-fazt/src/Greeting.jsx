export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  const cambio = true;
  //JSX
  /*if(cambio){
          return <h1>Ejem Componente {cambio}</h1>
      }else{
          return <h1>Ejem Componente {name}</h1>
      }*/

  return (
    <h1>
      {title ? "Componente react True" : "Componente react False"},dice {name}
    </h1>
  );

  /*const user={
      firstName:'Ryan',
      secondName:'Ray'
    }
  
    return <div>
      <h1>{user.firstName}</h1>
      <h2>{user.secondName}</h2>
      </div>
  }*/
  /*
  function add(x,y){
      return x+y
  }
  return <h1>{add(10,20)}</h1>*/
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
