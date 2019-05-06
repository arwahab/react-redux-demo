import React from 'react';
import './Ninjas.css'

//functional (stateless) component only concerned with UI - we pass props in as param to the fucntoon 
const Ninjas = ({ninjas, deleteNinja}) => {
    // const ninjaList = ninjas.map(ninja => {
    //   if(ninja.age > 33){
    //     return (
    //       <div className="ninja" key={ninja.id}>
    //         <div>Name: { ninja.name }</div>
    //         <div>Age: { ninja.age }</div>
    //         <div>Belt: { ninja.belt }</div>
    //       </div>
    //     )
    //     }else{
    //         return null
    //     }  
    // })

    const ninjaList = ninjas.map(ninja => {
        // same logic as above, this one is just a if-statement using ternary operator
        return ninja.age > 33 ? (
         <div className="ninja" key={ninja.id}>
             <div>Name: { ninja.name }</div>
             <div>Age: { ninja.age }</div>
             <div>Belt: { ninja.belt }</div>
             <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
           </div> ): null 
    })
    return (
    <div className="ninja-list">
        { ninjaList }
    </div>
  )
}

export default Ninjas;
