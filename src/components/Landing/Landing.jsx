import React, { Component } from 'react'
import LandingHeader from './LandingHeader/LandingHeader'
import LandingBody from './LandingBody/LandingBody'
import LandingNavbar from "./LandingNavbar/LandingNavbar";

export class Landing extends Component {

   render() {
      return (
         <div>
            <LandingNavbar />
            <LandingHeader />
            <LandingBody />
         </div>
      )
   }
}

export default Landing
