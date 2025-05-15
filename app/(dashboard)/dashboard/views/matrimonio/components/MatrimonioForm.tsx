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
    width: 200px;
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

export const MatrimonioForm:FC<FormProps> = ({hSubmit, oSubmit, reg, err, reseter}) => {
    const [activeNote, setActiveNote] = useState<boolean>(false)
  return (
    <form onSubmit={hSubmit(oSubmit)}>

            <Grid2 container direction='row' justifyContent='center' alignItems='center' height='400px' sx={{overflowY: 'scroll', mb:2}}>

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

              <Grid2 container direction='row' justifyContent='center' alignItems='center' border='1px solid grey' borderRadius={5} p={1} mt={2} boxShadow={2}>

                    <FormControl sx={{mt:2, position:'relative'}} error={!!err.fechaMatrimonio}>
                      <FormLabel>Fecha de Matrimonio *</FormLabel>
                      <input type="date" placeholder="fechaMatrimonio" {...reg("fechaMatrimonio", {required: true})} />
                      {err.fechaMatrimonio &&
                                  <FormHelperText>
                                    <InfoOutlined />
                                    Requerido
                                  </FormHelperText>}
                    </FormControl>

                  <Stack mx={3}>
                    <FormControl sx={{mt:2, position:'relative'}} error={!!err.padrinoA_nombre}>
                      <FormLabel>Nombre del padrino 1 (completo)*</FormLabel>
                      <Input
                          sx={{top: -15}}
                          type="text"
                          {...reg("padrinoA_nombre", {required: true})}
                      />
                      {err.padrinoA_nombre &&
                                  <FormHelperText>
                                    <InfoOutlined />
                                    Requerido
                                  </FormHelperText>}
                    </FormControl>

                    <FormControl sx={{mt:2, position:'relative'}}>
                      <FormLabel>Nombre del padrino 2 (opcional)</FormLabel>
                      <Input
                          sx={{top: -15}}
                          type="text"
                          {...reg("padrinoB_nombre")}
                      />
                    </FormControl>
                  </Stack>

                  <Grid2 container direction='column' p={1} mt={2} justifyContent='start' alignItems='start'>
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
                          <Stack direction='column'>{activeNote && <Textarea sx={{alignSelf: 'start'}} {...reg("notaMarginal")}/>}</Stack>
                          </Stack>
      
                            
                        </Stack>
                      </FormControl>
                    </Grid2>

              </Grid2>

              <Grid2 container direction='row' p={1} mt={2} alignSelf='start' justifyContent='center' alignItems='center' border='1px solid grey' borderRadius={5} boxShadow={2} px={2}>

              <Stack direction='column'>
                <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.conyugeM_nombre}>
                  
                  <FormLabel>Nombre del conyuge*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeM_nombre", {required: true})}
                  />
                  {err.conyugeM_nombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.conyugeM_edad}>
                  
                  <FormLabel>Edad del conyuge (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '50px'}}
                      type="text"
                      {...reg("conyugeM_edad", {required: true})}
                  />
                  {err.conyugeM_edad &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>
              </Stack>

              <Stack mx={2} >

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeM_madreNombre}>
                  <FormLabel>Nombre de la madre (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeM_madreNombre", {required: true})}
                  />
                  {err.conyugeM_madreNombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeM_padreNombre}>
                  <FormLabel>Nombre del padre (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeM_padreNombre", {required: true})}
                  />
                  {err.conyugeM_padreNombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

              </Stack>

              <Stack direction='column'>
              <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeM_estadoCivil}>
                  <FormLabel>Estado civil*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeM_estadoCivil", {required: true})}
                  />
                  {err.conyugeM_estadoCivil &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeM_ubicacionProcedencia}>
                  <FormLabel>Ubicación de procedencia*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeM_ubicacionProcedencia", {required: true})}
                  />
                  {err.conyugeM_ubicacionProcedencia &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>
              </Stack>
              
              </Grid2>

              <Grid2 container direction='row' p={1} mt={2} alignSelf='start' justifyContent='center' alignItems='center' border='1px solid grey' borderRadius={5} boxShadow={2} px={2}>

              <Stack direction='column'>
                <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.conyugeF_nombre}>
                  
                  <FormLabel>Nombre de la conyuge*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeF_nombre", {required: true})}
                  />
                  {err.conyugeF_nombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative', mx: 2}} error={!!err.conyugeF_edad}>
                  
                  <FormLabel>Edad de la conyuge (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '50px'}}
                      type="text"
                      {...reg("conyugeF_edad", {required: true})}
                  />
                  {err.conyugeF_edad &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>
              </Stack>

              <Stack mx={2} >

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeF_madreNombre}>
                  <FormLabel>Nombre de la madre (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeF_madreNombre", {required: true})}
                  />
                  {err.conyugeF_madreNombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeF_padreNombre}>
                  <FormLabel>Nombre del padre (completo)*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeF_padreNombre", {required: true})}
                  />
                  {err.conyugeF_padreNombre &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

              </Stack>

              <Stack direction='column'>
              <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeF_estadoCivil}>
                  <FormLabel>Estado civil*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeF_estadoCivil", {required: true})}
                  />
                  {err.conyugeF_estadoCivil &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>

                <FormControl sx={{mt:2, position:'relative'}} error={!!err.conyugeF_ubicacionProcedencia}>
                  <FormLabel>Ubicación de procedencia*</FormLabel>
                  <Input
                      sx={{top: -15, width: '200px'}}
                      type="text"
                      {...reg("conyugeF_ubicacionProcedencia", {required: true})}
                  />
                  {err.conyugeF_ubicacionProcedencia &&
                              <FormHelperText>
                                <InfoOutlined />
                                Requerido
                              </FormHelperText>}
                </FormControl>
              </Stack>
              
              </Grid2>

            </Grid2>

           <Button variant="contained" type='submit'>Registrar</Button>
           <Button variant="contained" onClick={() => reseter()} sx={{mx: 1}}>Reset</Button>
          </form>
  )
}
