import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, BadgeCheck, Zap, MessagesSquare } from 'lucide-react';
import { TOOLS, useTools, toolPrice, toolWasPrice, toolSlug, waLink } from '../data/site';
import { Reveal, CtaBanner, SocIcon } from '../components/ui';

export default function Tools() {
  const [cat, setCat] = useState('All');
  const tools = useTools();
  const cats = ['All', ...new Set(tools.map((t) => t.cat).filter(Boolean))];
  const safeCat = cats.includes(cat) ? cat : 'All';
  const shown = safeCat === 'All' ? tools : tools.filter((t) => t.cat === safeCat);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Premium Tools</span>
            <h1>Pro tools, <mark>asaan qeemat.</mark></h1>
            <p className="page-sub">
              Asli premium subscriptions aur credits — tool chuno, Buy dabao, aur WhatsApp
              par access pao. Delivery main khud karta hoon, aam tor par 10 minute ke andar.
            </p>
            <div className="tl-trust">
              <span className="tl-chip"><BadgeCheck size={17} /> Asli products</span>
              <span className="tl-chip"><Zap size={17} /> 10 minute mein delivery</span>
              <span className="tl-chip"><MessagesSquare size={17} /> WhatsApp par order</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <Reveal>
            <div className="tl-filters">
              {cats.map((c) => (
                <button key={c} className={`tl-fchip${safeCat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </Reveal>
          <div className="tl-grid">
            {shown.map((t, i) => {
              const p = toolPrice(t);
              const was = t.deal ? toolWasPrice(t) : null;
              return (
                <Reveal key={t.name} delay={(i % 3) * 0.06}>
                  <div className="tl-card">
                    <div className="tl-top">
                      <span className="tl-cat">{t.cat}</span>
                      {t.deal && <span className="tl-deal"><Flame size={13} /> Limited Deal</span>}
                    </div>
                    <h3>{t.name}</h3>
                    <div className="tl-price">
                      <small>PKR</small>{p.toLocaleString('en-PK')}
                      {was && <s>PKR {was.toLocaleString('en-PK')}</s>}
                    </div>
                    <span className="tl-stock"><i />In Stock{t.stock ? ` (${t.stock})` : ''}</span>
                    <Link className="tl-link" to={`/tool/${toolSlug(t)}`}>
                      Mukammal details dekho <ArrowRight size={14} />
                    </Link>
                    <a
                      className="tl-buy"
                      href={waLink(`Assalam o Alaikum! Mujhe khareedna hai: ${t.name} (PKR ${p.toLocaleString('en-PK')})`)}
                      target="_blank" rel="noopener"
                    >
                      <SocIcon name="Whatsapp" size={17} /> Buy Now
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Koi tool <mark>list mein nahi?</mark>"
        text="Message karein — agar woh tool maujood hai to hum aap ke liye arrange kar sakte hain."
        waText="Assalam o Alaikum! Mujhe ek tool chahiye jo aap ki site par listed nahi hai."
      />
    </>
  );
}
