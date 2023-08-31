import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
// import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <div className="contacts">
        <div>
          <a href="mailto:Hello@vinayaksingh.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:Hello@vinayaksingh.com">sumriddhi9118@gmail.com</a>
        </div>
      </div>
    </Container>
  );
}
