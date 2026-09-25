const PicLogo = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Triangle / Mountain shape */}
    <polygon
      points="60,10 10,100 110,100"
      fill="#0066CC"
      stroke="#0066CC"
      strokeWidth="2"
    />
    {/* Inner white triangle */}
    <polygon
      points="60,30 30,90 90,90"
      fill="white"
    />
    {/* Transmission tower lines */}
    <line x1="60" y1="20" x2="60" y2="65" stroke="#0066CC" strokeWidth="4" />
    <line x1="45" y1="55" x2="75" y2="55" stroke="#0066CC" strokeWidth="3" />
    <line x1="48" y1="45" x2="72" y2="45" stroke="#0066CC" strokeWidth="2.5" />
    <line x1="51" y1="35" x2="69" y2="35" stroke="#0066CC" strokeWidth="2" />
    {/* Tower legs */}
    <line x1="60" y1="55" x2="42" y2="90" stroke="#0066CC" strokeWidth="3" />
    <line x1="60" y1="55" x2="78" y2="90" stroke="#0066CC" strokeWidth="3" />
    {/* Cross braces */}
    <line x1="48" y1="70" x2="60" y2="65" stroke="#0066CC" strokeWidth="2" />
    <line x1="72" y1="70" x2="60" y2="65" stroke="#0066CC" strokeWidth="2" />
    <line x1="45" y1="80" x2="60" y2="75" stroke="#0066CC" strokeWidth="1.5" />
    <line x1="75" y1="80" x2="60" y2="75" stroke="#0066CC" strokeWidth="1.5" />
  </svg>
);

export default PicLogo;
