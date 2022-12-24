import React, { useEffect, useState } from 'react';

const Exercises = () => {

   /* const state = {
      date: new Date(),
      age: 0,
      name: 'Martin',
      lastName: 'San José'
   } */

   const [state, setState] = useState({
      date: new Date(),
      age: 0,
      name: 'Martin',
      lastName: 'San José'
   })

   const tick = () => {
      setState((prevState) => {
         let age = prevState.age + 1;

         return {
            ...prevState,
            date: new Date(),
            age
         }
      })
   }


   useEffect(() => {

      const timerID = setInterval(() => tick(), 1000)

      return () => {
         clearInterval(timerID);
      };

   }, []);


   return (
      <div>

         <h2>
            Hora Actual:
            {state.date.toLocaleTimeString()}
         </h2>

         <h3>
            {state.name} {state.lastName}
         </h3>

         <h1>
            EDAD: {state.age}
         </h1>

      </div>
   );
}

export default Exercises;
