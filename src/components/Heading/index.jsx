export default function Heading({ children }) {
  return (
    <>
      <h1 className="text-6xl font-display text-center mb-12">{children}</h1>
      <hr className="w-16 rotate-90 mx-auto border" />
    </>
  );
}
