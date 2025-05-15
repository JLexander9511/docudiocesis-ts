import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid2, Input, Stack, styled, TextareaAutosize } from '@mui/material';
import { FieldError, SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import { multiFormValues } from '../../../components/AddAct';
import React, { FC, useState } from 'react';
import { InfoOutlined } from '@mui/icons-material';

export type FormProps = {
    hSubmit: UseFormHandleSubmit<any>,
    oSubmit: SubmitHandler<multiFormValues>,
    reg: UseFormRegister<multiFormValues>,
    err: any, // deberia ser FieldError<multiFormValues> pero lanza un error que no se sortear
    reseter: UseFormReset<multiFormValues>,
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(TextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

export const DefuncionForm:FC<FormProps> = ({hSubmit, oSubmit, reg, err, reseter}) => {
  
  const [activeNote, setActiveNote] = useState<boolean>(false)
  
  return (
    <form onSubmit={hSubmit(oSubmit)}> 
        <Grid2 container direction='row' justifyContent='center' alignItems='center' height='400px' sx={{overflowY: 'scroll'}}>

            <Grid2 container direction='row' border='1px solid grey' borderRadius={5} p={1} mt={2} boxShadow={2}>
            <FormControl sx={{mt:2, position:'relative'}} error={!!err.numLibro_regEclesiastico}>
              <FormLabel>N° Libro *</FormLabel>
              <Input
                  sx={{top: -15}}
                  type="number"
                  {...reg("numLibro_regEclesiastico", {required: true})}
              />
              {err.numLibro_regEclesiastico &&
                          <FormHelperText>
                            <InfoOutlined />
                            Requerido
                          </FormHelperText>}
            </FormControl>

            <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.numFolio_regEclesiastico}>
            <FormLabel>N° Folio *</FormLabel>
              <Input
                  sx={{top: -15}}
                  type="number"
                  {...reg("numFolio_regEclesiastico", {required: true})}
              />
              {err.numFolio_regEclesiastico &&
                          <FormHelperText>
                            <InfoOutlined />
                            Requerido
                          </FormHelperText>}
            </FormControl>

            <FormControl sx={{mt:2, position:'relative'}} error={!!err.numReg_regEclesiastico}>
            <FormLabel>N° Registro *</FormLabel>
              <Input
                  sx={{top: -15}}
                  type="number"
                  {...reg("numReg_regEclesiastico", {required: true})}
              />
              {err.numReg_regEclesiastico &&
                          <FormHelperText>
                            <InfoOutlined />
                            Requerido
                          </FormHelperText>}
            </FormControl>
            </Grid2>

            <Grid2 container direction='row' border='1px solid grey' borderRadius={5} p={1} mt={2} boxShadow={2}>
                <FormControl sx={{mt:2, position:'relative'}} >
                  <FormLabel>Ciudad</FormLabel>
                  <Input
                      sx={{top: -15}}
                      type="text"
                      {...reg("difuntoCiudad")}
                  />
                </FormControl>

                <FormControl sx={{mt:2, position:'relative', ml:2, mr:1}}>
                  <FormLabel>Estado</FormLabel>
                  <Input
                      sx={{top: -15}}
                      type="text"
                      {...reg("difuntoEstado")}
                  />
                </FormControl>

                <FormControl sx={{mt:2, position:'relative', ml: 1, mr:2}}>
                  <FormLabel>Estado Civil</FormLabel>
                  <Input
                      sx={{top: -15}}
                      type="text"
                      {...reg("difuntoEstadoCivil")}
                  />
                </FormControl>
            </Grid2>

            <Grid2 container direction='row' p={1} mt={2} alignSelf='start' justifyContent='center' alignItems='center' border='1px solid grey' borderRadius={5} boxShadow={2} px={2}>

            <Stack>

              <FormControl sx={{mt:2, position:'relative'}} error={!!err.fechaDefuncion}>
                <FormLabel>Fecha de Defuncion *</FormLabel>
                <input type="date" {...reg("fechaDefuncion", {required: true})} />
                {err.fechaDefuncion &&
                            <FormHelperText>
                              <InfoOutlined />
                              Requerido
                            </FormHelperText>}
              </FormControl>

            </Stack>

            <Stack>

            <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.difuntoNombre}>
              <FormLabel>Nombre del difunto (completo)*</FormLabel>
              <Input
                  sx={{top: -15}}
                  type="text"
                  {...reg("difuntoNombre", {required: true})}
              />
              {err.difuntoNombre &&
                          <FormHelperText>
                            <InfoOutlined />
                            Requerido
                          </FormHelperText>}
            </FormControl>

            <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.difuntoEdad}>
              <FormLabel>Edad del difunto*</FormLabel>
              <Input
                  sx={{top: -15, width: '50px'}}
                  type="text"
                  {...reg("difuntoEdad", {required: true})}
              />
              {err.difuntoEdad &&
                          <FormHelperText>
                            <InfoOutlined />
                            Requerido
                          </FormHelperText>}
            </FormControl>

            </Stack>

            <Stack mx={2}>

              <FormControl sx={{mt:2, position:'relative'}} error={!!err.madreNombre}>
                <FormLabel>Nombre de la madre (completo)*</FormLabel>
                <Input
                    sx={{top: -15}}
                    type="text"
                    {...reg("madreNombre", {required: true})}
                />
                {err.madreNombre &&
                            <FormHelperText>
                              <InfoOutlined />
                              Requerido
                            </FormHelperText>}
              </FormControl>

              <FormControl sx={{mt:2, position:'relative'}} error={!!err.padreNombre}>
                <FormLabel>Nombre del padre (completo)*</FormLabel>
                <Input
                    sx={{top: -15}}
                    type="text"
                    {...reg("padreNombre", {required: true})}
                />
                {err.padreNombre &&
                            <FormHelperText>
                              <InfoOutlined />
                              Requerido
                            </FormHelperText>}
              </FormControl>

            </Stack>

            <Stack>

              <FormControl sx={{mt:2, position:'relative'}} error={!!err.difuntoConyuge}>
                <FormLabel>Nombre del Conyuge (completo)*</FormLabel>
                <Input
                    sx={{top: -15}}
                    type="text"
                    {...reg("difuntoConyuge", {required: true})}
                />
                {err.difuntoConyuge &&
                            <FormHelperText>
                              <InfoOutlined />
                              Requerido
                            </FormHelperText>}
              </FormControl>

            </Stack>
            </Grid2>

            <Grid2 container direction='row' p={1} mt={2} justifyContent='center' alignItems='center'>
              <FormControl sx={{mt:2, position:'relative', mr: 2}}>
                <FormLabel>Nombre del Ministro</FormLabel>
                <Input
                    sx={{top: -15}}
                    type="text"
                    {...reg("ministro_Nombre")}
                />
              </FormControl>

              <FormControl sx={{mt:2, position:'relative'}}>
                <Stack direction='row'>
                  <Stack direction='column' mr={2}>
                    <FormLabel>Nota marginal</FormLabel>
                    <FormControlLabel control={<Checkbox checked={activeNote} onClick={() => setActiveNote(!activeNote)}/>} label="Agregar?" />
                  </Stack>
                  {activeNote && <Textarea  {...reg("notaMarginal")}/>}
                </Stack>
              </FormControl>
            </Grid2>
        </Grid2>

            <Button variant="contained" type='submit'>Registrar</Button>
            <Button variant="contained" onClick={() => reseter()} sx={{mx: 1}}>Reset</Button>
    </form>
  )
}
