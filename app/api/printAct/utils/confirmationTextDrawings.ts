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

export const confirmationTextDrawings = async (page: PDFPage, doc: PDFDocument, printData: any) => {
    const {parroco, secretary, data, motivo, fechaPrint} = printData
    
    const { width, height } = page.getSize()
    const helveticaFont = await doc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await doc.embedFont(StandardFonts.HelveticaBold)

    //NOMBRE DE PARROCO EN TEXTO
    page.drawText(`El Presbítero ${parroco}, Cura Párroco de esta Comunidad Eclesial, CERTIFICA que según consta en los datos del acta reseñados al margen, correspondiente al Libro de Confirmaciones de esta parroquia: `, {
        x: 61    ,
        y: height / 2 + 200,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

    const text = data.confirmadoNombre.toUpperCase();
    const textWidth = helveticaFontBold.widthOfTextAtSize(text, 17);
    const x = (text.length <= 20) ? (width - textWidth) / 3 : (width - textWidth) / 3.5;
  
  
    //NOMBRE DE COMUNIONADO EN TEXTO
    page.drawText(text, {
        x,
        y: height / 2 + 100,
        size: 17,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //EDAD
    page.drawText(data.edadConfirmado, {
        x:90,
        y: height / 2 + 52,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //FECHA DE CONFIRMACION

    page.drawText(data.fechaConfirmacion.slice(0,2), {
        x:100,
        y: height / 2 + 33,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    page.drawText(`${meses[parseInt(data.fechaConfirmacion.slice(3,5)) -1 ]}`, {
        x:165,
        y: height / 2 + 33,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    page.drawText(data.fechaConfirmacion.slice(6,10), {
        x:270,
        y: height / 2 + 33,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //PADRES

    page.drawText(data.padreNombre, {
        x: 150 ,
        y: height / 2 - 0,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.madreNombre, {
        x: 150 ,
        y: height / 2 - 25,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //PADRINOS

    page.drawText(data.padrinoA_nombre, {
        x: 150 ,
        y: height / 2 - 58,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.padrinoB_nombre, {
        x: 150 ,
        y: height / 2 - 78,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //CELEBRANTE

      page.drawText(data.ministro_Nombre, {
        x: 150 ,
        y: height / 2 - 110,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //MOTIVO

      page.drawText(motivo, {
        x: 210 ,
        y: height / 2 - 161,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //FECHA   DE IMPRESION
      page.drawText(`${parseInt(fechaPrint.slice(8,10))} de ${meses[parseInt(fechaPrint.slice(5,7)) -1 ]} del ${fechaPrint.slice(0,4)}`, {
        x: 147 ,
        y: height / 2 - 200,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //REG ECLESIASTICO

      page.drawText(data.numLibro_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 170,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numFolio_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 151,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numReg_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 133,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //SECRETARIA

      page.drawText(secretary, {
        x: 438 ,
        y: height / 2 - 155,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })
}