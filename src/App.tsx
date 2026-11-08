import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Github,
  Mail,
  Menu,
  Plus,
  X,
  Database,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { projects, experience, skills, type Category } from "./content";
const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const navigation = [
  ["projects", "프로젝트"],
  ["experience", "경력"],
  ["skills", "기술 역량"],
  ["about", "소개"],
];
function ClinicalGraphic() {
  return (
    <div
      className="clinical-graphic"
      aria-label="임상 데이터 구조, 사용자 업무, 안정적인 운영을 연결하는 개발 경험"
    >
      <div className="graphic-heading">
        <span className="status-dot" /> CLINICAL SYSTEMS{" "}
        <span>DEVELOPMENT</span>
      </div>
      <div className="graphic-orbit" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
      <div className="graphic-core">
        <Database size={28} strokeWidth={1.4} />
        <strong>Clinical data</strong>
        <span>업무를 이해하는 개발</span>
      </div>
      <div className="graphic-node node-one">
        <span>01</span>
        <strong>데이터 구조</strong>
        <small>CDMS · ODM · XML</small>
      </div>
      <div className="graphic-node node-two">
        <span>02</span>
        <strong>사용자 경험</strong>
        <small>Builder · ePRO</small>
      </div>
      <div className="graphic-node node-three">
        <span>03</span>
        <strong>안정적인 운영</strong>
        <small>접근 관리 · 변경 이력</small>
      </div>
      <div className="graphic-footer">
        <span>DATA</span>
        <i />
        <span>WORKFLOW</span>
        <i />
        <span>OPERATION</span>
      </div>
    </div>
  );
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState<Category>("전체");
  const shown = projects.filter(
    (project) => category === "전체" || project.category === category,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <header className="site-header">
        <div className="shell navigation">
          <a
            className="wordmark"
            href="#home"
            aria-label="양수호 포트폴리오 처음으로"
          >
            <span className="brand-symbol" aria-hidden="true">
              <Plus size={18} strokeWidth={2.5} />
            </span>
            SOOHO YANG<span className="brand-divider">/</span>
            <span className="brand-role">DEVELOPER</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="주요 메뉴"
          >
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              연락하기 <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> CLINICAL SYSTEMS & CLOUD
              </p>
              <h1>
                임상 업무를 이해하고,
                <br />
                <em>신뢰할 수 있는 시스템</em>을<br />
                개발합니다.
              </h1>
              <p className="hero-intro">
                안녕하세요, 개발자 <strong>양수호</strong>입니다.
                <br />
                임상 데이터 관리부터 클라우드 접근 관리까지,
                <br className="desktop-break" /> 사용자의 업무와 안정적인 운영을
                함께 생각합니다.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  프로젝트 살펴보기 <ArrowDown size={17} />
                </a>
                <a className="text-link" href="#experience">
                  경력 보기 <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-caption">
                <span>Java · Spring Boot</span>
                <b>·</b>
                <span>React · Vue 3</span>
                <b>·</b>
                <span>Clinical IT</span>
              </div>
            </div>
            <ClinicalGraphic />
          </div>
          <div className="shell evidence-strip">
            <div>
              <strong>9년 1개월</strong>
              <span>
                전체 실무 경력 <small>2026.11 기준</small>
              </span>
            </div>
            <div>
              <strong>5년 6개월</strong>
              <span>임상·업무 시스템 개발 및 운영</span>
            </div>
            <div>
              <strong>CDMS → Cloud</strong>
              <span>데이터와 운영을 연결하는 경험</span>
            </div>
          </div>
        </section>
        <section className="section shell" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>업무의 맥락을 담은 프로젝트</h2>
            </div>
            <p>
              임상 데이터의 구조부터 사용자의 화면,
              <br />
              그리고 서비스를 운영하는 환경까지.
            </p>
          </div>
          <div className="project-toolbar">
            <div className="filters" aria-label="프로젝트 분류">
              {(["전체", "임상 시스템", "클라우드", "기타"] as Category[]).map(
                (item) => (
                  <button
                    key={item}
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <span className="result-count" role="status">
              {shown.length}개 프로젝트
            </span>
          </div>
          <div className="project-list">
            {shown.map((project) => (
              <details className="project" key={project.id}>
                <summary>
                  <span className="project-number">{project.id}</span>
                  <div className="project-summary">
                    <span className="project-category">
                      {project.category} <span>/ {project.company}</span>
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-expand">
                    <span>상세 보기</span>
                    <ChevronDown size={21} />
                  </span>
                </summary>
                <div className="project-detail">
                  <div>
                    <h4>담당 업무와 기여</h4>
                    <ul>
                      {project.work.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h4>사용 기술</h4>
                    <p className="detail-stack">{project.tags.join(" · ")}</p>
                    {project.links && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label} <ArrowUpRight size={14} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {project.image && (
                    <figure
                      className={project.wideImage ? "wide-figure" : undefined}
                    >
                      <img
                        src={asset(project.image)}
                        alt={`${project.title} 이미지`}
                        loading="lazy"
                      />
                      {project.imageCaption && (
                        <figcaption>{project.imageCaption}</figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
        <section className="experience-section section" id="experience">
          <div className="shell experience-layout">
            <div className="experience-intro">
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                꾸준히 쌓아 온<br />
                개발과 운영의 경험
              </h2>
              <p>
                자동화 시험에서 임상 시스템 개발로,
                <br />
                그리고 클라우드 운영 환경으로
                <br />
                업무의 범위를 넓혀 왔습니다.
              </p>
              <div className="career-note">
                <Workflow size={22} />
                <p>
                  세이프소프트에서 디티앤씨알오로 소속을 변경한 뒤에도{" "}
                  <strong>같은 근무지에서 업무를 이어갔습니다.</strong>
                </p>
              </div>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-top">
                    <span>{job.period}</span>
                    {job.current && <span className="current-badge">현재</span>}
                  </div>
                  <h3>{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                  {job.note && <p className="job-note">{job.note}</p>}
                  <ul>
                    {job.work.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section shell" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / CAPABILITIES</p>
              <h2>경험으로 연결된 기술</h2>
            </div>
            <p>
              개발한 기능과 운영해 온 시스템을 기준으로
              <br />
              주요 기술을 정리했습니다.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-group" key={skill.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section section" id="about">
          <div className="shell about-layout">
            <div className="portrait">
              <img
                src={asset("ysh_profile.jpg")}
                alt="양수호 증명사진"
                width={354}
                height={472}
                loading="lazy"
              />
              <span>SOOHO YANG / SOFTWARE DEVELOPER</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">04 / ABOUT ME</p>
              <h2>
                기술을 익히는 데서,
                <br />
                업무를 개선하는 데까지.
              </h2>
              <p>
                임상 시스템을 개발하면서 데이터가 어떻게 처리되는지뿐 아니라,
                현업에서 어떤 절차로 사용되는지를 함께 이해해 왔습니다. CDMS
                표준 심사 대응과 실제 서비스 유지보수를 통해 변경 사항을
                확인하고 검증하는 태도를 배웠습니다.
              </p>
              <p>
                최근에는 클라우드 환경에서 접근 관리와 로그 수집, 웹 원격 접속
                기능을 개발하며 운영에 대한 이해를 넓히고 있습니다. 기존 경험을
                바탕으로 새로운 환경을 배우고, 필요한 개선을 함께 만들어 가고
                싶습니다.
              </p>
              <div className="about-principles">
                <span>
                  <Check size={16} /> 업무 흐름을 먼저 이해합니다
                </span>
                <span>
                  <Check size={16} /> 변경의 영향을 함께 살핍니다
                </span>
                <span>
                  <Check size={16} /> 경험과 배움을 동료와 공유합니다
                </span>
              </div>
              <details className="education">
                <summary>
                  학력 및 자격 <ChevronDown size={16} />
                </summary>
                <p>
                  공주대학교 컴퓨터공학전공 · 2017.02 졸업
                  <br />
                  정보처리기사 · 2016.06
                  <br />
                  정보처리기능사 · 2011.12
                  <br />
                  청년취업아카데미 금상 · 롯데정보통신 · 2016.11
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <div>
              <p className="eyebrow">LET’S CONNECT</p>
              <h2>
                함께 만들 다음 시스템을
                <br />
                이야기하고 싶습니다.
              </h2>
              <p>
                임상 업무에 대한 이해와 개발 경험이 필요한 곳에서
                함께하겠습니다.
              </p>
            </div>
            <a className="contact-email" href="mailto:ysh5586@naver.com">
              ysh5586@naver.com <ArrowUpRight size={25} />
            </a>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <span>© {new Date().getFullYear()} 양수호</span>
        <span className="footer-message">
          <ShieldCheck size={15} /> Clinical insight. Thoughtful engineering.
        </span>
        <div>
          <a
            href="https://github.com/ssbbrr92"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 프로필"
          >
            <Github size={19} />
          </a>
          <a href="mailto:ysh5586@naver.com" aria-label="이메일 보내기">
            <Mail size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/%EC%88%98%ED%98%B8-%EC%96%91-67045a35b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}
export default App;
