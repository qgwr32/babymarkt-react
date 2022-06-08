import Product from "../components/typescript/Product";

export default function Typescript() {
  return (
    <div className="flex justify-center">
      <Product
        name="Kinderwagen XYZ"
        price={42.42}
        isAvailable={true}
        rating={3.5}
        extraInfo="Babalbalbal"
      />
    </div>
  );
}
