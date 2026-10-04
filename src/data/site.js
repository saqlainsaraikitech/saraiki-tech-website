import { useState, useEffect } from 'react';
import builtinCourses from './courses.json';
import builtinPrompts from './prompts.json';
import { TOOLS as builtinTools } from './toolsData';

export const WA_NUMBER = '923306563410';
export const WA_DISPLAY = '+92 330 6563410';
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const CONTACT_EMAIL = 'saqlainbuttofficial@gmail.com';

// Social / channel links — footer (poori site) aur har prompt post ke neeche
export const SOCIAL_LINKS = [
  { name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029Vb6q1XhI1rco3rRbyi2h', icon: 'Whatsapp', primary: true },
  { name: 'Facebook', url: 'https://www.facebook.com/saraikitechofficial/', icon: 'Facebook' },
  { name: 'YouTube', url: 'https://www.youtube.com/@saraikitechofficial1', icon: 'Youtube' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@saraikitechofficial', icon: 'Tiktok' },
];

// Courses aur prompts public/courses.json aur public/prompts.json se
// runtime par load hote hain — is liye sirf woh 2 files re-upload kar ke
// content update ho jata hai, poori site rebuild karne ki zaroorat nahi.
let dataPromise = null;
function fetchData() {
  if (!dataPromise) {
    const get = async (name, fallback) => {
      try {
        const r = await fetch(`/${name}.json`, { cache: 'no-store' });
        if (r.ok) return await r.json();
      } catch (e) { /* offline / file preview — fallback use hoga */ }
      return fallback;
    };
    dataPromise = Promise.all([
      get('courses', builtinCourses),
      get('prompts', builtinPrompts),
    ]).then(([c, p]) => ({
      courses: c.courses || [],
      posts: p.posts || [],
    }));
  }
  return dataPromise;
}

export function useData() {
  const [data, setData] = useState({ courses: builtinCourses.courses || [], posts: builtinPrompts.posts || [] });
  useEffect(() => {
    let alive = true;
    fetchData().then((d) => { if (alive) setData(d); });
    return () => { alive = false; };
  }, []);
  return data;
}

export const findCourse = (courses, slug) => courses.find((c) => c.slug === slug);
export const findPost = (posts, slug) => posts.find((p) => p.slug === slug);

// Tools — live public/tools.json mile to wahi, warna bundled fallback.
// Price = base cost + 15% (override ho to fixed price), wasBase purani deal price.
export const TOOLS = builtinTools;
export const toolPrice = (t) => t.override ?? Math.round(t.base * 1.15);
export const toolWasPrice = (t) => (t.wasBase ? Math.round(t.wasBase * 1.15) : null);
export const toolSlug = (t) => t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export function useTools() {
  const [tools, setTools] = useState(TOOLS);
  useEffect(() => {
    let alive = true;
    fetch('/tools.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (alive && j && Array.isArray(j.tools) && j.tools.length) setTools(j.tools);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);
  return tools;
}

export const HOME_FAQS = [
  ['Kya mujhe apna chehra dikhana parega?', 'Bilkul nahi. Saraiki Tech ke tamam courses faceless automation par hain — AI voice, AI visuals aur AI video sab kuch handle karte hain.'],
  ['Roz kitna time dena hoga?', 'Roz ke 1–2 focused ghante kaafi hain. Consistency lambi timing se zyada important hai.'],
  ['Kya AI tools free hain?', 'Haan — har course mein free aur paid dono options cover hain. Aap zero cost se start kar sakte hain aur baad mein upgrade kar sakte hain.'],
  ['Prompts section kya hai?', 'Viral AI content banane ke tested master prompts — blog ki surat mein, har prompt ke saath copy button. Naye prompts waqt ke saath add hote rahenge.'],
  ['Course ke baad support milegi?', 'Haan. Har course ke saath WhatsApp support shamil hai — jahan atko, wahan seedhi help.'],
];
