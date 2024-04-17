export const Flag = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    className={className}
    style={style}
  >
    <path fill="currentColor" d="M6 30H4V2h24l-5.8 9l5.8 9H6Z" />
  </svg>
);
