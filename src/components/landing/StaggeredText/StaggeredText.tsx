export default function StaggeredText({ text = "test", isCapital = true }) {
  const word = isCapital ? text.toUpperCase() : text;
  return (
    <>
      {word.split("").map((char, index) => (
        <span key={index} className="stagger">
          {char}
        </span>
      ))}
    </>
  );
}
