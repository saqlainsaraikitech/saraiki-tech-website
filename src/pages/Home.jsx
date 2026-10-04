import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Eye, Wallet, Headset, CheckCircle2 } from 'lucide-react';
import { useData, useTools, toolPrice, HOME_FAQS, waLink, SOCIAL_LINKS } from '../data/site';
import { SERVICES } from '../data/services';
import { Reveal, SectionHead, Faq, CtaBanner, Marquee, SocIcon } from '../components/ui';
import { CourseCard, PromptCard, SvcIcon } from '../components/cards';
import badgeYoutube from '../assets/badge-youtube.png';
import badgeFacebook from '../assets/badge-facebook.png';
import badgeTiktok from '../assets/badge-tiktok.png';

const WHY = [
  ['Eye', 'No Face Needed', 'Tamam courses faceless automation par hain. Camera ke saamne aaye baghair, AI se poora content system khara karein.'],
  ['Wallet', 'Zero Se Start', 'Free AI tools se kaam shuru karein. Paise sirf un cheezon par lagayein jo khud wapas aayein.'],
  ['BadgeCheck', 'Step-by-Step Roadmap', 'Bikhri hui YouTube videos nahi — har course ek clear roadmap hai: pehla din se monetization tak.'],
  ['Headset', 'WhatsApp Support', 'Jahan atkein, seedhi help. Har course ke saath personal WhatsApp support shamil hai.'],
];

const STEPS = [
  ['1', 'Chuno', 'Course ya master prompt chuno — jo skill ya content style tumhein suit kare.'],
  ['2', 'Banao', 'Roadmap follow karo aur AI tools se apna faceless content system khara karo.'],
  ['3', 'Kamao', 'Publish karo, audience banao aur monetization tak pohncho.'],
];

function ToolMini({ t, delay }) {
  const p = toolPrice(t);
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div className="tl-card">
        <div className="tl-top">
          <span className="tl-cat">{t.cat}</span>
        </div>
        <h3>{t.name}</h3>
        <div className="tl-price">
          <small>PKR</small>{p.toLocaleString('en-PK')}
        </div>
        <span className="tl-stock"><i />In Stock</span>
        <a
          className="tl-buy"
          style={{ marginTop: 16 }}
          href={waLink(`Assalam o Alaikum! Mujhe khareedna hai: ${t.name} (PKR ${p.toLocaleString('en-PK')})`)}
          target="_blank" rel="noopener"
        >
          <SocIcon name="Whatsapp" size={17} /> Buy Now
        </a>
      </div>
    </Reveal>
  );
}

