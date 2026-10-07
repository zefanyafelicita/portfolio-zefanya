import { social } from '../data'
import FloatingDecorations from './FloatingDecorations'
import { SocialIcon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" className="title">
          Let's Build Something Together.
        </Reveal>
        <div className="cw">
          <Reveal>
            <p>Have a project, opportunity, or idea you'd like to discuss? Feel free to reach out.</p>
            <div className="links">
              {social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className="ico" style={{ display: 'inline-block' }}>
                    <SocialIcon name={s.icon} />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal as="div">
            <form action="https://formspree.io/f/xeaeeknn" method="POST" >
              <input name="n" placeholder="Name" aria-label="Name" required />
              <input name="e" type="email" placeholder="Email" aria-label="Email" required />
              <textarea name="m" placeholder="Message" aria-label="Message" required />
              <button className="btn pri" type="submit">
                Send Message <span className="arr">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <FloatingDecorations variant="contact" />
    </section>
  )
}
