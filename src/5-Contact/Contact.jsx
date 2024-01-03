import "./Contact.scss"
import ContactForm from "../Component/ContactForm/ContactForm"
import Lottie from "lottie-react";
import aboutAnimat from "../Component/animation/contact.json"
import { Background } from "@tsparticles/engine";

const Contact = ({ state }) => {
    return (
        <div className={`contacts ${state === 4 ? "apear" : "hide"}`} id="MyContact">
            <h3><span>C</span>ontact</h3>
            <div className="main">
                <div className="form ">
                    <ContactForm />
                </div>
                <div className="animy">
                <Lottie animationData={aboutAnimat} style={{ width: 350 }} />;
                </div>
            </div>
        </div>
    );
}

export default Contact;
