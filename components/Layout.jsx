import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