export default function Home() {
  const { courses, posts } = useData();
  const tools = useTools();
  const heroCourse = courses[0];
  const waChannel = SOCIAL_LINKS[0];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <Reveal>
              <span className="eyebrow"><span className="dot" />Saraiki Tech — apni zaban mein tech</span>
              <h1>AI se kamana seekho,<br /><mark>step by step.</mark></h1>
              <p className="hero-sub">
                YouTube, TikTok aur Facebook automation ke mukammal courses — aur viral AI
                content banane ke master prompts, blog ki surat mein. Sab kuch asaan Roman Urdu mein.
              </p>
              <div className="hero-btns">
                <Link className="btn btn-amber" to="/courses">Courses Dekho <ArrowRight size={17} /></Link>
                <Link className="btn btn-ghost" to="/prompts">Master Prompts</Link>
              </div>
              <div className="hero-points">
                <span><BadgeCheck size={16} /> 3 Practical Courses</span>
                <span><BadgeCheck size={16} /> Tested Master Prompts</span>
                <span><BadgeCheck size={16} /> WhatsApp Support</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="hero-visual">
            <div className="hv-glow" />
            <figure className="hv-main">
              <img src="/images/course-youtube.png" alt="YouTube Automation Course" />
              <figcaption>
                <span>{heroCourse ? heroCourse.name : 'YouTube Automation'}</span>
                <span><s>Rs {heroCourse ? heroCourse.fee.toLocaleString() : '6,000'}</s> <b>Rs {heroCourse && heroCourse.discountFee ? heroCourse.discountFee.toLocaleString() : '2,500'}</b></span>
              </figcaption>
            </figure>
            <img src={badgeTiktok} className="sticker s1" alt="TikTok" />
            <img src={badgeFacebook} className="sticker s2" alt="Facebook" />
            <img src={badgeYoutube} className="sticker s3" alt="YouTube" />
            <div className="burst"><small>Limited</small><b>58% OFF</b></div>
            <a className="hv-wa-card" href={waChannel.url} target="_blank" rel="noopener">
              <span className="hv-wa"><SocIcon name="Whatsapp" size={24} /></span>
              <span><b>WhatsApp Channel</b><span>Free updates — join karo</span></span>
            </a>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="hero-stats">
            {[['3', 'Practical Courses'], ['55+', 'Video Lessons'], ['100%', 'Roman Urdu'], ['1:1', 'WhatsApp Support']].map(([n, l]) => (
              <div key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ============ COURSES ============ */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Courses"
            title="Wo skills jo <mark>paise banati</mark> hain."
            sub="Har course ek mukammal roadmap hai — theory nahi, practical system jo aap aaj se apply kar sakte hain."
            center
          />
          <div className="grid-3" style={{ marginTop: 40 }}>
            {courses.map((c, i) => <CourseCard key={c.slug} c={c} delay={(i % 3) * 0.08} />)}
          </div>
          <Reveal className="center" delay={0.1}>
            <Link className="btn btn-dark" to="/courses" style={{ marginTop: 36 }}>Tamam Courses <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ TOOLS PREVIEW ============ */}
      <section className="sec sec-tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Premium Tools"
            title="Pro tools, <mark>asaan qeemat</mark> par."
            sub="Asli premium subscriptions aur credits — order WhatsApp par, delivery aam tor par 10 minute ke andar."
            center
          />
          <div className="tools-rail" style={{ marginTop: 36 }}>
            {tools.slice(0, 4).map((t, i) => <ToolMini key={t.name} t={t} delay={(i % 4) * 0.07} />)}
          </div>
          <Reveal className="center" delay={0.1}>
            <Link className="btn btn-dark" to="/tools" style={{ marginTop: 30 }}>
              Tamam {tools.length} Tools Dekho <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PROMPTS ============ */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Master Prompts — Blog"
            title="Viral AI content ke <mark>tested prompts.</mark>"
            sub="Har prompt ke saath copy button — apne AI tool mein paste karein aur foran banana shuru karein. Naye prompts waqt ke saath add hote rahenge."
            center
          />
          <div className="grid-3" style={{ marginTop: 40 }}>
            {posts.slice(0, 3).map((p, i) => <PromptCard key={p.slug} p={p} delay={(i % 3) * 0.08} />)}
          </div>
          <Reveal className="center" delay={0.1}>
            <Link className="btn btn-amber" to="/prompts" style={{ marginTop: 36 }}>Tamam Prompts Parho <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="sec sec-tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title="Kaam <mark>hum karein,</mark> faida aap uthayein."
            sub="5 services, ek team, zero pareshani. Exact quote ke liye WhatsApp par message karein."
            center
          />
          <div className="st-svc2-grid" style={{ marginTop: 40 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06} style={{ height: '100%' }}>
                <div className="st-svc2-card">
                  <Link className="st-svc2-imgwrap" to={`/services/${s.slug}`}>
                    <img src={s.image} alt={s.name} loading="lazy" />
                  </Link>
                  <div className="st-svc2-body">
                    <span className="st-svc2-badge">
                      <span className="bdg"><SvcIcon name={s.icon} size={24} /></span>
                      <em>{String(i + 1).padStart(2, '0')}</em>
                    </span>
                    <Link to={`/services/${s.slug}`} className="st-svc2-title">{s.name}</Link>
                    <p>{s.short}</p>
                    <ul>
                      {(s.included || []).slice(0, 4).map(([ic, t]) => (
                        <li key={t}><CheckCircle2 size={16} />{t}</li>
                      ))}
                    </ul>
                    <a className="st-wa-quote" href={waLink(s.waText)} target="_blank" rel="noopener">
                      <SocIcon name="Whatsapp" size={16} /> WhatsApp par Quote Lo <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" delay={0.1}>
            <Link className="btn btn-dark" to="/services" style={{ marginTop: 36 }}>Tamam Services <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="sec">
        <div className="wrap">
          <Reveal>
            <div className="about-preview">
              <div className="ap-grid">
                <div>
                  <span className="eyebrow"><span className="dot" />About</span>
                  <h2>Maker ne banaya,<br /><mark>marketer ne nahi.</mark></h2>
                  <p>
                    Saraiki Tech ke peeche Saqlain Abid hain — jo khud faceless content systems
                    banate aur chalate hain. Courses mein wahi parhaya jata hai jo khud test karke kaam karta dekha hai.
                  </p>
                  <div className="ap-badges">
                    <span>Courses</span><span>Master Prompts</span><span>Premium Tools</span><span>Services</span>
                  </div>
                  <Link className="btn btn-amber" to="/about">Poori Kahani Parho <ArrowRight size={17} /></Link>
                </div>
                <div className="ap-visual">
                  <img src={badgeYoutube} alt="YouTube" />
                  <img src={badgeTiktok} alt="TikTok" />
                  <img src={badgeFacebook} alt="Facebook" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="sec sec-tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Tareeqa"
            title="Shuru karna <mark>itna asaan</mark> hai."
            sub="Koi lambi theory nahi — teen seedhe steps, aur tum apne faceless content system par ho."
            center
          />
          <div className="grid-3" style={{ marginTop: 40 }}>
            {STEPS.map(([n, t, d], i) => (
              <Reveal key={n} delay={(i % 3) * 0.08} style={{ height: '100%' }}>
                <div className="step-card">
                  <span className="step-n">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Kyun Saraiki Tech?"
            title="Seedha <mark>kaam ki baat.</mark>"
            center
          />
          <div className="grid-4" style={{ marginTop: 40 }}>
            {WHY.map(([icon, t, d], i) => {
              const I = { Eye, Wallet, BadgeCheck, Headset }[icon];
              return (
                <Reveal key={t} delay={(i % 4) * 0.07} style={{ height: '100%' }}>
                  <div className="why-card">
                    <span className="why-ico"><I size={22} /></span>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="sec sec-tint">
        <div className="wrap narrow">
          <SectionHead eyebrow="Sawal Jawab" title="Aksar pooche gaye <mark>sawalat.</mark>" center />
          <div style={{ marginTop: 34 }}>
            <Faq items={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Aaj se <mark>shuru karein.</mark>"
        text="Course mein enroll hona hai ya koi sawal hai? WhatsApp par seedhi baat karein."
        waText="Assalam o Alaikum! Mujhe Saraiki Tech ke courses mein enroll hona hai."
      />
    </>
  );
}
