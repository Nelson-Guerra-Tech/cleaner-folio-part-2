import styled from 'styled-components';
import { contact } from '../../portfolio';

import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>📫 Contact</h2>
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}

      <div className='contact-info-container'>
        <ContactContainer>
          <div className='contact-content' data-aos='fade-up'>
            <p>
              🤝 Send me an email at
              <span> nelsonguerra.tech@outlook.com</span>
            </p>

            <FormContainer>
              <form
                action='https://getform.io/f/70f926b2-9884-46bc-a1a9-f1e7b4916c64'
                method='POST'
              >
                <input type='text' name='name' placeholder='Name' required />
                <input type='email' name='email' placeholder='Email' required />
                <textarea
                  name='message'
                  placeholder='Type your message...'
                  required
                />
                <button className='btn btn--outline'>Send Message</button>
              </form>
            </FormContainer>
          </div>
        </ContactContainer>
      </div>
    </section>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin: 2rem 0.1rem;
`;

const FormContainer = styled.div`
  display: flex;

  > form {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  > form > input {
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    border: 1px solid;
    padding: 0.5rem;
  }

  > form > textarea {
    width: 100%;
    height: 8rem;
    border: 1px solid;
    border-radius: 8px;
    resize: none;
    padding: 0.5rem;
  }

  > form > button {
    width: 100%;
    margin: 0;
  }
`;
