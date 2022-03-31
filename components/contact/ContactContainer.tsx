import React from "react";
import styles from "@styles/Contact.module.scss";
import HighlightedHeader from "@components/layout/HighlightedHeader";
import HeroImage from "@components/home/HeroImage";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <div className={styles.contactContainer}>
      <HighlightedHeader content="skontaktuj się ze mną" />
      <div className={styles.row}>
        <HeroImage isBackground={false} />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
