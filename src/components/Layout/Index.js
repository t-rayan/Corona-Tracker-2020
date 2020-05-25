import React, { Component } from "react";

import {
  Cards,
  LineChart,
  DoughnutChart,
  AllCountry,
  CountryDetails,
} from "../../components";
import styles from "../Layout/Index.module.css";

export default class Index extends Component {
  state = {
    country: "",
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.global}>
          <div className={styles.globalContainer}>
            <Cards />
            <LineChart />
            <DoughnutChart />
          </div>
        </div>
        <div className={styles.countryData}>
          <div className={styles.countryContainer}>
            <CountryDetails />
            <AllCountry />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// import React, { useState, useEffect } from "react";
// import {
//   Cards,
//   LineChart,
//   DoughnutChart,
//   AllCountry,
//   CountryPicker,
// } from "../../components";
// import { Consumer } from "../../Context";
// import styles from "../Layout/Index.module.css";
// import Loader from "../Loader/Loader";

// const Index = () => {
//   const [country, setCountry] = useState("");

//   handleCountryChange = (country) => {
//     console.log(country);
//   };

//   const ex = <CountryPicker handleCountryChange={handleCountryChange} />;

//   return (
//     <React.Fragment>
//       <div className={styles.global}>
//         <div className={styles.globalContainer}>
//           <Cards />
//           <LineChart />
//           <DoughnutChart />
//         </div>
//       </div>
//       <div className={styles.countryData}>
//         <div className={styles.countryContainer}>
//           {ex}
//           {/* <CountryPicker /> */}
//           <AllCountry />
//         </div>
//       </div>
//     </React.Fragment>
//   );

//   // return (
//   //   <Consumer>
//   //     {(value) => {
//   //       const isEmpty = (obj) => {
//   //         for (let key in obj) {
//   //           if (obj.hasOwnProperty(key)) return false;
//   //         }
//   //         return true;
//   //       };
//   //       console.log(value);

//   //       const { global_data } = value;
//   //       const isTrue = isEmpty(global_data);

//   //       //console.log(Object.values(value));

//   //       if (isTrue) {
//   //         return <Loader />;
//   //       }

//   //       return (
//   //         <React.Fragment>
//   //           <div className={styles.global}>
//   //             <div className={styles.globalContainer}>
//   //               <Cards />
//   //               <LineChart />
//   //               <DoughnutChart />
//   //             </div>
//   //           </div>
//   //           <div className={styles.countryData}>
//   //             <div className={styles.countryContainer}>
//   //               <CountryPicker handleCountryChange={this.handleCountryChange} />
//   //               <AllCountry />
//   //             </div>
//   //           </div>
//   //         </React.Fragment>
//   //       );
//   //     }}
//   //   </Consumer>
//   // );
// };
// export default Index;
