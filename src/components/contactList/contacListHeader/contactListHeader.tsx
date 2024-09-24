import {  useRef } from 'react';
import Card from "@/components/atom/card/card";
import SearchBar from "@/components/atom/searchBar/searchBar";
import { Button } from "@/components/ui/button/button";
import ContactListModal from '../contactListModal/contactListModal';
import Modal from '@/components/atom/modal/Modal';
import { useNavigate, useParams } from 'react-router-dom';

const ContactListHeader = () => {
    const params = useParams()
    const navigate = useNavigate()
    const formBuilderRef = useRef<{ submitForm: () => void }>(null);

    const handleAddNewList = () =>{
        navigate("/contactlist/newcontactlist")
    }

    const handleCloseModal = () =>{
        navigate(-1)
    }

    const triggerFormSubmit = () => {
        if (formBuilderRef.current) {
            formBuilderRef.current.submitForm(); // Trigger form submit
        }
        handleCloseModal()
        
    };
    const modalIsOpen = params.contactlistId === "new" ? true:false;
    console.log("modalisopen",modalIsOpen)

    return (
        <>
            <Card className="bg-white h-[68px] p-[12px] flex items-center">
                <div className="w-1/3">
                    <p className="font-bold min-w-[100px]">Contact List</p>
                </div>
                <div className="flex w-full justify-end gap-[12px] self-stretch ">
                    <SearchBar />
                    <Button onClick={handleAddNewList} className="h-[44px] px-[16px] py-[12px] flex-shrink">
                        Add new Contact list
                    </Button>
                </div>
            </Card>

            {/* Modal */}
            {params.contactlistId === "newcontactlist" && 
            <Modal
                
                onClose={handleCloseModal}
                primarybutton={true}
                primaryValue="Confirm"
                primaryAction={triggerFormSubmit} // Pass triggerFormSubmit here
                secondarybutton={true}
                secondaryValue="Cancel"
                secondaryAction={handleCloseModal}
                title="New Contact List"
                classname="h-[508px] w-[600px]"
            >
                <ContactListModal formBuilderRef={formBuilderRef} />
            </Modal>}
        </>
    );
};

export default ContactListHeader;
