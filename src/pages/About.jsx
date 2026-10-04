import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ArrowUpRight, Globe, Target, HeartHandshake, Rocket, GraduationCap, Wrench, FileText, LayoutDashboard } from 'lucide-react';
import { waLink } from '../data/site';
import { Reveal, SectionHead, CtaBanner } from '../components/ui';

const PILLARS = [
  { icon: GraduationCap, t: 'Courses', d: 'Step-by-step automation courses — YouTube, TikTok, Facebook. Sirf wohi parhaya jata hai jo khud test karke kaam karta dekha hai.' },
  { icon: FileText, t: 'Master Prompts', d: 'Viral AI content ke tested master prompts — blog ki surat mein, har prompt ke saath copy button aur istemaal ka asaan tareeqa.' },
  { icon: Wrench, t: 'Premium Tools', d: 'Pro AI tools aur subscriptions asaan qeemat par — order WhatsApp par, delivery aam tor par 10 minute ke andar.' },
  { icon: LayoutDashboard, t: 'Services', d: 'Websites, Shopify stores aur AI content systems — seedhi baat, wazeh qeemat, aur kaam khud kiya jata hai.' },
];

const VALUES = [
  { icon: Target, t: 'Seedhi Baat', d: 'Lambi theory nahi — wohi system jo khud test kar ke kaam karta dekha hai. Jo kaam nahi karta, woh hum parhate hi nahi.' },
  { icon: HeartHandshake, t: 'Apni Zaban', d: 'Angrezi tutorials mein kho jane ki zaroorat nahi. Sab kuch asaan Roman Urdu mein, taake har banda samajh sake.' },
  { icon: Rocket, t: 'Practical Focus', d: 'Har lesson ka maqsad ek hai: aap aaj kuch bana kar upload kar saken. Seekhna + karna, saath saath.' },
];

export default function About() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal>
              <Link className="tl-crumb" style={{ color: '#bcd8cf' }} to="/"><ArrowLeft size={15} /> Home</Link>
              <span className="eyebrow light"><span className="dot" />About</span>
              <h1>Saraiki Tech <mark>kyun?</mark></h1>
              <p className="hero-sub">
                Kyunke AI se kamane ka ilm har bande tak pohanchna chahiye — na sirf un tak
                jo angrezi courses afford kar sakte hain.
              </p>
              <div className="hero-btns">
                <a className="btn btn-wa" href={waLink('Assalam o Alaikum! Mujhe Saraiki Tech ke saath kaam karna hai.')} target="_blank" rel="noopener">
                  Saath Kaam Karein <ArrowRight size={17} />
                </a>
                <Link className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }} to="/courses">Courses Dekho <ArrowRight size={17} /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="about-founder-card">
                <span className="about-founder-eyebrow">Founder</span>
                <span className="about-founder-name">Saqlain Abid</span>
                <span className="about-founder-role">Shopify & WordPress Developer · AI Content Creator</span>
                <p>AI content creation aur automation par kaam karta hoon — faceless YouTube channels, TikTok automation, Facebook pages — aur yehi practical tajurba apne courses mein parhata hoon.</p>
                <a className="about-site-link" href="https://saqlainabid.com" target="_blank" rel="noopener">
                  <Globe size={15} /> saqlainabid.com <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Hamari Kahani"
            title="Maker ne banaya, <mark>marketer ne nahi.</mark>"
          />
          <div className="about-story" style={{ marginTop: 30 }}>
            <Reveal>
              <p>
                Saraiki Tech ek simple observation se shuru hua: zyada tar logon ko fancy
                agency nahi chahiye — unhein koi chahiye jo <b>waqai bana sakta ho</b>.
                Koi jo website ship kare, store set kare, content ka system banaye,
                aur masla aaye to available ho.
              </p>
              <p>
                Yehi hum karte hain. Har cheez jo hum bechte ya parhate hain, pehle khud
                istemaal karte hain — wohi tools jo clients ko deliver karte hain, wohi
                automation systems jo courses mein sikhate hain, wohi content workflows
                jo roz khud chalate hain.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Koi account manager nahi. Koi mushkil lafzon wale proposals nahi. Aap seedha
                usi se baat karte hain jo kaam kar raha hai, payment se pehle sab kuch dekhte
                hain, aur sirf tab pay karte hain jab khush hon.
              </p>
              <p>
                Website chahiye jo customers laye, store chahiye jo sote hue beche, ya skill
                chahiye sab kuch khud banane ki — aap sahi jagah hain.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec sec-tint" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Kya Karte Hain"
            title="Char satoon, <mark>ek team.</mark>"
          />
          <div className="grid-4" style={{ marginTop: 30 }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 4) * 0.08}>
                <div className="why-card">
                  <span className="why-ico"><p.icon size={22} /></span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Hamari Family"
            title="Milo <mark>DigitalMax</mark> se."
            sub="Hamari agency brand — websites, stores, AI content aur automation, English mein."
          />
          <Reveal>
            <div className="sister-card" style={{ marginTop: 30 }}>
              <div>
                <h3>DigitalMax</h3>
                <p>DigitalMax hamari full-service digital agency hai — business websites, Shopify stores, AI content systems, premium tools aur practical courses. Wahi mission, wahi team: real skills, imandaari se, zero fluff.</p>
              </div>
              <div className="sister-btns">
                <a className="btn btn-amber" href="https://digitalmax.pk" target="_blank" rel="noopener">
                  <Globe size={17} /> digitalmax.pk <ArrowUpRight size={15} />
                </a>
                <a className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }} href={waLink('Assalam o Alaikum! Mujhe DigitalMax ki services ke baare mein maloomat chahiye.')} target="_blank" rel="noopener">
                  Hello Karo <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec sec-tint" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Hamare Usool"
            title="Hum se <mark>kya umeed</mark> rakhein."
          />
          <div className="grid-3" style={{ marginTop: 30 }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 0.08}>
                <div className="why-card">
                  <span className="why-ico"><v.icon size={22} /></span>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Sath <mark>shuru</mark> karein."
        text="Sawal hai? Seedhi baat WhatsApp par."
        waText="Assalam o Alaikum! Mujhe Saraiki Tech ke baare mein maloomat chahiye."
      />
    </>
  );
}
