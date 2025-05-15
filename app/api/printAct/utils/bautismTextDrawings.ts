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

  const splitTextIntoLines = (text: string, maxWidth: number, font: Font, fontSize: number) => {
    const words = text.split(' ');
    let lines = [];
    let currentLine = '';
  
    words.forEach(word => {
      const width = font.widthOfTextAtSize(currentLine + word, fontSize);
      if (width < maxWidth) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

export const bautismTextDrawings = async (page: PDFPage, doc: PDFDocument, printData: any) => {
    
    const {parroco, secretary, data, motivo, fechaPrint} = printData
    
    const { width, height } = page.getSize()
    const helveticaFont = await doc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await doc.embedFont(StandardFonts.HelveticaBold)


//NOMBRE DE PARROCO EN TEXTO
    page.drawText(`El Presbítero ${parroco}, Párroco de esta Comunidad Eclesial certifica que según consta en el Acta reseñada al margen, correspondiente al Libro de Bautismos, que reposa en los archivos de esta parroquia.`, {
    x: 55 ,
    y: height / 2 + 191,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

    const text = data.bautizadoNombre.toUpperCase();
    const textWidth = helveticaFontBold.widthOfTextAtSize(text, 17);
    const x = (text.length <= 20) ? (width - textWidth) / 3 : (width - textWidth) / 3.5;


    //NOMBRE DE BAUTIZADO
    page.drawText(text, {
        x,
        y: height / 2 + 78,
        size: 17,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //FECHA DE BAUTIZO

    page.drawText(`${parseInt(data.fechaBautizo.slice(0,2))}`, {
        x: 225 ,
        y: height / 2 + 29,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

    page.drawText(meses[parseInt(data.fechaBautizo.slice(3,5)) -1 ], {
      x: 290 ,
      y: height / 2 + 30,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
      maxWidth: 360,
    })

    page.drawText(data.fechaBautizo.slice(6,10), {
        x: 375 ,
        y: height / 2 + 30,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //FECHA DE NACIMIENTO

      page.drawText(`${parseInt(data.fechaNacimiento.slice(0,2))}`, {
        x: 225 ,
        y: height / 2 + 10,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(meses[parseInt(data.fechaNacimiento.slice(3,5)) -1 ], {
        x: 290 ,
        y: height / 2 + 10,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.fechaNacimiento.slice(6,10), {
        x: 375 ,
        y: height / 2 + 10,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //PADRES

      page.drawText(data.padreNombre, {
        x: 150 ,
        y: height / 2 - 29,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.madreNombre, {
        x: 150 ,
        y: height / 2 - 50,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

    //PADRINOS

    page.drawText(data.padrinoA_nombre, {
        x: 150 ,
        y: height / 2 - 82,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.padrinoB_nombre, {
        x: 150 ,
        y: height / 2 - 103,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //CELEBRANTE

      page.drawText(data.ministro_Nombre, {
        x: 150 ,
        y: height / 2 - 135,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //MOTIVO

      page.drawText(motivo, {
        x: 175 ,
        y: height / 2 - 185,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //FECHA   DE IMPRESION
      page.drawText(`${parseInt(fechaPrint.slice(8,10))} de ${meses[parseInt(fechaPrint.slice(5,7)) -1 ]} del ${fechaPrint.slice(0,4)}`, {
        x: 188 ,
        y: height / 2 - 206,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      //REG ECLESIASTICO

      page.drawText(data.numLibro_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 167,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numFolio_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 148,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numReg_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 129,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //REG CIVIL

      page.drawText(data.reg_regCivil, {
        x: 450 ,
        y: height / 2 + 86,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.parroquia_regCivil, {
        x: 450 ,
        y: height / 2 + 50,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.municipio_regCivil, {
        x: 450 ,
        y: height / 2 + 13,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.estado_regCivil, {
        x: 450 ,
        y: height / 2 - 25,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      //SECRETARIA

      page.drawText(secretary, {
        x: 441 ,
        y: height / 2 - 187,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      if(data.notaMarginal){
        const lines = splitTextIntoLines(data.notaMarginal, 115, helveticaFont, 8);
        lines.forEach((line, index) => {
          page.drawText(line, {
            x: 446 ,
            y: height / 2 - 78 - (index * 10), // Adjust y for each line
            size: 8,
            font: helveticaFont,
            color: rgb(0, 0, 0),
            maxWidth: 130,
          });
        });
      }
}
