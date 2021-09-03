import React, { Component } from "react";

export class DisplayData extends Component {
  render() {
    const { value } = this.props;
    const Arr = Object.values(value.data);
    Arr.forEach((element, key) => {
        // console.log(element.borders)
        (element.borders).map((ele, key) => {
            console.log(ele)
        })
    })
    return (
      <div>
        {Arr.map((element, key) => (
         <div className="container">
             <div className="image">
                <img src={element.flag}/>
             </div>
             <div className="name-captial">
                 <div className="name">
                     <p className="caption">Name</p>
                     <p>{element.name}</p>
                 </div>
                 <div className="name">
                  <p className="caption">Capital</p>
                  <p>{element.capital}</p>
                </div>
                <div className="name">
                  <p className="caption">Region</p>
                  <p>{element.region}</p>
                </div>
                <div className="name">
                  <p className="caption">SubRegion</p>
                  <p>{element.subregion}</p>
                </div>
                <div className="name">
                  <p className="caption">Population</p>
                  <p>{element.population}</p>
                </div>
                <div className="name">
                  <p className="caption">Languages</p>
                  <p>{element.languages[0].name}</p>
                </div>
                <div className="name">
                  <p className="caption">Borders</p>
                  <p>{element.borders}</p>
                </div>
                
             </div>
         </div>
        ))}
      </div>
    );
  }
}

export default DisplayData;
