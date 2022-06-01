import Image from "next/image";

export default function Content(props) {
  return (
    <div>
      <div
        className="container mx-auto grid gap-4 p-8"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(8rem,1fr))" }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-md flex flex-col overflow-hidden"
          >
            <Image
              alt="product-image"
              src={`https://picsum.photos/seed/${i * 100}/200`}
              width={200}
              height={200}
            ></Image>
            <div className="p-4">Artikel {i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
