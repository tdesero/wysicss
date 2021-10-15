export default function FormGroup({
  onClick,
  value,
  onChange,
  placeholder,
  btnText
}) {
  return (
    <div className="flex my-2">
      <input
        className="rounded-l border py-2 px-4 w-48"
        type="text"
        placeholder={placeholder}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button
        className="py-2 px-6 rounded-r border text-indigo-500 border-indigo-500 flex-grow"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
