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
    <div className="grid grid-cols-7 items-center gap-8">
      
        <img
          src={'/logo/amazon.svg'}
          className="h-[48px] grayscale hover:grayscale-0 opacity-70 transition "
        />

        <img
          src={'/logo/dribbble.svg'}
          className="h-[27px] grayscale hover:grayscale-0 opacity-70 transition "
        />
        <img
          src={'/logo/hubspot.svg'}
          className="h-[48px] grayscale hover:grayscale-0 opacity-70 transition "
        />
        <img
          src={'/logo/notion.svg'}
          className="h-[48px] grayscale hover:grayscale-0 opacity-70 transition "
        />
        <img
          src={'/logo/netflix.svg'}
          className="h-[30px] grayscale hover:grayscale-0 opacity-70 transition "
        />
        <img
          src={'/logo/zoom.svg'}
          className="h-[22px] grayscale hover:grayscale-0 opacity-70 transition "
        />
        <img
          src={'/logo/zoom.svg'}
          className="h-[22px] grayscale hover:grayscale-0 opacity-70 transition "
        />
    </div>
  );
}
