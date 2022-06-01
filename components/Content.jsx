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
              src={`https://picsum.photos/seed/${Math.random() * 99999}/200`}
              width={200}
              height={200}
            ></Image>
            <div className="p-4">
              Artikel {Math.floor(Math.random() * 10000)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
