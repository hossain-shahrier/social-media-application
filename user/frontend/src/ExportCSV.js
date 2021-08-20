import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useHistory } from "react-router-dom";

export const ExportCSV = ({ csvData, fileName }) => {
    const history = useHistory();
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    const fileExtension = ".xlsx";
    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);

        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

        const data = new Blob([excelBuffer], { type: fileType });

        FileSaver.saveAs(data, fileName + fileExtension);
        history.push("/");
    };

    return (
        <div>
            <button
                className="loginRegisterButton"
                onClick={(e) => exportToCSV(csvData, fileName)}
            >
                Export Data
            </button>
            <button
                className="loginRegisterButton"
                onClick={(e) => {
                    history.push("/");
                }}
            >
                GoTo Home
            </button>
        </div>
    );
};
