import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
