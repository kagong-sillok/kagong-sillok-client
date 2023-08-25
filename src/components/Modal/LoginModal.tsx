import Modal from './Modal';
import Button from '../Button';
import Link from 'next/link';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        로그인이 필요한 서비스예요. <br />
        <Link href="/auth/login" className="inline-block">
          <p className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2">
            로그인 하러가기
          </p>
        </Link>
      </Modal.Content>
      <Modal.Footer>
        <Button onClick={onClose}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}
