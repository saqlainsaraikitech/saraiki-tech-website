import { MessageCircle, Mail } from 'lucide-react';
import { waLink, WA_DISPLAY, CONTACT_EMAIL } from '../data/site';
import { Reveal, SectionHead } from '../components/ui';

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Contact</span>
            <h1>Baat <mark>karein.</mark></h1>
            <p className="page-sub">
              Course mein enroll hona hai, koi sawal hai, ya custom prompt chahiye —
              seedha WhatsApp par message karein. Hum khud jawab dete hain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <a
                className="contact-card wa"
                href={waLink('Assalam o Alaikum! Mujhe Saraiki Tech se rabta karna hai.')}
                target="_blank" rel="noopener"
              >
                <span className="cc-ico2"><MessageCircle size={28} /></span>
                <h3>WhatsApp</h3>
                <p className="big">{WA_DISPLAY}</p>
                <p className="muted">Tez tareen jawab — aam tor par usi din.</p>
                <span className="btn btn-wa">Chat Shuru Karo</span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a className="contact-card" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="cc-ico2 alt"><Mail size={28} /></span>
                <h3>Email</h3>
                <p className="big small">{CONTACT_EMAIL}</p>
                <p className="muted">Tafseeli sawalat ya business inquiries ke liye.</p>
                <span className="btn btn-dark">Email Karo</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="hours-note">
              <SectionHead
                eyebrow="Timing"
                title="Jawab <mark>kab</mark> milega?"
                center
              />
              <p className="center muted" style={{ maxWidth: 560, margin: '0 auto' }}>
                WhatsApp messages ka jawab aam tor par <b>usi din</b> mil jata hai.
                Raat gaye messages ka jawab agli subah — lekin jawab zaroor milta hai.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
