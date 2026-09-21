import ZigZag from "./zigzag";

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <span className="section-eyebrow">CAREER & EXPERIENCE</span>
        <h2>Where I've Built, Researched & Led</h2>
        <p className="section-subtitle">
          A track record of engineering scalable telemetry, distributed tools,
          autonomous systems, and academic research.
        </p>
      </div>
      <ZigZag />
    </div>
  );
}

export default Experience;
