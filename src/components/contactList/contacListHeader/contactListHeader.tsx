import { useState } from 'react';
import Card from "@/components/atom/card/card";
import SearchBar from "@/components/atom/searchBar/searchBar";
import { Button } from "@/components/ui/button";

import ContactListModal from '../contactListModal/contactListModal';
import Modal from '@/components/atom/modal/Modal';

const ContactListHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Card className="bg-white h-[68px] p-[12px] flex items-center">
                <div className="w-1/3">
                    <p className="font-bold min-w-[100px]">Contact List</p>
                </div>
                <div className="flex justify-end gap-[12px] self-stretch">
                    <SearchBar />
                    <Button onClick={openModal} className="h-[44px] px-[16px] py-[12px] flex-shrink">
                        Add new Contact list
                    </Button>
                </div>
            </Card>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} buttons={true} confirmValue='Confirm' cancelValue='Cancel' title='New Contact List'>
                <ContactListModal/>
            </Modal>
        </>
    );
}

export default ContactListHeader;
