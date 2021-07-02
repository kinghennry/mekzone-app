import contactData from "../../data/contactInfo/contactInfo";
import ContactInfoItem from "./ContactInfoItem";
import "./contactinfo.css";
import CenterInfo from "../../container/CenterInfo/CenterInfo";
export default function ContactInfo() {
  return (
    <section className="contact__Details">
      <div className="container px">
        <CenterInfo
          title="We are a full-service creative agency"
          text="Our team of designers, developers and creatives are perfectionists
            who love what they do and love where they work"
        />
        <div className="grid">
          {contactData &&
            contactData.map((single, key) => {
              return (
                <div key={key} className="col mb" data-aos="fade-up">
                  <ContactInfoItem data={single} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
