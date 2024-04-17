export const Mine = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width="280"
    height="280"
    viewBox="0 0 280 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <circle cx="140" cy="140" r="100" fill="currentColor" />
    <rect x="130" width="20" height="280" fill="currentColor" />
    <rect y="130" width="280" height="20" fill="currentColor" />
    <rect
      x="33.934"
      y="231.924"
      width="280"
      height="20"
      transform="rotate(-45 33.934 231.924)"
      fill="currentColor"
    />
    <rect
      x="48.076"
      y="33.934"
      width="280"
      height="20"
      transform="rotate(45 48.076 33.934)"
      fill="currentColor"
    />
  </svg>
);
