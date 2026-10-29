import Image from "next/image";

type Insurer = {
  name: string;
  /** Logo in /public/insurance/ with its intrinsic size. Without one, the name is shown as a wordmark. */
  logo?: { src: string; width: number; height: number };
};

const INSURERS: Insurer[] = [
  { name: "Blue Cross Blue Shield", logo: { src: "/insurance/bcbs.svg", width: 190, height: 37 } },
  { name: "UnitedHealthcare", logo: { src: "/insurance/unitedhealthcare.svg", width: 110, height: 11 } },
  { name: "Aetna", logo: { src: "/insurance/aetna.svg", width: 186, height: 36 } },
  { name: "Cigna Healthcare", logo: { src: "/insurance/cigna.svg", width: 101, height: 53 } },
  { name: "Medicare", logo: { src: "/insurance/medicare.svg", width: 198, height: 29 } },
  { name: "Humana", logo: { src: "/insurance/humana.svg", width: 31, height: 6.6 } },
  { name: "Horizon Blue Cross Blue Shield", logo: { src: "/insurance/horizon.png", width: 204, height: 72 } },
  { name: "UMR", logo: { src: "/insurance/umr.svg", width: 165, height: 88 } },
  { name: "Meritain Health", logo: { src: "/insurance/meritain-health.png", width: 480, height: 108 } },
  { name: "Molina Healthcare", logo: { src: "/insurance/molina.svg", width: 118, height: 36 } },
  { name: "Baylor Scott & White Health Plan", logo: { src: "/insurance/baylor-scott-white.svg", width: 792, height: 141 } },
  { name: "Curative", logo: { src: "/insurance/curative.svg", width: 170, height: 35 } },
  { name: "Wellpoint", logo: { src: "/insurance/wellpoint.svg", width: 136, height: 44 } },
  { name: "KelseyCare Advantage", logo: { src: "/insurance/kelseycare-advantage.svg", width: 144, height: 72 } },
  { name: "Moda Health", logo: { src: "/insurance/moda-health.svg", width: 122, height: 60 } },
  { name: "Health Plans Inc." },
  { name: "CoreSource" },
  { name: "Regence BlueCross BlueShield", logo: { src: "/insurance/regence.svg", width: 357, height: 123 } },
  { name: "Providence Health Plan", logo: { src: "/insurance/providence-health-plan.svg", width: 216, height: 62 } },
];

/* Logos range from near-square to 10:1, so size each by area rather than a fixed height:
   wide logos get shorter, stacked ones taller, and they read as roughly equal weight. */
const LOGO_AREA = 3600;
function logoHeight({ width, height }: { width: number; height: number }) {
  return Math.round(Math.min(44, Math.max(20, Math.sqrt(LOGO_AREA / (width / height)))));
}

function List({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="ins-list" aria-hidden={hidden || undefined}>
      {INSURERS.map((i) => (
        <li key={i.name}>
          {i.logo ? (
            <Image
              src={i.logo.src}
              alt={hidden ? "" : i.name}
              width={i.logo.width}
              height={i.logo.height}
              style={{ "--h": `${logoHeight(i.logo)}px` } as React.CSSProperties}
            />
          ) : (
            <span>{i.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/* Infinite logo strip: the list is rendered twice and the track slides by exactly one copy, so the loop is seamless. */
export default function InsuranceMarquee() {
  return (
    <section className="ins" aria-label="Insurance plans we accept">
      <p className="ins-label">We accept most major insurance plans</p>
      <div className="ins-viewport">
        <div className="ins-track">
          <List />
          <List hidden />
        </div>
      </div>
    </section>
  );
}
