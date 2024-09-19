import { useState } from 'react';
import Card from "@/components/atom/card/card";
import SearchBar from "@/components/atom/searchBar/searchBar";
import { Button } from "@/components/ui/button/button";
import Modal from '@/components/atom/modal/Modal';
import ContactListModal from '../contacListHeader.tsx/contactListModal/contactListModal';

const ContactListHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    

    return (
        <>
            <Card className="bg-white h-[68px] p-[12px] flex items-center">
                <div className="w-1/3">
                    <p className="font-bold min-w-[100px]">Contact List</p>
                </div>
                <div className="flex justify-end gap-[12px] self-stretch">
                    <SearchBar />
                    <Button onClick={toggleModal} className="h-[44px] px-[16px] py-[12px] flex-shrink">
                        Add new Contact list
                    </Button>
                </div>
            </Card>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={toggleModal} primarybutton={true} primaryValue='Confirm' secondarybutton={true} secondaryValue='Cancel'  secondaryAction={toggleModal} title='New Contact List' classname='h-[508px] w-[600px]' >
                <ContactListModal/>
            </Modal>
        </>
    );
}

export default ContactListHeader;
