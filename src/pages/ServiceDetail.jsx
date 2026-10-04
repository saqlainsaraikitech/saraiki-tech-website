import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { waLink } from '../data/site';
import { Reveal, SectionHead, Faq, CtaBanner } from '../components/ui';
import { ServiceCard, SvcIcon } from '../components/cards';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);

  if (!s) {
    return (
      <header className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow light"><span className="dot" />Nahi mila</span>
            <h1>Ye page <mark>maujud nahi.</mark></h1>
            <p className="hero-sub">Chalein aap ko wapas achhi cheezon ki taraf le chalte hain.</p>
            <Link className="btn btn-amber" to="/">Home <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </header>
    );
  }

  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <header className="course-hero">
        <div className="wrap">
          <Reveal>
            <Link className="back" to="/services"><ArrowLeft size={15} /> Tamam Services</Link>
            <span className="eyebrow light"><span className="dot" />{s.tag}</span>
            <div className="svc-hero-ico"><SvcIcon name={s.icon} size={34} /></div>
            <h1 dangerouslySetInnerHTML={{ __html: s.heroH }} />
            <p className="hero-sub">{s.heroSub}</p>
            <div className="hero-btns">
              <a className="btn btn-wa" href={waLink(s.waText)} target="_blank" rel="noopener">
                <MessageCircle size={17} /> Quote Lo
              </a>
              <Link className="btn btn-ghost" to="/contact">Sawal Poochein <ArrowRight size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </header>

      {s.image && (
        <div className="wrap">
          <Reveal><img className="course-feature" src={s.image} alt={s.name} style={{ marginTop: -10 }} /></Reveal>
        </div>
      )}

      {/* INCLUDED */}
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Shamil Hai" title="Is service mein <mark>kya milega.</mark>" center />
          <div className="grid-4">
            {s.included.map(([icon, t, d], i) => (
              <Reveal key={t} delay={(i % 4) * 0.07}>
                <div className="why-card">
                  <span className="why-ico"><SvcIcon name={icon} size={22} /></span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="sec sec-tint">
        <div className="wrap">
          <SectionHead eyebrow="Tareeqa" title="Kaam <mark>kaise hoga.</mark>" center />
          <div className="grid-4">
            {s.steps.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 4) * 0.07}>
                <div className="step-card">
                  <span className="step-n">{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap narrow">
          <SectionHead eyebrow="Sawal Jawab" title="Aksar pooche gaye <mark>sawalat.</mark>" center />
          <Faq items={s.faqs} />
        </div>
      </section>

      {/* RELATED */}
      <section className="sec sec-tint">
        <div className="wrap">
          <SectionHead eyebrow="Aur Dekhein" title="Doosri <mark>services.</mark>" center />
          <div className="grid-3">
            {related.map((r, i) => <ServiceCard key={r.slug} s={r} delay={(i % 3) * 0.08} />)}
          </div>
        </div>
      </section>

      <CtaBanner
        title={s.ctaH}
        text="Apna project WhatsApp par bhejein — quote aur timeline aam tor par usi din."
        waText={s.waText}
      />
    </>
  );
}
