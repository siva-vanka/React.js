import React from 'react'

const Map = () => {

    let array=[

       { name:"Anudeep",
            age:25,
            city:"pun"
    },

    {
        name:"siv",
            age:25,
            city:"HYD"
    },

    {
        name:"siree",
            age:25,
            city:"del"
    }
    ]
  return (
    <ul>


{array.map(function(element,index){
       return  <li key={index}>{element.name} {element.age} {element.city}</li>
    })}
    </ul>
    
   
  )
}

export default Map