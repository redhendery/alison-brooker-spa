import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Please contact us for enquiries and bookings.</h2>
        <p>We are located at 288a Mont Albert Road in Surrey Hills, Victoria.</p>
        <p><i class="fa fa-phone fa-2x" aria-hidden="true">
          <span itemProp="telephone"><a href="tel:+61398302484">
            03-9830-2484
          </a></span>
        </i></p>
        <p><i class="fa fa-envelope-o fa-2x" aria-hidden="true">
          <span itemProp="email"><a href="mailto:info@quantumns.com.au">
            Email Us
          </a></span>
        </i></p>
      </div>
    );
  }
}

export default Contact;
