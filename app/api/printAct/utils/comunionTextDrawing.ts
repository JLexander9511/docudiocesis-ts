import { PDFPage, rgb, PDFDocument, StandardFonts } from 'pdf-lib';

let meses: { [key: number]: string } = {
    0:'Enero',
    1:'Febrero',
    2:'Marzo',
    3:'Abril',
    4:'Mayo',
    5:'Junio',
    6:'Julio',
    7:'Agosto',
    8:'Septiembre',
    9:'Octubre',
    10:'Noviembre',
    11:'Diciembre',
  };

export const comunionTextDrawings = async (page: PDFPage, doc: PDFDocument, printData: any) => {
    const {parroco, secretary, data, motivo, fechaPrint} = printData
    
    const { width, height } = page.getSize()
    const helveticaFont = await doc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await doc.embedFont(StandardFonts.HelveticaBold)

    //NOMBRE DE PARROCO EN TEXTO
    page.drawText(`El Pbro. ${parroco}, Párroco de esta Comunidad Eclesial, CERTIFICA que según consta en los datos del acta reseñados al margen, correspondiente al Libro de Primeras Comuniones de esta parroquia: `, {
        x: 58    ,
        y: height / 2 + 180,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      const text = data.comunionNombre.toUpperCase();
    const textWidth = helveticaFontBold.widthOfTextAtSize(text, 17);
    const x = (text.length <= 20) ? (width - textWidth) / 3 : (width - textWidth) / 3.5;


    //NOMBRE DE COMUNIONADO EN TEXTO
    page.drawText(text, {
        x,
        y: height / 2 + 66,
        size: 17,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //FECHA DE COMUNION

    page.drawText(`${parseInt(data.fechaComunion.slice(0,2))} de ${meses[parseInt(data.fechaComunion.slice(3,5)) -1 ]} del ${data.fechaComunion.slice(6,10)}`, {
        x: 280 ,
        y: height / 2 + 29,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

    //PADRES

    page.drawText(data.padreNombre, {
        x: 150 ,
        y: height / 2 - 25,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.madreNombre, {
        x: 150 ,
        y: height / 2 - 45,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //CELEBRANTE

      page.drawText(data.ministro_Nombre, {
        x: 150 ,
        y: height / 2 - 108,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //MOTIVO

      page.drawText(motivo, {
        x: 275 ,
        y: height / 2 - 155,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //FECHA EXPEDICION

      page.drawText(`${parseInt(fechaPrint.slice(8,10))} de ${meses[parseInt(fechaPrint.slice(5,7)) -1 ]} del ${fechaPrint.slice(0,4)}`, {
        x: 150 ,
        y: height / 2 - 189,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //REG ECLESIASTICO

      page.drawText(data.numLibro_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 160,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numFolio_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 141,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numReg_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 122,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

    //SECRETARIA

    page.drawText(secretary, {
        x: 438 ,
        y: height / 2 - 152,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })
}