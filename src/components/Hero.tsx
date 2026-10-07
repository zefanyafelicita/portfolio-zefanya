import FloatingDecorations from './FloatingDecorations'

export default function Hero() {
  return (
    <section id="home">
      <div className="wrap hero">
        <h1>
          Hello, I'm <em>Zefanya.</em>
        </h1>
        <h2>Computer Science Student &amp; Aspiring Software Developer.</h2>
        <p>Computer Science student interested in full-stack development, cloud computing, and artificial intelligence.</p>
        <p className="sub">Building digital experiences through code, problem solving, and continuous learning.</p>
        <div className="cta">
          <a className="btn pri" href="#portfolio">
            View My Work <span className="arr">→</span>
          </a>
          <a className="btn" href="#contact">
            Let's Connect <span className="arr">→</span>
          </a>
        </div>
      </div>
      <div className="scroll">Scroll to explore ↓</div>
      <FloatingDecorations variant="hero" />
    </section>
  )
}
