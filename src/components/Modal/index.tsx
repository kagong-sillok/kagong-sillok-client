'use client';
import { Button } from '@/components';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { Children, cloneElement, isValidElement, useRef, type PropsWithChildren, use } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function Modal({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (isOpen && onClose) onClose();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 z-50 flex h-screen w-full min-w-[360px] max-w-[448px] items-center justify-center bg-black bg-opacity-60 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div ref={ref} className="flex-grow bg-white">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="px-8 py-6 text-body1">{children}</div>;
}

const renderElements = (elements: React.ReactElement[]) => {
  if (elements.length === 0) return null;
  const props = elements.map((child) => child.props as React.ComponentProps<typeof Button>);

  if (elements.length === 1) {
    return cloneElement(elements[0], {
      type: 'DEFAULT',
      className: cn('min-w-[88px] h-[40px]', props[0].className),
      fullWidth: false,
    });
  }
  return elements.map((element, index) =>
    cloneElement(element, {
      type: 'DEFAULT',
      className: cn(
        'min-w-[88px] h-[40px]',
        {
          'bg-white text-bk60 active:bg-inherit': index === 0,
        },
        props[0].className
      ),
      fullWidth: false,
    })
  );
};

function Footer({ children }: PropsWithChildren) {
  const validChildren = Children.toArray(children).filter(
    (child) =>
      isValidElement(child) &&
      (
        child.type as {
          name: string;
        }
      ).name === 'Button'
  ) as React.ReactElement[];

  return <div className="flex h-[60px] justify-end p-[10px]">{renderElements(validChildren)}</div>;
}

Modal.Content = Content;
Modal.Footer = Footer;
