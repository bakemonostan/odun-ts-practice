import Navbar from "../components/Navbar";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
