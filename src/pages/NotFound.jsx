import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { Reveal } from '../components/ui';

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap narrow center">
        <Reveal>
          <span className="nf-ico"><Compass size={44} /></span>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}>404</h1>
          <p className="page-sub" style={{ margin: '12px auto 28px' }}>
            Lagta hai aap ghalat raste par aa gaye hain — ye page maujood nahi.
          </p>
          <Link className="btn btn-amber" to="/">Home Par Wapas <ArrowRight size={17} /></Link>
        </Reveal>
      </div>
    </section>
  );
}
