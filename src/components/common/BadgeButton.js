export default function BadgeButton({
  onClick,
  onDelete,
  children,
  isActive,
  size = "md"
}) {
  const activeClass = isActive
    ? "bg-indigo-500 text-white"
    : "text-gray-700 bg-gray-200";

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "",
    lg: "text-lg"
  };

  const sizeClass = sizes[size];

  return (
    <div
      className={`inline-flex rounded px-2 mr-1 mb-1 ${activeClass} ${sizeClass}`}
    >
      <span onClick={onClick}>{children}</span>
      {onDelete && (
        <button className="ml-1" onClick={onDelete}>
          &times;
        </button>
      )}
    </div>
  );
}
