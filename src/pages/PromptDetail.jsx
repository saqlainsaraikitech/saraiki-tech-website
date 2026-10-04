import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Tag, Clock, Lightbulb, Wrench } from 'lucide-react';
import { useData, findPost, waLink } from '../data/site';
import { Reveal, CopyButton, FollowBox } from '../components/ui';
import { PromptCard } from '../components/cards';
import NotFound from './NotFound';

/* Body blocks: purani strings = paragraph; naye objects = structured blocks.
   {h} heading, {sh} sub-heading, {p} paragraph, {ul}/{ol} lists,
   {tools:[{name,desc}]} tools box, {tip} pro-tip callout. */
function renderBlock(b, i) {
  if (typeof b === 'string') return <p key={i}>{b}</p>;
  if (b.h) return <h2 key={i} className="pb-h">{b.h}</h2>;
  if (b.sh) return <h3 key={i} className="pb-sh">{b.sh}</h3>;
  if (b.p) return <p key={i}>{b.p}</p>;
  if (b.ul) return <ul key={i} className="pb-ul">{b.ul.map((x, j) => <li key={j}>{x}</li>)}</ul>;
  if (b.ol) return <ol key={i} className="pb-ol">{b.ol.map((x, j) => <li key={j}>{x}</li>)}</ol>;
  if (b.tip) return <div key={i} className="pb-tip"><b><Lightbulb size={16} /> Pro Tip</b><p>{b.tip}</p></div>;
  if (b.tools) return (
    <div key={i} className="pb-tools">
      {b.tools.map((t, j) => (
        <div key={j} className="pb-tool">
          <b><Wrench size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 6 }} />{t.name}</b>
          <span>{t.desc}</span>
        </div>
      ))}
    </div>
  );
  return null;
}

export default function PromptDetail() {
  const { slug } = useParams();
  const { posts } = useData();
  const p = findPost(posts, slug);
  if (!p) return <NotFound />;

  const related = posts.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const relList = related.length ? related : posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="post-hero">
        <div className="wrap narrow">
          <Reveal>
            <Link className="back" to="/prompts"><ArrowLeft size={15} /> Tamam Prompts</Link>
            <div className="post-meta">
              <span className="pc-cat"><Tag size={13} /> {p.category}</span>
              <span className="pc-date">{p.date}</span>
              <span className="pc-read"><Clock size={13} /> {p.readTime}</span>
            </div>
            <h1>{p.title}</h1>
            <p className="page-sub">{p.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 8 }}>
        <div className="wrap narrow">
          {p.image && (
            <Reveal>
              <img className="post-image" src={p.image} alt={p.title} />
            </Reveal>
          )}
          <Reveal>
            <div className="post-body">
              {(p.body || []).map(renderBlock)}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="prompt-box">
              <div className="pb-head">
                <span>Master Prompt</span>
                <CopyButton text={p.prompt} label="Copy Karo" />
              </div>
              <pre className="pb-text">{p.prompt}</pre>
              <div className="pb-foot">
                <CopyButton text={p.prompt} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <FollowBox />
          </Reveal>

          <Reveal delay={0.14}>
            <div className="post-share">
              <p>Koi sawal ya apni niche ke liye custom prompt chahiye?</p>
              <a
                className="btn btn-wa"
                href={waLink(`Assalam o Alaikum! Mujhe "${p.title}" walay prompt par sawal hai.`)}
                target="_blank" rel="noopener"
              >
                WhatsApp par Poocho <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {relList.length > 0 && (
        <section className="sec sec-tint">
          <div className="wrap">
            <Reveal><h2 className="sec-title">Mazeed <mark>prompts.</mark></h2></Reveal>
            <div className="grid-3" style={{ marginTop: 26 }}>
              {relList.map((r, i) => <PromptCard key={r.slug} p={r} delay={(i % 3) * 0.08} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
