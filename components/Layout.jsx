import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Content/>
      <Footer />
    </>
  );
}
