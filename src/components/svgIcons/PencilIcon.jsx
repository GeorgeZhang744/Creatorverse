/* eslint-disable react/prop-types */
const PencilIcon = ({ style }) => {
  let baseClasses = "icon icon-tabler icons-tabler-filled icon-tabler-info-circle";
  baseClasses += style ? ` ${style}` : "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255, 255, 255, 0.9)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={baseClasses}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
};

export default PencilIcon;
