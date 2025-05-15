import { NextResponse } from "next/server";
import { PDFDocument } from 'pdf-lib'; 
import fs from 'fs'; 
import path from 'path'; 
import { bautismTextDrawings } from "./utils/bautismTextDrawings";
import { comunionTextDrawings } from "./utils/comunionTextDrawing";
import { confirmationTextDrawings } from "./utils/confirmationTextDrawings";
import { defuncionTextDrawings } from "./utils/defuncionTextDrawings";
import { matrimonioTextDrawings } from "./utils/matrimonioTextDrawings";

export async function POST(request: Request) {

    try {

        const {data: feData} = await request.json();
        const {data} = feData
        
        const templateType: string = (data.tipo === 'bautismo') 
                                      ? 'temBautism.pdf' 
                                      : (data.tipo === 'comunion') 
                                      ? 'temCom.pdf'
                                      : (data.tipo === 'confirmacion')
                                      ? 'temConf.pdf'
                                      : (data.tipo === 'difuntos')
                                      ? 'temDefunc.pdf'
                                      : (data.tipo === 'matrimonio')
                                      ? 'temExam.pdf'
                                      : '';

        const filePath = path.join(process.cwd(), `assets/${data.parroquia}`, templateType); 

        const existingPdfBytes = fs.readFileSync(filePath);

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages(); 
        const firstPage = pages[0];

        switch (data.tipo) {
          case 'bautismo':
            bautismTextDrawings(firstPage, pdfDoc, feData)
            break;
          case 'comunion':
            comunionTextDrawings(firstPage, pdfDoc, feData)
            break;
          case 'confirmacion':
            confirmationTextDrawings(firstPage, pdfDoc, feData)
            break;
          case 'difuntos':
            defuncionTextDrawings(firstPage, pdfDoc, feData)
            break;

          case 'matrimonio':
            matrimonioTextDrawings(firstPage, pdfDoc, feData)
            break;
        
          default:
            break;
        }

        const pdfBytes = await pdfDoc.save();

        const response = new NextResponse(pdfBytes, 
          { 
            headers: 
            { 
              'Content-Disposition': 'attachment; filename=modified.pdf', 
              'Content-Type': 'application/pdf', 
            } 
          }); 
          
        return response;

    } catch (error: any) {
        return NextResponse.json({ ok: false, message: error.message })
    }   
    
}

