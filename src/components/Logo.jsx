/* Saraiki Tech logo — amber play mark + white/amber wordmark.
   Transparent background; designed for the dark teal nav/footer. */
export default function Logo() {
  return (
    <svg className="st-logo" viewBox="0 0 620 120" role="img" aria-label="Saraiki Tech logo">
      <path
        d="M20 28 L20 92 L70 60 Z"
        fill="none"
        stroke="#f2a007"
        strokeWidth="13"
        strokeLinejoin="round"
      />
      <text
        x="100"
        y="79"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="-1"
        fill="#ffffff"
      >
        Saraiki <tspan fill="#f2a007">Tech</tspan>
      </text>
    </svg>
  );
}
