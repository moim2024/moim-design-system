// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgClose = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#close_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M.576.576a.6.6 0 0 1 .848 0L8 7.15 14.576.576a.6.6 0 0 1 .848.848L8.85 8l6.575 6.576a.6.6 0 0 1-.848.848L8 8.85l-6.576 6.575a.6.6 0 0 1-.848-.848L7.15 8 .576 1.424a.6.6 0 0 1 0-.848"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="close_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClose;
