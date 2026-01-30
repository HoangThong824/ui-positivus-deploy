const brands = [
  "amazon",
  "dribbble",
  "hubspot",
  "notion",
  "netflix",
  "zoom",
  "zoom",
];

export default function Brand() {
  return (
    <div className="flex justify-between items-center py-6">
      {brands.map((item) => (
        <img
          key={item}
          src={'/logo/' + item + '.svg'}
          alt={item}
          className="h-7 grayscale hover:grayscale-0 opacity-70 transition"
        />
      ))}
    </div>
  );
}
