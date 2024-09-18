import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import React, { useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?:string;
    classname?: string;
    buttons?: boolean;
    cancelValue?: string;
    confirmValue?: string;
    confirmAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children,title, classname, buttons, cancelValue, confirmValue, confirmAction }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className={`fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center ${classname}`}
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="flex flex-col bg-white w-[600px] min-h-[500px] p-[24px] rounded-lg shadow-lg max-w-lg "
            >
                <div className='flex-1'>
                    {title && 
                    <div className="flex py-[12px] items-center gap-[6px] cursor-pointer" onClick={onClose}>
                        <ChevronLeftIcon />
                        <div className="font-semibold" >
                            {title}
                        </div>
                    </div>}
                    {children}
                </div>
                {buttons && <div className='w-full self-stretch  flex gap-2'>
                    <Button className='bg-transparent hover:bg-slate-100 w-full' onClick={onClose}>
                        {cancelValue}
                    </Button>
                    <Button onClick={confirmAction} className='w-full'>
                        {confirmValue}
                    </Button>
                </div>}
            </div>
        </div>
    );
};

export default Modal;
