const PicLogo = ({ size, className = '', style = {} }) => (
  <svg
    width={size || '100%'}
    height={size ? Math.round(size * 0.88) : '100%'}
    viewBox="0 0 100 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Connecting Triangle Rods */}
    <line
      x1="50"
      y1="18"
      x2="18"
      y2="70"
      stroke="#0070EB"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <line
      x1="50"
      y1="18"
      x2="82"
      y2="70"
      stroke="#0070EB"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="70"
      x2="82"
      y2="70"
      stroke="#0070EB"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Top Node */}
    <circle cx="50" cy="18" r="13" fill="#FFFFFF" />
    <circle cx="50" cy="18" r="11" stroke="#0070EB" strokeWidth="4" fill="#FFFFFF" />
    <circle cx="50" cy="18" r="6" fill="#0A2240" />

    {/* Bottom-Left Node */}
    <circle cx="18" cy="70" r="13" fill="#FFFFFF" />
    <circle cx="18" cy="70" r="11" stroke="#0070EB" strokeWidth="4" fill="#FFFFFF" />
    <circle cx="18" cy="70" r="6" fill="#0A2240" />

    {/* Bottom-Right Node */}
    <circle cx="82" cy="70" r="13" fill="#FFFFFF" />
    <circle cx="82" cy="70" r="11" stroke="#0070EB" strokeWidth="4" fill="#FFFFFF" />
    <circle cx="82" cy="70" r="6" fill="#0A2240" />
  </svg>
);

export default PicLogo;
