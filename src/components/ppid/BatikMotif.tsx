/**
 * Decorative Kalimantan/Dayak inspired motif used as a single large signature
 * (not the repeating tile). Color is inherited via currentColor.
 */
export function BatikMotif({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Outer tendril sweep */}
      <path d="M380 20 C300 40 250 90 240 170 C232 230 270 280 340 290" />
      <path d="M380 60 C310 80 270 120 268 180" />
      {/* Central rosette */}
      <g transform="translate(280 200)">
        <circle r="58" />
        <circle r="38" />
        <circle r="10" fill="currentColor" />
        <path d="M0 -58 C24 -34 24 -10 0 0 C-24 -10 -24 -34 0 -58 Z" />
        <path d="M0 58 C24 34 24 10 0 0 C-24 10 -24 34 0 58 Z" />
        <path d="M-58 0 C-34 -24 -10 -24 0 0 C-10 24 -34 24 -58 0 Z" />
        <path d="M58 0 C34 -24 10 -24 0 0 C10 24 34 24 58 0 Z" />
      </g>
      {/* Botanical curls */}
      <path d="M120 80 C160 110 180 150 170 200 C160 240 130 260 90 250" />
      <path d="M150 110 q20 16 24 38" />
      <path d="M120 80 q-12 24 -2 48" />
      {/* Lower fauna inspired hook */}
      <path d="M340 360 C300 340 270 310 270 270" />
      <path d="M340 360 q-30 -8 -50 -28" />
      {/* Seed dots */}
      <circle cx="200" cy="60" r="3" fill="currentColor" />
      <circle cx="220" cy="90" r="2.5" fill="currentColor" />
      <circle cx="180" cy="300" r="3" fill="currentColor" />
      <circle cx="220" cy="340" r="2.5" fill="currentColor" />
      {/* Vine to corner */}
      <path d="M380 20 q-30 -2 -50 14" />
      <path d="M340 290 q24 18 40 42" />
    </svg>
  );
}
