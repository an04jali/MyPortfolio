import React from 'react';

import "./Contacts.css";

function Contacts() {
  return (
    <div id="contact" className="contacts-container">
      <div className="leftContact">
        <img src= "https://static.vecteezy.com/system/resources/previews/000/181/546/non_2x/vector-contact-me.jpg" alt="Contact" />
      </div>
      <div className="rightContact">
        {/* Add your contact form or info here */}
        <form action="https://formspree.io/f/xqaybbeg" method='POST'>
         <input name="Username" type="text" placeholder='Name' />
         <input name="Email" type="email" placeholder='Email' />
        
         <textarea name="message" id="textarea" placeholder='message me' ></textarea>
         <button type="submit" className='btn1'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;