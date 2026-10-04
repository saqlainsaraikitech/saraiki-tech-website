import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Flame, Check, ShieldCheck, Truck, Clock3,
  Package, BadgePercent, ListChecks, MousePointerClick,
} from 'lucide-react';
import { TOOLS, toolPrice, toolWasPrice, toolSlug, waLink } from '../data/site';
import { Reveal, CtaBanner, SocIcon } from '../components/ui';

function useCountdown(iso) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!iso) return;
    const tick = () => {
      const ms = new Date(iso).getTime() - Date.now();
      setLeft(ms > 0 ? ms : 0);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);
  return left;
}

function fmtLeft(ms) {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600),
        m = Math.floor((s % 3600) / 60), ss = s % 60;
  const p2 = (n) => String(n).padStart(2, '0');
  return (d > 0 ? `${d}d ` : '') + `${p2(h)}h ${p2(m)}m ${p2(ss)}s`;
}

export default function ToolDetail() {
  const { slug } = useParams();
  const [tools, setTools] = useState(null);
  useEffect(() => {
    fetch('/tools.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setTools(j && Array.isArray(j.tools) && j.tools.length ? j.tools : TOOLS))
      .catch(() => setTools(TOOLS));
  }, []);

  const t = tools ? tools.find((x) => toolSlug(x) === slug) : null;
  const left = useCountdown(t?.dealEndsAt);
  const dealActive = !!(t?.deal && left !== null && left > 0);

  if (!tools) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Loading</span>
            <h1>Tool <mark>load ho raha hai…</mark></h1>
          </Reveal>
        </div>
      </section>
    );
  }

  if (!t) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Not found</span>
            <h1>Tool <mark>nahi mila.</mark></h1>
            <p className="page-sub">Ye product shayad hata diya gaya hai.</p>
            <Link className="btn btn-amber" to="/tools" style={{ marginTop: 8 }}>
              <ArrowLeft size={17} /> Tamam Tools
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  const d = t.details || {};
  const price = dealActive ? toolPrice(t) : t.deal ? toolWasPrice(t) : toolPrice(t);
  const was = dealActive ? toolWasPrice(t) : null;

  const meta = [
    d.duration && { icon: Clock3, k: 'Muddat', v: d.duration },
    d.warranty && { icon: ShieldCheck, k: 'Warranty', v: d.warranty },
    d.delivery && { icon: Truck, k: 'Delivery', v: d.delivery },
    { icon: Package, k: 'Stock', v: t.stock ? `In Stock (${t.stock})` : 'In Stock' },
  ].filter(Boolean);

  const sections = [
    d.features?.length && {
      icon: ListChecks, title: 'Kya Milega',
      items: d.features, bullet: <Check size={17} />,
    },
    d.warrantyRules?.length && {
      icon: ShieldCheck, title: 'Warranty Rules',
      items: d.warrantyRules, bullet: <ShieldCheck size={17} />,
    },
    d.howTo?.length && {
      icon: MousePointerClick, title: 'Istemaal Ka Tareeqa',
      items: d.howTo, bullet: <Check size={17} />,
    },
  ].filter(Boolean);

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <Reveal>
            <Link className="tl-crumb" to="/tools"><ArrowLeft size={15} /> Tamam tools</Link>
            <div className="tl-top" style={{ marginBottom: 14 }}>
              <span className="tl-cat">{t.cat}</span>
              {dealActive && (
                <span className="tl-deal"><Flame size={13} /> Limited Deal — {t.savePct}% bachat</span>
              )}
            </div>
            <h1>{t.name}</h1>
            {d.description && <p className="page-sub" style={{ marginBottom: 0 }}>{d.description}</p>}
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap tl-detail-grid">
          <div>
            <Reveal>
              <div className="tl-buybox">
                <div className="tl-price big">
                  <small>PKR</small>{price.toLocaleString('en-PK')}
                  {was && <s>PKR {was.toLocaleString('en-PK')}</s>}
                </div>
                {dealActive && left !== null && (
                  <div className="tl-count"><Flame size={15} /> Deal khatam hone mein <b>{fmtLeft(left)}</b></div>
                )}
                {t.deal && !dealActive && (
                  <div className="tl-count ended">Deal khatam — regular price lagu hai</div>
                )}
                {d.bulk?.length > 0 && (
                  <div className="tl-bulk">
                    <span><BadgePercent size={15} /> Bulk discount</span>
                    <div className="tl-bulk-chips">{d.bulk.map((b) => <span key={b}>{b}</span>)}</div>
                  </div>
                )}
                <a
                  className="tl-buy-big"
                  href={waLink(`Assalam o Alaikum! Mujhe khareedna hai: ${t.name} (PKR ${price.toLocaleString('en-PK')})`)}
                  target="_blank" rel="noopener"
                >
                  <SocIcon name="Whatsapp" size={20} /> WhatsApp par Buy Karo
                </a>
              </div>
            </Reveal>

            <div style={{ marginTop: 20 }}>
              {sections.map((s2) => (
                <Reveal key={s2.title}>
                  <div className="tl-spec">
                    <h3><s2.icon size={20} /> {s2.title}</h3>
                    <ul>
                      {s2.items.map((it) => (
                        <li key={it}><span className="tb">{s2.bullet}</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside>
            <Reveal delay={0.08}>
              <div className="tl-meta">
                {meta.map((m) => (
                  <div key={m.k} className="tl-meta-row">
                    <span><m.icon size={16} /> {m.k}</span>
                    <b>{m.v}</b>
                  </div>
                ))}
              </div>
              <div className="tl-note">
                <b>Order kaise karein</b>
                <p>Buy Now dabayein — WhatsApp khulega, aap ka order tayyar milega. Main payment confirm karke access deliver karta hoon, aam tor par kuch hi minute mein.</p>
              </div>
              <Link className="tl-link" to="/tools" style={{ marginTop: 20 }}>
                <ArrowLeft size={15} /> Tamam tools par wapas
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBanner
        title="Is tool ke baare mein <mark>sawal?</mark>"
        text="Kuch bhi poochein — compatibility, delivery time, ya bulk order."
        waText={`Assalam o Alaikum! Mujhe is tool ke baare mein sawal hai: ${t.name}`}
      />
    </>
  );
}
