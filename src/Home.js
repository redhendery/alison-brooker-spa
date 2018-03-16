import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="image_div">
        <div class="clearfix">
          <img class="img1" src="/logo_small.jpg" alt="Quantum Network Spinal Logo"></img>
          <h3>Network Spinal and Somato Respiratory Integration</h3>
          <p>
            Network Spinal (NS) and Somato Respiratory Integration (SRI) are two techniques
            developed by Dr Donald Epstein (Chiropractor) over the last 30 years. Both bring increased
            cortical (brain) awareness and maximise communication between the subsystems of the
            body. NS Chiropractic utilises specific light
            touch mainly around the areas where the meningeal coverings of the spinal cord anchor into
            the spinal column. SRI (literally ‘body breath integration’) connects breath with touch on the
            body and movement. Both techniques weave together to advance people through the three
            Levels of Care of Network Spinal Chiropractic.
          </p>
        </div>
        <div class="clearfix">
          <img class="img2" src="/profile.png" alt="Dr. Alison Brooker"></img>
          <h3>Dr Alison Brooker Chiropractor</h3>
          <p>
            Alison first considered studying Chiropractic in her final year of high school. Instead she ended up
            studying Podiatry. Some years later it was no longer enough. So, when she asked herself “if there
            were no ifs, ands, buts or maybes in this world…no barriers…what would I want to be doing?” the
            unequivocal answer was “be a Network Spinal Chiropractic practitioner”. The following year Alison
            began the first of 5 years of chiropractic study at RMIT University (Melbourne) to make it happen.
            And it was totally worth it. Now as the principle Chiropractor at Quantum Network Spinal, Alison
            delights to go to work each day. Seeing the changes in people spines and lives is an amazing
            privilege. A keen seminar attendee, Alison is continually refining and updating her skills. Outside of
            work Alison loves hanging out with her nieces, nephews, great nieces and great nephews (we all
            LOVE waterslides!), playing table tennis and walking her 2 Labradoodles (Max and Simba).
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
