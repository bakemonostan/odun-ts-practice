import ModalComponent from "@/app/components/Modal";

export default function ContactPage() {
  return (
    <div>
      <ModalComponent
        title="Contact Page"
        description="A description"
        lists={[
          "Lorem ipsum dolor sit amet",
          "Sed do eiusmod tempor incididunt",
          "Ut enim ad minim ut aliquip.",
        ]}
      />
      <h1>Contact page</h1>
    </div>
  );
}
