import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Tag, MessageCircle, Globe, Sparkles, ShoppingBag, MonitorPlay, Music2, Palette, Zap, Smartphone, Search, Clapperboard, Image as ImageIcon, Mic, CalendarClock, CreditCard, TrendingUp, Target, FileText, Upload, Flame, Users } from 'lucide-react';
import { waLink } from '../data/site';
import { COURSE_BADGE } from '../data/courseBadges';
import { Reveal } from './ui';

export const SVC_ICONS = { Globe, Sparkles, ShoppingBag, MonitorPlay, Music2, Palette, Zap, Smartphone, Search, Clapperboard, Image: ImageIcon, Mic, CalendarClock, CreditCard, TrendingUp, Target, FileText, Upload, Flame, Users };

export function SvcIcon({ name, size = 22 }) {
  const I = SVC_ICONS[name] || Sparkles;
  return <I size={size} />;
}

export function ServiceCard({ s, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <Link className="svc-card" to={`/services/${s.slug}`}>
        {s.image && <span className="svc-img"><img src={s.image} alt={s.name} loading="lazy" /></span>}
        <div className="svc-body">
          <span className="svc-ico"><SvcIcon name={s.icon} size={26} /></span>
          <span className="svc-tag">{s.tag}</span>
          <h3>{s.name}</h3>
          <p>{s.short}</p>
          <span className="svc-link">Details Dekho <ArrowRight size={15} /></span>
        </div>
      </Link>
    </Reveal>
  );
}

export function CourseCard({ c, delay = 0 }) {
  const off = c.discountFee && c.fee > c.discountFee
    ? Math.round((1 - c.discountFee / c.fee) * 100)
    : 0;
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div className="course-card">
        <Link className="cc-media" to={`/courses/${c.slug}`}>
          {c.image && <img src={c.image} alt={c.name} loading="lazy" />}
          <img src={COURSE_BADGE[c.slug]} className="cc-sticker" alt="" loading="lazy" />
          <span className="cc-dur"><Clock size={14} /> {c.duration}</span>
        </Link>
        <div className="cc-body">
          <h3>{c.name}</h3>
          <p className="cc-tag">{c.tagline}</p>
          <p className="cc-short">{c.short}</p>
          <div className="cc-price">
            {c.discountFee ? (
              <>
                <span className="was">Rs {c.fee.toLocaleString()}</span>
                <span className="now">Rs {c.discountFee.toLocaleString()}</span>
                {off > 0 && <span className="off">{off}% OFF</span>}
              </>
            ) : (
              <span className="now">Rs {c.fee.toLocaleString()}</span>
            )}
          </div>
          <div className="cc-btns">
            <Link className="btn btn-amber btn-sm" to={`/courses/${c.slug}`}>
              Roadmap Dekho <ArrowRight size={15} />
            </Link>
            <a
              className="btn btn-wa btn-sm"
              href={waLink(`Assalam o Alaikum! Mujhe "${c.name}" mein enroll hona hai.`)}
              target="_blank" rel="noopener"
            >
              <MessageCircle size={15} /> Enroll
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function PromptCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link className="prompt-card" to={`/prompts/${p.slug}`}>
        {p.image && <span className="pc-img"><img src={p.image} alt={p.title} loading="lazy" /></span>}
        <span className="pc-meta">
          <span className="pc-cat"><Tag size={13} /> {p.category}</span>
          <span className="pc-date">{p.date}</span>
        </span>
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="pc-foot">
          <span className="pc-read">{p.readTime} parho</span>
          <span className="pc-go">Prompt Parho <ArrowUpRight size={15} /></span>
        </span>
      </Link>
    </Reveal>
  );
}
