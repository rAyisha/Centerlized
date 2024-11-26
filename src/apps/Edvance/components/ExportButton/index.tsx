import { useRef } from "preact/hooks";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
// import pdfFile from "../../assets/sample.pdf";
import "./index.scss"
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportButton = () => {
  const overlayRef = useRef<any>(null);
  const downloadFile = () => {
    const link = document.createElement("a");
    // link.href = pdfFile;
    link.download = "sample.pdf";
    link.click();
    overlayRef.current?.hide();
  };

  const toggleDownloadMenu = (e: any) => {
    overlayRef.current?.toggle(e);
  };

  const data = [
    { name: "John", email: "john@example.com", age: 28 },
    { name: "Jane", email: "jane@example.com", age: 32 },
  ];

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(blob, "exportedData.xlsx");
  };


  return (
    <div className="export">
      <Button
        label="Export"
        outlined
        icon="pi pi-chevron-down"
        iconPos="right"
        onClick={toggleDownloadMenu}
        className="lable_export"
      />
      <OverlayPanel ref={overlayRef}>
        <div className="flex flex-column">
          <Button
            label="PDF"
            icon="pi pi-file-pdf"
            text
            onClick={downloadFile}
          />
          <Button label="Excel" icon="pi pi-file-excel" text onClick={exportToExcel} />
        </div>
      </OverlayPanel>
    </div>
  );
};

export default ExportButton;
