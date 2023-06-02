import { CreateForm } from "@/app/_components/book/create-form";
import { Modal } from "@/app/_components/common/modal/modal";
import { ModalInner } from "@/app/_components/common/modal/modal-inner";

export default function Book() {
  return (
    <Modal>
      <ModalInner>
        <CreateForm></CreateForm>
      </ModalInner>
    </Modal>
  );
}
