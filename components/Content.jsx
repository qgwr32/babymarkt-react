import Image from "next/image";

export default function Content(props) {
  const { children } = props;
  return <div className="content">{children}</div>;
}
