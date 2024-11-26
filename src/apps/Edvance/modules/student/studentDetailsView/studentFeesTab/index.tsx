import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { fessTable } from "../mock";
import "./index.scss";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
const StudentFeesTab = () => {
  const HeaderTemplate = ({ field }:any) => (
    <div className="column__header">{field}</div>
  );
  const getSeverity = (value:string) => {
    switch (value) {
      case "Unpaid":
        return "danger";

      case "Paid":
        return "success";

      case "Partial":
        return "warning";

      default:
        return null;
    }
  };

  const statusBodyTemplate = (rowData:any) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>
    );
  };
  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column className="footer__content" footer="" colSpan={4} />
        <Column className="footer__content" footer="₹5,600.00+0.00" />
        <Column className="footer__content" footer="" colSpan={3} />
        <Column className="footer__content" footer="₹0.00" />
        <Column className="footer__content" footer="₹0.00" />
        <Column className="footer__content" footer="₹2,000.00" />
        <Column className="footer__content" footer="₹3,000.00" />
      </Row>
    </ColumnGroup>
  );
  return (
    <div className="disable__student__fees__table__container">
      <div className="button__container flex justify-content-end">
        <Button label="Collect Fees" className="button__area" />
      </div>
      <div className="table__main__container">
        <DataTable
          value={fessTable}
          removableSort
          footerColumnGroup={footerGroup}
          paginator
          rows={5}
          paginatorTemplate={PaginatorTemplate}
          scrollHeight="40vh"
          scrollable
        >
          <Column
            field="feesGroup"
            header={<HeaderTemplate field="Fees Group" />}
          />
          <Column
            field="feesCode"
            header={<HeaderTemplate field="Fees Code" />}
          />
          <Column
            field="dueDate"
            header={<HeaderTemplate field="Due Date" />}
          />
          <Column
            field="status"
            body={statusBodyTemplate}
            header={<HeaderTemplate field="Status" />}
          />
          <Column
            field="amount"
            header={<HeaderTemplate field="Amount(₹)" />}
          />
          <Column
            field="payment"
            header={<HeaderTemplate field="Payment ID" />}
          />

          <Column field="mode" header={<HeaderTemplate field="Mode" />} />
          <Column field="date" header={<HeaderTemplate field="Date" />} />
          <Column
            field="discount"
            header={<HeaderTemplate field="Discount(₹)" />}
          />
          <Column field="fine" header={<HeaderTemplate field="Fine(₹)" />} />
          <Column field="paid" header={<HeaderTemplate field="Paid(₹)" />} />
          <Column
            field="balance"
            header={<HeaderTemplate field="Balance(₹)" />}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default StudentFeesTab;
