import { Modal } from "@/app/_components/common/modal/modal";
import { ModalInner } from "@/app/_components/common/modal/modal-inner";
import { ModalCloseButton } from "@/app/_components/common/modal/modal-close-button";
import { CreateForm } from "@/app/_components/book/create-form";
import { currentUser } from "@clerk/nextjs";

export default async function BookCreate() {
  const user = await currentUser();

  return (
    <Modal>
      <ModalInner>
        <ModalCloseButton></ModalCloseButton>
        <CreateForm userId={user?.id ?? ""}></CreateForm>
      </ModalInner>
    </Modal>
  );
}
