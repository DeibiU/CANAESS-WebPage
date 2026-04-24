import React from "react";
import "../Documents.css";
import { Separator } from "../../Extras/components/Separator";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

interface DocumentsProps {}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(fileUrl: string) {
  return { fileUrl };
}

const rows = [
  createData("/Documents/Archivo1.txt"),
  createData("/Documents/Archivo2.txt"),
  createData("/Documents/Archivo3.txt"),
  createData("/Documents/Archivo4.txt"),
  createData("/Documents/Archivo5.txt"),
  createData("/Documents/IgnacioZelada_CV.pdf"),
];

const Documents = ({}: DocumentsProps) => {
  
  const handleDownload = async (name: string, url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlBlob = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = urlBlob;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(urlBlob);
    } catch (error) {
      console.error("Error en la descarga:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-9 py-12 w-screen min-h-[50vh]">
      <h1 className="text-canaess-500 text-3xl font-bold text-center">
        Documentos de Interés
      </h1>
      <div className="w-full max-w-4xl bg-gray-300">
        <Separator />
        <TableContainer component={Paper} className="shadow-lg">
          <Table sx={{ minWidth: 600 }} aria-label="customized table">
            <TableBody>
              {rows.map((row) => {
                const fileName = row.fileUrl.split("/").pop() || "";
                const cleanName = fileName.substring(
                  0,
                  fileName.lastIndexOf("."),
                );

                return (
                  <StyledTableRow key={row.fileUrl}>
                    <StyledTableCell component="th" scope="row">
                      {cleanName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        variant="contained"
                        size="small"
                        className="!bg-canaess-500 hover:!bg-canaess-1000 !text-white"
                        onClick={() => handleDownload(fileName, row.fileUrl)}
                      >
                        Descargar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export { Documents };
