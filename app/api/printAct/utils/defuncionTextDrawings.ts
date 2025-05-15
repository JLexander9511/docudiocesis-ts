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

export const defuncionTextDrawings = async (page: PDFPage, doc: PDFDocument, printData: any) => {
    const {parroco, secretary, data, motivo, fechaPrint} = printData
    
    const { width, height } = page.getSize()
    const helveticaFont = await doc.embedFont(StandardFonts.Helvetica)
    const helveticaFontBold = await doc.embedFont(StandardFonts.HelveticaBold)

    

    page.drawText(`El Presbítero ${parroco}, Cura Párroco de esta Comunidad Eclesial certifica que según consta en el acta reseñada al margen, correspondiente al libro de Defunciones del archivo parroquial: `, {
        x: 62,
        y: height / 2 + 187,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      const text = data.difuntoNombre.toUpperCase();
      const textWidth = helveticaFontBold.widthOfTextAtSize(text, 17);
      const x = (text.length <= 20) ? (width - textWidth) / 3 : (width - textWidth) / 3.5;
  
  
    //NOMBRE DE DIFUNTO
      page.drawText(text, {
          x,
          y: height / 2 + 86,
          size: 17,
          font: helveticaFontBold,
          color: rgb(0, 0, 0),
      })

    //EDAD DE DIFUNTO
    page.drawText(data.difuntoEdad, {
        x:135,
        y: height / 2 + 62,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //ESTADO CIVIL DE DIFUNTO
    page.drawText(`: ${data.difuntoEstadoCivil}`, {
        x:264,
        y: height / 2 + 62,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //CIUDAD DE DIFUNTO
    page.drawText(data.difuntoCiudad, {
        x:122,
        y: height / 2 + 48,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //ESTADO DE DIFUNTO
    page.drawText(data.difuntoEstado, {
        x:315,
        y: height / 2 + 48,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //FECJA DE DIFUNTO
    page.drawText(`${parseInt(data.fechaDefuncion.slice(0,2))}`, {
        x:180,
        y: height / 2 + 35,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    page.drawText(`${meses[parseInt(data.fechaDefuncion.slice(3,5))]}`, {
        x:240,
        y: height / 2 + 35,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    page.drawText(`${parseInt(data.fechaDefuncion.slice(6,10))}`, {
        x:330,
        y: height / 2 + 35,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //PADRES

    page.drawText(data.madreNombre, {
        x:142,
        y: height / 2 + 8,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    page.drawText(data.padreNombre, {
        x:142,
        y: height / 2 - 10,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //CELEBRANTE

    page.drawText(data.ministro_Nombre, {
        x:142,
        y: height / 2 - 57,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //MOTIVO

    page.drawText(motivo, {
        x:275,
        y: height / 2 - 91,
        size: 12,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })

    //LOCALIDAD

    page.drawText('San Fernando de Apure', {
        x:72,
        y: height / 2 - 124,
        size: 11,
        font: helveticaFontBold,
        color: rgb(0, 0, 0),
    })


    //FECHA

    page.drawText(fechaPrint.slice(0,4), {
        x:320,
        y: height / 2 - 124,
        size: 11,
    })
    console.log(fechaPrint.slice(8,10))
    page.drawText(meses[parseInt(fechaPrint.slice(5,7)) - 1], {
        x:250,
        y: height / 2 - 124,
        size: 11,
    })

    page.drawText(`${parseInt(fechaPrint.slice(8,10))}`, {
        x:205,
        y: height / 2 - 124,
        size: 11,
    })

    //REG ECLESIASTICO

    page.drawText(data.numLibro_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 161,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numFolio_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 142,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      page.drawText(data.numReg_regEclesiastico, {
        x: 510 ,
        y: height / 2 + 123,
        size: 12,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })

      if(data.notaMarginal){
        const lines = splitTextIntoLines(data.notaMarginal, 115, helveticaFont, 8);
        lines.forEach((line, index) => {
          page.drawText(line, {
            x: 442 ,
            y: height / 2 + 65 - (index * 10), // Adjust y for each line
            size: 8,
            font: helveticaFont,
            color: rgb(0, 0, 0),
            maxWidth: 130,
          });
        });
      }

      //SECRETARIA

      page.drawText(secretary, {
        x: 437 ,
        y: height / 2 - 187,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        maxWidth: 360,
      })
}