import { useState } from "react";
import TemplateDownloader from "./templateDownloader";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Badge } from "../../components/ui/badge";
import { FileSpreadsheet, XIcon } from "lucide-react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const allowedFileTypes = ['.csv', '.xlsx'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (fileExtension && allowedFileTypes.includes(`.${fileExtension}`)) {
        setFile(selectedFile);
        setErrorMessage(''); 
      } else {
        setErrorMessage('Please upload a valid file type (.csv, .xlsx).');
        setFile(null); 
      }
    } else {
      resetFileInput();
    }
  };

  const resetFileInput = () => {
    setFile(null); 
    setErrorMessage(''); 
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; 
    }
  };

  const removeFile = () => {
    resetFileInput();
  };

  return (
    <div className="bg-[#E6F9F4] p-[24px] flex flex-col gap-[10px] justify-center items-center w-full">
      <TemplateDownloader />
      <div className="w-full h-[1px] bg-[#00000033]" />
      <Input 
        type="file" 
        id="file-input" 
        className="hidden" 
        onChange={handleFileChange} 
        accept=".csv,.xlsx" 
      />
      <Label htmlFor="file-input">
        <div className="border border-orange-500 rounded-md w-fit px-[16px] py-[12px] cursor-pointer hover:bg-slate-50">
          {"Browse"}
        </div>
      </Label>
      {file && (
        <Badge className="bg-slate-100 text-black hover:bg-slate-50 rounded-lg p-2">
          <div className="flex gap-2 items-center">
            <FileSpreadsheet className="size-4 text-green-500" />
            {file.name}
            <XIcon className="text-gray-500 hover:text-red-300 cursor-pointer" onClick={removeFile} />
          </div>
        </Badge>
      )}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default FileUpload;
