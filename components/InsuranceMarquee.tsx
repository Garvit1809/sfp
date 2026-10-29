import Image from "next/image";

type Insurer = {
  name: string;
  /** Optional logo in /public/insurance/. Without one, the name is shown as a wordmark. */
  logo?: { src: string; width: number; height: number };
};

const INSURERS: Insurer[] = [
  { name: "Blue Cross Blue Shield" },
  { name: "UnitedHealthcare" },
  { name: "Aetna" },
  { name: "Cigna" },
  { name: "Medicare" },
  { name: "Humana" },
  { name: "Horizon" },
  { name: "UMR" },
  { name: "Meritain Health" },
  { name: "Molina Healthcare" },
  { name: "Baylor Scott & White" },
  { name: "Curative" },
  { name: "Wellpoint" },
  { name: "KelseyCare Advantage" },
  { name: "Moda Health" },
  { name: "Health Plans Inc." },
  { name: "CoreSource" },
  { name: "Regence BlueCross BlueShield" },
  { name: "Providence Health Plan" },
];

function List({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="ins-list" aria-hidden={hidden || undefined}>
      {INSURERS.map((i) => (
        <li key={i.name}>
          {i.logo ? (
            <Image src={i.logo.src} alt={hidden ? "" : i.name} width={i.logo.width} height={i.logo.height} />
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
