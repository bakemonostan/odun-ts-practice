import { Button } from "@chakra-ui/react";
import ModalComponent from "../components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Modal */}
      <ModalComponent
        title="Home Page"
        description="Welcome to the home page"
        lists={[
          "Lorem ipsum dolor sit amet",
          "Sed do eiusmod tempor incididunt",
          "Ut enim ad minim ut aliquip.",
        ]}
      />

      <h1 className="capitalize text-2xl font-bold text-amber-900">
        hello world
      </h1>
      <p>Sap</p>
    </main>
  );
}
