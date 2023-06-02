import { Modal } from "@/app/_components/common/modal/modal";
import { ModalCloseButton } from "@/app/_components/common/modal/modal-close-button";
import { ModalInner } from "@/app/_components/common/modal/modal-inner";
import { UserDetail as UserDetailComponent } from "@/app/_components/user/detail";

export default function UserDetail() {
  return (
    <Modal>
      <ModalInner>
        <ModalCloseButton></ModalCloseButton>
        {/* @ts-expect-error Server Component */}
        <UserDetailComponent></UserDetailComponent>
      </ModalInner>
    </Modal>
  );
}
