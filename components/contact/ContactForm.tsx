import React from "react";
import styles from "@styles/Contact.module.scss";

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="topic" name="topic" id="topic" placeholder="Topic" />
      <textarea placeholder="Content"></textarea>
      <input type="submit" value="send" />
    </form>
  );
};

export default ContactForm;
