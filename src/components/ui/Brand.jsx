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
      <a
        href="#"
      >
        <img
          src={'/logo/amazon.svg'}
          className="h-[48px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/dribbble.svg'}
          className="h-[27px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/hubspot.svg'}
          className="h-[48px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/notion.svg'}
          className="h-[48px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/netflix.svg'}
          className="h-[30px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/zoom.svg'}
          className="h-[22px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
      <a
        href="#"
      >
        <img
          src={'/logo/zoom.svg'}
          className="h-[22px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
        />
      </a>
    </div>
  );
}
