import { useData } from '../data/site';
import { Reveal, SectionHead, CtaBanner } from '../components/ui';
import { CourseCard } from '../components/cards';

export default function Courses() {
  const { courses } = useData();
  const totalLessons = courses.reduce(
    (n, c) => n + (c.parts || []).reduce((m, p) => m + (p.modules || []).length, 0), 0
  );
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><span className="dot" />Courses</span>
            <h1>Mukammal <mark>roadmaps,</mark><br />adhoori videos nahi.</h1>
            <p className="page-sub">
              {courses.length} courses • {totalLessons}+ lessons • Har course ke saath WhatsApp support.
              Jo course aap ke goal se match kare, uski detail khol kar poora syllabus dekhein.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="grid-3">
            {courses.map((c, i) => <CourseCard key={c.slug} c={c} delay={(i % 3) * 0.08} />)}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Konsa course <mark>sahi rahega?</mark>"
        text="Confused hain ke kahan se start karein? WhatsApp par apna goal batayein — hum seedhi salah denge."
        waText="Assalam o Alaikum! Mujhe samajh nahi aa raha konsa course mere liye sahi hai. Salah chahiye."
      />
    </>
  );
}
