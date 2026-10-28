import Image from "next/image";
import CallLink from "@/components/CallLink";
import IntakeQBooking from "@/components/IntakeQBooking";
import { CheckIcon } from "@/components/icons";
import { ADDRESS, HOURS, INTAKEQ_BOOKING_URL } from "@/lib/site";

const FEELINGS = [
  "My mind won’t switch off.",
  "Nothing feels fun anymore.",
  "I can’t focus at work.",
  "My moods swing for no reason.",
  "My medication isn’t working.",
  "I’m drinking more than I want to.",
];

const SERVICES = [
  {
    title: "A full check-up for your mind",
    plain: "One visit to understand what’s going on and make a plan.",
    term: "Psychiatric evaluation:",
    clinical: "full diagnostic assessment and treatment plan.",
    cta: "Book an evaluation",
  },
  {
    title: "The right medication, safely",
    plain: "Find what works, with regular check-ins.",
    term: "Medication management:",
    clinical: "evidence-based prescribing and monitoring.",
    cta: "Get started",
  },
  {
    title: "Someone to talk it through with",
    plain: "Practical tools for stress, worry and low mood.",
    term: "Individual therapy:",
    clinical: "evidence-based psychotherapy.",
    cta: "Book a session",
  },
  {
    title: "Support to cut back or quit",
    plain: "Private, judgment-free help with alcohol or drugs.",
    term: "Substance-use counseling:",
    clinical: "relapse prevention and recovery support.",
    cta: "Get support",
  },
  {
    title: "See your provider from home",
    plain: "Same care by secure video, from home.",
    term: "Tele-psychiatry:",
    clinical: "secure virtual visits.",
    cta: "Book a video visit",
  },
];

const ADVANCED = [
  {
    title: "TMS therapy",
    text: "Gentle magnetic pulses that activate mood areas of the brain. You stay awake and drive home after.",
    tech: "FDA-cleared TMS for treatment-resistant depression.",
  },
  {
    title: "Spravato® nasal spray",
    text: "A fast-acting nasal spray, given in our clinic under close monitoring.",
    tech: "Esketamine for treatment-resistant depression.",
  },
  {
    title: "StemWave",
    text: "Drug-free relief when stress shows up as body aches or tension.",
    tech: "Acoustic-wave therapy for physical symptoms of stress.",
  },
];

const STEPS = [
  { title: "Pick a time that works", text: "Book online or give us a quick call. No referral needed." },
  { title: "We check your insurance", text: "We confirm coverage and book your time." },
  { title: "Start feeling better", text: "Meet your provider, often within 48 hours." },
];

const ACCESS = [
  { title: "Pearland office", text: `${ADDRESS}. Close to Houston, Friendswood and Alvin.` },
  { title: "Online visits", text: "Video visits in TX, OR, WA, AZ and CA." },
  { title: "Insurance", text: "Most major plans accepted. We’ll check yours for you." },
];

const REVIEWS = [
  {
    quote:
      "Dr. Ben and the entire staff are exceptionally knowledgeable. He approaches you with compassion, empathy, and professionalism.",
    name: "Amina A.",
  },
  {
    quote:
      "From the moment I walked in, the staff made me feel welcomed and respected. Scheduling was easy, and I never felt rushed.",
    name: "Shari",
  },
];

