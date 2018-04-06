import React, { Component } from "react";

class Bookings extends Component {
  render() {
    return (
      <div>
        <h2>Make a booking.</h2>
        <p>
          We are located in Surrey Hills, Victoria. If you have any questions please <a href="#/contact">contact us</a>.
        </p>
        <p>Our hours are as follows:</p>
        <p>Monday: 3:00pm - 6:00m</p>
        <p>Tuesday: 4:00pm - 7:00pm</p>
        <p>Thursday: 9:30am – 11:30am & 4:00pm - 7:00pm</p>
        <p>Friday: 9:30am – 11:30am</p>
        <iframe src='https://ali8un.cliniko.com/bookings?business_id=53165&practitioner_id=79869&appointment_type_id=235132&embedded=true'
        frameborder='0' scrolling='auto' width='100%' height='1000'></iframe>
      </div>
    );
  }
}

export default Bookings;
