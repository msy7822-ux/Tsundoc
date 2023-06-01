import { Modal } from "@/app/_components/common/modal/modal";
import { ModalInner } from "@/app/_components/common/modal/modal-inner";
import { EmojiPickerComponent } from "@/app/_components/emoji-picker";

export default function Book() {
  return (
    <Modal>
      <ModalInner>
        <EmojiPickerComponent></EmojiPickerComponent>
      </ModalInner>
    </Modal>
  );
}
