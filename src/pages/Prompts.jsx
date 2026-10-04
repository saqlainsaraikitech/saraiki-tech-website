import { useState } from 'react';
import { useData } from '../data/site';
import { Reveal, SectionHead, CtaBanner } from '../components/ui';
import { PromptCard } from '../components/cards';

export default function Prompts() {
  const { posts } = useData();
  const cats = ['All', ...new Set(posts.map((p) => p.category))];
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Master Prompts — Blog</span>
            <h1>Viral AI content ke<br /><mark>tested prompts.</mark></h1>
            <p className="page-sub">
              Har post mein poora master prompt — copy button ke saath. Apne AI tool mein paste
              karein aur foran banana shuru karein. Naye prompts waqt ke saath yahin add hote rahenge.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <Reveal>
            <div className="cat-row">
              {cats.map((c) => (
                <button key={c} className={`cat${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>
                  {c === 'All' ? 'Tamam' : c}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 26 }}>
            {list.map((p, i) => <PromptCard key={p.slug} p={p} delay={(i % 3) * 0.08} />)}
          </div>
          {list.length === 0 && (
            <p className="center muted" style={{ marginTop: 40 }}>Is category mein abhi koi prompt nahi — jald aa raha hai.</p>
          )}
        </div>
      </section>
      <CtaBanner
        title="Koi <mark>khaas prompt</mark> chahiye?"
        text="Apni niche batayein — hum us par tested master prompt bana kar blog mein add kar denge."
        waText="Assalam o Alaikum! Mujhe is topic par master prompt chahiye: "
      />
    </>
  );
}