const FAQS = [
  { q: "Do I need a referral?", a: "No. You can contact us directly and we’ll take it from there." },
  { q: "Do you take my insurance?", a: "Most major plans, yes. We’ll check yours before your first visit." },
  { q: "How soon can I be seen?", a: "Many new patients start care within about 48 hours, depending on availability." },
  {
    q: "Can I do my appointments online?",
    a: "Yes. Secure video visits are available for patients in Texas, Oregon, Washington, Arizona and California.",
  },
  {
    q: "What happens at the first visit?",
    a: "You talk through what’s been happening and your goals, then build a plan together.",
  },
  {
    q: "Is everything kept private?",
    a: "Yes. Your care is confidential and handled in line with federal health privacy rules.",
  },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        Now accepting new patients
        <span className="tb-more"> · Most major insurance accepted · In-person in Pearland &amp; online</span>
      </div>

      <header className="site">
        <div className="wrap head-in">
          <a className="brand" href="#top" aria-label="Solid Foundation Psychiatry">
            <Image className="icon" src="/images/logo-icon.png" alt="" width={50} height={52} preload />
            <Image
              className="word"
              src="/images/logo-wordmark.png"
              alt="Solid Foundation Psychiatry"
              width={142}
              height={34}
              preload
            />
          </a>
          <div className="head-actions">
            <a className="btn btn-line btn-callback" href="#get-started">
              Book online
            </a>
            <CallLink className="btn btn-sun" icon />
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Feel like <span className="hl">yourself</span> again.
              </h1>
              <p className="lede">
                Anxiety, low mood, poor sleep or focus issues? Get board-certified care in Pearland or online, often
                within 48 hours.
              </p>
              <ul className="assure">
                <li>
                  <CheckIcon />
                  Most insurance accepted
                </li>
                <li>
                  <CheckIcon />
                  In-person or video visits
                </li>
                <li>
                  <CheckIcon />
                  No judgment, no rush
                </li>
              </ul>
              <a className="hero-doc" href="#dr-ben">
                <Image src="/images/dr-ben.jpg" alt="Dr. Edewor Ben Osevwe, DNP" width={96} height={96} preload />
                <div>
                  <b>Led by Dr. Ben Osevwe, DNP</b>
                  <span>Clinical Director · Board Certified PMHNP-BC</span>
                </div>
              </a>
              <div className="hero-call">
                <CallLink className="btn btn-line" icon prefix="Call" />
                <small>{HOURS}</small>
              </div>
            </div>

            <div className="form-card booking-card" id="get-started">
              <h2>
                Book your visit <span className="hl">online</span>
              </h2>
              <p className="sub">Choose a time that works for you.</p>
              <IntakeQBooking />
              <div className="or-call">
                or call now <CallLink />
              </div>
            </div>
          </div>
        </section>

        {/* SOUND FAMILIAR */}
        <section className="section feel">
          <div className="wrap">
            <h2>
              Does this sound <span className="hl">like you?</span>
            </h2>
            <div className="feel-grid">
              {FEELINGS.map((f) => (
                <div className="feel-item" key={f}>
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <p className="feel-close">If even one sounds familiar, let’s talk. It’s treatable.</p>
            <div className="cta-row">
              <a className="btn btn-sun" href="#get-started">
                Talk to someone this week
              </a>
              <CallLink className="btn btn-line" prefix="Call" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="svc-head">
              <div>
                <h2>
                  How we can <span className="hl">help</span>
                </h2>
              </div>
            </div>
            <div className="svc-list">
              {SERVICES.map((s) => (
                <div className="svc" key={s.title}>
                  <h3>{s.title}</h3>
                  <div>
                    <p className="plain">{s.plain}</p>
                    <p className="clinical">
                      <b>{s.term}</b> {s.clinical}
                    </p>
                  </div>
                  <a className="btn btn-line" href="#get-started">
                    {s.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANCED TREATMENTS */}
        <section className="section adv">
          <div className="wrap">
            <h2>
              When medication isn’t <span className="hl">enough</span>
            </h2>
            <p className="lede">
              Tried two or more antidepressants without relief? We offer newer, proven options in Pearland.
            </p>
            <div className="adv-grid">
              {ADVANCED.map((a) => (
                <div className="adv-item" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <p className="tech">{a.tech}</p>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-sun" href="#get-started">
                Ask if you’re a good fit
              </a>
              <CallLink className="btn btn-light" prefix="Call" />
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section" id="dr-ben">
          <div className="wrap founder-grid">
            <div className="photo">
              <Image src="/images/dr-ben.jpg" alt="Dr. Edewor Ben Osevwe, DNP, PMHNP-BC" width={400} height={400} />
            </div>
            <div>
              <h2>
                Meet <span className="hl">Dr. Ben</span>
              </h2>
              <p style={{ fontWeight: 600, marginBottom: 4 }}>Edewor Ben Osevwe, DNP</p>
              <div className="creds">
                <span>Clinical Director</span>
                <span>Doctor of Nursing Practice</span>
                <span>Board Certified PMHNP-BC</span>
              </div>
              <p style={{ maxWidth: "46ch" }}>
                Dr. Ben believes everyone deserves care that’s personal and free of judgment. You get a clear plan
                combining medication, therapy and wellness coaching, not just a prescription.
              </p>
              <p className="quote">
                “He takes the time to listen, understand your needs, and develop a personalized treatment plan.”{" "}
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-fira),system-ui,sans-serif",
                    fontSize: ".95rem",
                    color: "var(--ink-soft)",
                  }}
                >
                  — Amina A., patient
                </span>
              </p>
              <div className="cta-row" style={{ marginTop: 8 }}>
                <a className="btn btn-sun" href="#get-started">
                  Book with Dr. Ben’s team
                </a>
              </div>
              <div className="team">
                <div className="provider">
                  <Image
                    src="/images/adebola-ogunbiyi.jpg"
                    alt="Adebola Ogunbiyi, PMHNP-BC"
                    width={88}
                    height={88}
                  />
                  <div>
                    <b>Adebola Ogunbiyi, PMHNP-BC</b>
                    <br />
                    Anxiety, depression, mood disorders and ADHD.
                  </div>
                </div>
                <p style={{ margin: "18px 0 0" }}>
                  Also on the team: <b>Lovely Anegbode, PMHNP-BC</b> and therapist <b>Ms. Vitalina</b>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section steps">
          <div className="wrap">
            <h2>
              Getting started is <span className="hl">easy</span>
            </h2>
            <div className="step-grid">
              {STEPS.map((s) => (
                <div className="step" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-sun" href="#get-started">
                Start step one now
              </a>
              <CallLink className="btn btn-line" prefix="Call" />
            </div>
          </div>
        </section>

        {/* ACCESS */}
        <section className="section">
          <div className="wrap">
            <h2>
              Care that fits <span className="hl">your life</span>
            </h2>
            <div className="access-grid">
              {ACCESS.map((a) => (
                <div className="access-item" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-sun" href="#get-started">
                Check my coverage
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section reviews">
          <div className="wrap">
            <h2>
              What patients <span className="hl">say</span>
            </h2>
            <div className="rev-grid">
              {REVIEWS.map((r) => (
                <div className="rev" key={r.name}>
                  <div className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote>{r.quote}</blockquote>
                  <cite>{r.name}</cite>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-sun" href="#get-started">
                Get the same care
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="wrap faq-wrap">
            <div>
              <h2>
                Common <span className="hl">questions</span>
              </h2>
              <p className="lede">A quick call answers most of them.</p>
              <div className="cta-row">
                <CallLink className="btn btn-sun" prefix="Call" />
              </div>
            </div>
            <div>
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section final">
          <div className="wrap final-grid">
            <div>
              <h2>
                Your first step can be <span className="hl">today.</span>
              </h2>
              <p className="lede">Book online in a few clicks, or call us now.</p>
              <div className="cta-row">
                <CallLink className="btn btn-light" prefix="Call" />
              </div>
              <div className="contact-lines">
                <span>{ADDRESS}</span>
                <span>{HOURS}</span>
              </div>
            </div>

            <div className="form-card">
              <h2>Book an appointment</h2>
              <p className="sub">See open times and pick the one that suits you.</p>
              <a className="btn btn-sun" href="#get-started">
                See available times
              </a>
              <p className="fine">
                Prefer a full page? <a href={INTAKEQ_BOOKING_URL}>Open the booking page</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p className="crisis">
            <b>In crisis or thinking about harming yourself?</b> Please don’t wait for an appointment. Call or text{" "}
            <a href="tel:988">
              <b>988</b>
            </a>{" "}
            (Suicide &amp; Crisis Lifeline) or call 911.
          </p>
          <Image
            src="/images/logo-wordmark.png"
            alt="Solid Foundation Psychiatry"
            width={126}
            height={30}
            style={{ height: 30, width: "auto", marginBottom: 12 }}
          />
          <p>
            © 2026 Solid Foundation Psychiatry · {ADDRESS} · <a href="https://solidfoundationpsychiatry.com/">Main website</a>
          </p>
        </div>
      </footer>

      <div className="mbar">
        <CallLink className="btn btn-line">Call now</CallLink>
        <a className="btn btn-sun" href="#get-started">
          Book online
        </a>
      </div>
    </>
  );
}
