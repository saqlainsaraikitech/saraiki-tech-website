import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { waLink } from '../data/site';
import { Reveal, SectionHead, CtaBanner } from '../components/ui';
import { ServiceCard } from '../components/cards';

export default function Services() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow light"><span className="dot" />Services</span>
            <h1>Kaam <mark>hum karein,</mark><br />faida aap uthayein.</h1>
            <p className="hero-sub">
              Website, AI content, Shopify store ya automation channel — jo kaam aap khud
              nahi kar sakte ya jis ka time nahi, wo hum kar ke dete hain.
            </p>
            <div className="hero-btns">
              <a className="btn btn-amber" href={waLink('Assalam o Alaikum! Mujhe Saraiki Tech ki services ka quote chahiye.')} target="_blank" rel="noopener">
                Quote Lo <ArrowRight size={17} />
              </a>
              <Link className="btn btn-ghost" to="/contact">Sawal Poochein</Link>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Kya Karwate Hain"
            title="Hamari <mark>services.</mark>"
            sub="Har service ke detail page par dekhein ke kya shamil hai, tareeqa kya hai, aur aksar pooche gaye sawalat."
            center
          />
          <div className="grid-3">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} s={s} delay={(i % 3) * 0.08} />)}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Project <mark>shuru karein.</mark>"
        text="Apna idea WhatsApp par bhejein — quote aur timeline aam tor par usi din mil jati hai."
        waText="Assalam o Alaikum! Mujhe apne project ka quote chahiye."
      />
    </>
  );
}
