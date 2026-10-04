import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, CheckCircle2, ChevronDown, MessageCircle, ArrowLeft } from 'lucide-react';
import { useData, findCourse, waLink } from '../data/site';
import { COURSE_BADGE } from '../data/courseBadges';
import { Reveal, SectionHead, Faq, CtaBanner } from '../components/ui';
import NotFound from './NotFound';

function Part({ part, open, onToggle }) {
  return (
    <div className={`part${open ? ' open' : ''}`}>
      <button className="part-head" onClick={onToggle}>
        <span>{part.title}</span>
        <span className="part-meta">
          <em>{(part.modules || []).length} lessons</em>
          <ChevronDown size={18} />
        </span>
      </button>
      {open && (
        <div className="part-body">
          {(part.modules || []).map((m, i) => (
            <div className="mod" key={i}>
              <span className="mod-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <b>{m.t}</b>
                {m.d && <p>{m.d}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const { courses } = useData();
  const c = findCourse(courses, slug);
  const [openPart, setOpenPart] = useState(0);
  if (!c) return <NotFound />;

  const enrollMsg = `Assalam o Alaikum! Mujhe "${c.name}" mein enroll hona hai. Detail batayein.`;

  return (
    <>
      <section className="course-hero" style={{ '--cc': c.color }}>
        <div className="wrap">
          <Reveal>
            <Link className="back" to="/courses"><ArrowLeft size={15} /> Tamam Courses</Link>
            <div className="ch-grid">
              <div>
                <img src={COURSE_BADGE[c.slug]} className="cc-badge big" alt={c.name} />
                <h1>{c.name}</h1>
                <p className="ch-tagline">{c.tagline}</p>
                <p className="ch-short">{c.short}</p>
                <div className="ch-meta">
                  <span><Clock size={15} /> {c.duration}</span>
                  <span><CheckCircle2 size={15} /> WhatsApp Support</span>
                  <span><CheckCircle2 size={15} /> Lifetime Updates</span>
                </div>
              </div>
              <div className="fee-card">
                <span className="fee-label">Course Fee</span>
                {c.discountFee ? (
                  <>
                    <s className="fee-was">Rs {c.fee.toLocaleString()}</s>
                    <div className="fee-now">Rs {c.discountFee.toLocaleString()}</div>
                    <span className="fee-off">Limited-time discount</span>
                  </>
                ) : (
                  <div className="fee-now">Rs {c.fee.toLocaleString()}</div>
                )}
                <a className="btn btn-wa btn-block" href={waLink(enrollMsg)} target="_blank" rel="noopener">
                  <MessageCircle size={18} /> WhatsApp par Enroll Karo
                </a>
                <p className="fee-note">Enroll karne ke liye WhatsApp par message karein — payment aur access ki detail wahin milegi.</p>
              </div>
            </div>
            {c.image && <img className="course-feature" src={c.image} alt={c.name} />}
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Kya Seekhein Ge" title="Course <mark>khatam</mark> karne ke baad." />
          <div className="out-grid">
            {(c.outcomes || []).map((o, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06}>
                <div className="out-item"><CheckCircle2 size={19} /><span>{o}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-tint">
        <div className="wrap narrow">
          <SectionHead eyebrow="Poora Syllabus" title="Har <mark>lesson,</mark> wazeh." center />
          <div className="parts">
            {(c.parts || []).map((p, i) => (
              <Part key={i} part={p} open={openPart === i} onToggle={() => setOpenPart(openPart === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {c.faqs && c.faqs.length > 0 && (
        <section className="sec">
          <div className="wrap narrow">
            <SectionHead eyebrow="Sawal Jawab" title="Is course ke baare mein <mark>sawalat.</mark>" center />
            <Faq items={c.faqs.map((f) => [f.q, f.a])} />
          </div>
        </section>
      )}

      <CtaBanner
        title={`<mark>${c.name}</mark> — aaj se shuru karein.`}
        text="Seat confirm karne ke liye WhatsApp par message karein."
        waText={enrollMsg}
      />
    </>
  );
}
