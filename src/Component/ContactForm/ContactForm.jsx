// must install npm i lottie-react and choice the animation from this link

import Lottie from "lottie-react";
import send from "./Animation - 1703957134964.json";
import "./ContactForm.scss";
import { ValidationError, useForm } from '@formspree/react';


const ContactForm = () => {

  const [state, handleSubmit] = useForm("myyrykkk");
  
  return (
    <>
      <div className="sendEmail ">
        <h4>Send Me Email</h4>

        <form onSubmit={handleSubmit}>

          <div>
            <label>Your Name :</label>
            <input type="text" name="user_name" id="name" required />
            <ValidationError prefix="Name" field="text" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email">Your Email :</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label>Message :</label>
            <textarea id="message" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="send ">
            <input type="submit" disabled={state.submitting} className="submit" />
          </div>
          {state.succeeded && (

            <p>
              <Lottie animationData={send} classID="lottie"  style={{ height: 36 }}/>
              Your message has been sent successfully 👌
            </p>
          )}

        </form>

      </div>
    </>
  );
};

export default ContactForm;
