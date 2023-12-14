type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <h1>Auth Layout</h1>
      {children}
    </>
  );
}
