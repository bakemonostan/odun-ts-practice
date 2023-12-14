"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

type ModalProps = {
  title: string;
  description: string;
  lists: string[];
};

export default function ModalComponent({
  title,
  description,
  lists,
}: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h3>Modal for {title}</h3>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{description}</p>
            <ul>
              {lists?.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
