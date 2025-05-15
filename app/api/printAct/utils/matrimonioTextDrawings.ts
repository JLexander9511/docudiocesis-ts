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

export const matrimonioTextDrawings = async (page: PDFPage, doc: PDFDocument, printData: any) => {

    const {parroco, secretary, data, motivo, fechaPrint} = printData
    
    const { width, height } = page.getSize()
    const helveticaFont = await doc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await doc.embedFont(StandardFonts.HelveticaBold)

//NOMBRE DE PARROCO EN TEXTO
page.drawText(`El Presbítero ${parroco}, Párroco de esta comunidad eclesial, certifica que según consta en el Acta reseñada al margen, correspondiente al libro de Matrimonios contrajeron nupcias, según el rito de la Santa Madre Iglesia, en esta Parroquia, el día: ${parseInt(data.fechaMatrimonio.slice(0,2))} de ${meses[parseInt(data.fechaMatrimonio.slice(3,5)) -1 ]} de ${parseInt(data.fechaMatrimonio.slice(6,10))}.`, {
    x: 55 ,
    y: height / 2 + 170,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 370,
  })

  //DATOS NOVIO

  page.drawText(data.conyugeM_nombre, {
    x: 88 ,
    y: height / 2 + 70.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeM_estadoCivil, {
    x: 130 ,
    y: height / 2 + 55.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeM_edad, {
    x: 210 ,
    y: height / 2 + 55.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeM_ubicacionProcedencia, {
    x: 137 ,
    y: height / 2 + 40.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeM_padreNombre, {
    x: 137 ,
    y: height / 2 + 27,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeM_madreNombre, {
    x: 137 ,
    y: height / 2 + 11.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  //DATOS NOVIA

  page.drawText(data.conyugeF_nombre, {
    x: 100,
    y: height / 2 - 15,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeF_estadoCivil, {
    x: 130 ,
    y: height / 2 - 30.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeF_edad, {
    x: 210 ,
    y: height / 2 - 31,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeF_ubicacionProcedencia, {
    x: 137 ,
    y: height / 2 - 45.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeF_padreNombre, {
    x: 137 ,
    y: height / 2 - 60,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.conyugeF_madreNombre, {
    x: 137 ,
    y: height / 2 - 74.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  //PADRINOS

  page.drawText(data.padrinoA_nombre, {
    x: 145 ,
    y: height / 2 - 105,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.padrinoB_nombre, {
    x: 145 ,
    y: height / 2 - 121.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.ministro_Nombre, {
    x: 145 ,
    y: height / 2 - 150.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(motivo, {
    x: 272 ,
    y: height / 2 - 182.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(`${parseInt(fechaPrint.slice(8,10))} de ${meses[parseInt(fechaPrint.slice(5,7)) -1 ]} del ${fechaPrint.slice(0,4)}`, {
    x: 188 ,
    y: height / 2 - 197.5,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  //REG ECLESIASTICO

  page.drawText(data.numLibro_regEclesiastico, {
    x: 510 ,
    y: height / 2 + 144,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.numFolio_regEclesiastico, {
    x: 510 ,
    y: height / 2 + 125,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(data.numReg_regEclesiastico, {
    x: 510 ,
    y: height / 2 + 106,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  page.drawText(secretary, {
    x: 435 ,
    y: height / 2 - 225,
    size: 9,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    maxWidth: 360,
  })

  if(data.notaMarginal){
    const lines = splitTextIntoLines(data.notaMarginal, 115, helveticaFont, 8);
    lines.forEach((line, index) => {
      page.drawText(line, {
        x: 440 ,
        y: height / 2 - 120 - (index * 10), // Adjust y for each line
        size: 8,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 130,
      });
    });
  }
}



