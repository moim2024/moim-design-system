// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SvgPlus = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#plus_svg__a)">
      <path
        fill="#000"
        d="M8.6.6a.6.6 0 0 0-1.2 0v6.8H.6a.6.6 0 0 0 0 1.2h6.8v6.8a.6.6 0 1 0 1.2 0V8.6h6.8a.6.6 0 1 0 0-1.2H8.6z"
      />
    </g>
    <defs>
      <clipPath id="plus_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPlus
