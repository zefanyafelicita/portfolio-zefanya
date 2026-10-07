import FloatingDecorations from './FloatingDecorations'
import Reveal from './Reveal'
import profilePhoto from "../assets/profile.jpeg";
import { cvUrl } from '../data'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="title" style={{ marginBottom: 24 }}>
            About Me
          </h2>
          <p>Hi! I'm Zefanya Felicita Adithya, a Computer Science student at BINUS University with an interest in software development. I enjoy building web and mobile applications and exploring how technology can turn ideas into practical solutions.</p>
          <p>I have experience with Laravel, React Native, TypeScript, MySQL, and Python, while also exploring Artificial Intelligence and Cloud Computing through academic projects. Outside of technology, I enjoy reading, watching movies, and series in my free time. I also enjoy learning through hands-on projects, solving problems, and continuously improving my skills.</p>
          <p>I'm currently looking to grow as a software developer, gain hands-on experience through an internship, and contribute to real-world projects.</p>
          <a className="btn pri" href={cvUrl} download style={{ marginTop: 12 }}>
            Download CV <span className="arr">↓</span>
          </a>
        </Reveal>
        <Reveal className="pcard">
          <div className="ph">
            <img src={profilePhoto} alt="Zefanya Felicita Adithya" />
          </div>
          <h3>Zefanya Felicita Adithya</h3>
          <small>
            Computer Science Student
            <br />
            BINUS University
          </small>
          <span className="fl" style={{ top: -14, right: -18 }}>
            Software Developer
          </span>
          <span className="fl" style={{ top: '44%', left: -30, animationDelay: '-2s' }}>
            Cloud Computing
          </span>
          <span className="fl" style={{ bottom: 70, right: -22, animationDelay: '-3s' }}>
            AI
          </span>
        </Reveal>
      </div>
      <FloatingDecorations variant="about" />
    </section>
  )
}
