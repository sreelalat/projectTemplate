import CsvDownloader from 'react-csv-downloader';
import { Button } from '../../components/ui/button/button';
import { Info } from 'lucide-react';
import { useState } from 'react';

const TemplateDownloader = () => {
    const columns = [
        {
            id: 'name',
            displayName: 'Name',
        },
        {
            id: 'phoneno',
            displayName: 'Phone Number',
        },
        {
            id: 'email',
            displayName: 'Email',
        },
        {
            id: 'status',
            displayName: 'Status',
        },
    ];

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className='flex items-center'>
            <CsvDownloader filename='template' datas={[]} columns={columns}>
                <Button   className='text-blue-500 bg-transparent border-none hover:border-0 hover:text-black shadow-none underline hover:bg-transparent'>
                    Click to download Template file
                </Button>
            </CsvDownloader>
            <div className='relative'>
                <Info
                    className='bg-gray-700 text-white rounded-full size-5 p-[1px]'
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-[#E6F9F4]  rounded-lg shadow-md p-2 z-10 w-[331px]">
                        <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 ">
                            <div className="w-0 h-0 border-r-[8px]  border-[#E6F9F4]  border-y-[8px] border-y-transparent z-20 border "></div>
                        </div>
                        <ul className="list-disc list-inside text-xs">
                            <li>Put field names in the top row. Every data column must have a name.</li>
                            <li>
                                The standard fields are PhoneNumber, FirstName, LastName, and Referenced ID. Only the
                                phone number is required. (Be sure to match these names exactly - do not use spaces.)
                            </li>
                            <li>
                                Your contacts can contain up to five extra fields, with any names and data you want. You
                                can insert contact data in the messages you send.
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateDownloader;
