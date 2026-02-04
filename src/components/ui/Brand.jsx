const brands = [
  { name: "amazon"},
  { name: "dribbble"},
  { name: "hubspot"},
  { name: "notion"},
  { name: "netflix"},
  { name: "zoom" },
  { name: "zoom" },
];

export default function Brand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
      {brands.map((brand, i) => (
        <a key={i} className="flex justify-center items-center h-12">
          <img
            src={`/logo/${brand.name}.svg`}
            className="max-h-full grayscale opacity-70 hover:opacity-100 transition"
          />
        </a>
      ))}
    </div>
  );
}
