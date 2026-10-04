import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, Copy, Check, BellRing, MessageCircle, Link as LinkIcon } from 'lucide-react';
import { waLink, WA_DISPLAY, SOCIAL_LINKS } from '../data/site';

/* Brand icons (lucide mein brand icons nahi hote) — simple-icons paths */
const BRAND_PATHS = {
  Whatsapp: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  Facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  Tiktok: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
};
function BrandIcon({ name, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={BRAND_PATHS[name]} />
    </svg>
  );
}
export function SocIcon({ name, size = 17 }) {
  if (BRAND_PATHS[name]) return <BrandIcon name={name} size={size} />;
  if (name === 'MessageCircle') return <MessageCircle size={size} />;
  return <LinkIcon size={size} />;
}

/* Social icon -> official brand button class */
const SOC_CLASS = { Whatsapp: 'soc-wa', Facebook: 'soc-fb', Youtube: 'soc-yt', Tiktok: 'soc-tt' };

/* Social follow box — har prompt post ke neeche + jahan chahiye.
   WhatsApp Channel ko priority: sab se pehle aur sab se bara button. */
export function FollowBox() {
  const [wa, ...rest] = SOCIAL_LINKS;
  return (
    <div className="follow-box">
      <span className="fb-ico"><BellRing size={22} /></span>
      <h3>Saraiki Tech ko Follow Karo</h3>
      <p>Naye master prompts aur courses ki update sab se pehle pao.</p>
      <div className="follow-btns">
        <a className={`soc-btn soc-btn-lg ${SOC_CLASS[wa.icon] || ''}`} href={wa.url} target="_blank" rel="noopener">
          <span className="soc-ico"><SocIcon name={wa.icon} size={19} /></span> {wa.name}
        </a>
        {rest.map((s) => (
          <a key={s.name} className={`soc-btn ${SOC_CLASS[s.icon] || ''}`} href={s.url} target="_blank" rel="noopener">
            <span className="soc-ico"><SocIcon name={s.icon} size={16} /></span> {s.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* Footer social icon row — official brand colors */
export function SocialRow() {
  return (
    <div className="soc-row">
      {SOCIAL_LINKS.map((s) => (
        <a key={s.name} className={`soc-tile ${SOC_CLASS[s.icon] || ''}`} href={s.url} target="_blank" rel="noopener" aria-label={s.name} title={s.name}>
          <SocIcon name={s.icon} size={16} />
        </a>
      ))}
    </div>
  );
}

/* Scroll-reveal wrapper */
export function Reveal({ children, delay = 0, y = 28, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Section heading block */
export function SectionHead({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={center ? 'center' : ''}>
      <span className="eyebrow"><span className="dot" />{eyebrow}</span>
      <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="sec-sub" style={center ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>{sub}</p>}
    </Reveal>
  );
}

/* FAQ accordion */
export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className={`faq-item${open === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {q}<Plus />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Big CTA banner */
export function CtaBanner({ title, text, waText }) {
  return (
    <section className="mx-sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="mx-cta">
            <div>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p>{text || 'WhatsApp par message karein — hum khud jawab dete hain, aam tor par usi din.'}</p>
            </div>
            <a className="btn btn-wa mx-cta-btn" href={waLink(waText || 'Assalam o Alaikum! Mujhe Saraiki Tech ke courses mein interest hai.')} target="_blank" rel="noopener">
              <span><small>WhatsApp par Rabta Karein</small><b>{WA_DISPLAY}</b></span>
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Copy-to-clipboard button for master prompts */
export function CopyButton({ text, label = 'Prompt Copy Karo' }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };
  return (
    <button className={`btn ${done ? 'btn-copied' : 'btn-amber'} copy-btn`} onClick={copy}>
      {done ? <Check size={17} /> : <Copy size={17} />}
      {done ? 'Copy Ho Gaya!' : label}
    </button>
  );
}

/* Scrolling strip */
const MQ_ITEMS = ['YouTube Automation', 'TikTok Automation', 'Facebook Automation', 'Viral AI Prompts', 'Faceless Content', 'Monetization'];
export function Marquee() {
  const row = [...MQ_ITEMS, ...MQ_ITEMS];
  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track">
        <span>{row.map((t, i) => <span key={i}>{t} <b>✦</b></span>)}</span>
      </div>
    </div>
  );
}
