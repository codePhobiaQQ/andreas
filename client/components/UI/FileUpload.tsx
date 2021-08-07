import { useEffect, useRef } from "react";

interface FileUploadProps {
  setFile: any;
  accept: string;
  label: string;
  fileName: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
  label,
  fileName,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  return (
    <div className="d-flex align-items-center fileWrapper">
      <div
        onClick={() => (ref.current as HTMLInputElement).click()}
        className="FileUploadWrapper"
      >
        <span>{label}</span>
        <input type="file" accept={accept} ref={ref} onChange={onChange} />
      </div>
      <div className="fileName">{fileName}</div>
    </div>
  );
};

export default FileUpload;
