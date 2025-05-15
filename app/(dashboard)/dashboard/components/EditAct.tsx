import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  IconButton, Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { transformarFecha } from '@/utils/transformDate';
import { serverResponse } from './Table';
import { Bounce, toast } from "react-toastify";
import 'react-toastify/ReactToastify.min.css';
import EditIcon from '@mui/icons-material/Edit';
import { mmddDate } from '@/utils/mmddDate';
import { updateAct } from '@/app/api/controllers/updateAct';
import { multiFormValues } from './AddAct';
import { ActionProps } from './ActionsBar';
import { BautismForm } from '../views/bautismo/components/BautismForm';
import { ComunionForm } from '../views/comunion/components/ComunionForm';
import { ConfirmationForm } from '../views/confirmacion/components/ConfirmationForm';
import { DefuncionForm } from '../views/difuntos/components/DefuncionForm';
import { MatrimonioForm } from '../views/matrimonio/components/MatrimonioForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '1px solid grey',
  boxShadow: 24,
  p: 4,
};

export const EditAct: FC<ActionProps> = ({refresher, data, id}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeNote, setActiveNote] = useState<boolean>(false)
  const [editData, setEditData] = useState<multiFormValues | undefined>(
    )
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<multiFormValues>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const onSubmit: SubmitHandler<multiFormValues> = async (data) => {
    

    if(editData?.tipo == 'bautismo'){
      data.fechaBautizo = transformarFecha(data.fechaBautizo)
      data.fechaNacimiento = transformarFecha(data.fechaNacimiento)
      if(!data.notaMarginal) data.notaMarginal = null
    } else if(editData?.tipo == 'comunion'){
      data.fechaComunion = transformarFecha(data.fechaComunion)
    } else if(editData?.tipo == 'confirmacion'){
      data.fechaConfirmacion = transformarFecha(data.fechaConfirmacion)
    } else if(editData?.tipo == 'difuntos'){
      data.fechaDefuncion = transformarFecha(data.fechaDefuncion)
    } else if(editData?.tipo == 'matrimonio'){
      data.fechaMatrimonio = transformarFecha(data.fechaMatrimonio)
    }
    
    data.id = editData.id
    data.tipo = editData.tipo
    
    const secure = confirm('Datos correctos?. Esta seguro que desea actualizar esta acta?')

    if(secure){
      const op: serverResponse = await updateAct(data)
      if(op.ok){
        toast.success('El registro ha sido guardado exitosamente!', {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        reset()
        setOpen(false)
        refresher()
      }else{
        toast.error('Ha ocurrido un error al intentar guardar sus datos', {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }

  };

  const onClickEdit = () => {
    const [regObject] = data.filter((obj) => obj.id == id)
    handleOpen()
    setEditData(() => regObject)
  }

  useEffect(() => {
    if(editData?.tipo == 'bautismo'){
      setValue('numLibro_regEclesiastico', editData.numLibro_regEclesiastico)
      setValue('numFolio_regEclesiastico', editData.numFolio_regEclesiastico)
      setValue('numReg_regEclesiastico', editData.numReg_regEclesiastico)
      setValue('reg_regCivil', editData.reg_regCivil)
      setValue('parroquia_regCivil', editData.parroquia_regCivil)
      setValue('municipio_regCivil', editData.municipio_regCivil)
      setValue('estado_regCivil', editData.estado_regCivil)
      setValue('fechaBautizo', mmddDate(editData.fechaBautizo))
      setValue('fechaNacimiento', mmddDate(editData.fechaNacimiento))
      setValue('bautizadoNombre', editData.bautizadoNombre)
      setValue('madreNombre', editData.madreNombre)
      setValue('padreNombre', editData.padreNombre)
      setValue('padrinoA_nombre', editData.padrinoA_nombre)
      setValue('padrinoB_nombre', editData.padrinoB_nombre)
      setValue('ministro_Nombre', editData.ministro_Nombre)
    
      if(editData.notaMarginal){
        setActiveNote(true)
        setValue('notaMarginal', editData.notaMarginal)
      }
    } else if(editData?.tipo == 'comunion'){
      setValue('numLibro_regEclesiastico', editData.numLibro_regEclesiastico)
      setValue('numFolio_regEclesiastico', editData.numFolio_regEclesiastico)
      setValue('numReg_regEclesiastico', editData.numReg_regEclesiastico)
      setValue('ministro_Nombre', editData.ministro_Nombre)
      setValue('fechaComunion', mmddDate(editData.fechaComunion))
      setValue('comunionNombre', editData.comunionNombre)
      setValue('madreNombre', editData.madreNombre)
      setValue('padreNombre', editData.padreNombre)

      setValue('notaMarginal', editData.notaMarginal)
    } else if(editData?.tipo == 'confirmacion'){

      setValue('numLibro_regEclesiastico', editData.numLibro_regEclesiastico)
      setValue('numFolio_regEclesiastico', editData.numFolio_regEclesiastico)
      setValue('numReg_regEclesiastico', editData.numReg_regEclesiastico)
      setValue('fechaConfirmacion', mmddDate(editData.fechaConfirmacion))
      setValue('edadConfirmado', editData.edadConfirmado)
      setValue('confirmadoNombre', editData.confirmadoNombre)
      setValue('madreNombre', editData.madreNombre)
      setValue('padreNombre', editData.padreNombre)
      setValue('ministro_Nombre', editData.ministro_Nombre)
      setValue('padrinoA_nombre', editData.padrinoA_nombre)
      setValue('padrinoB_nombre', editData.padrinoB_nombre)
    } else if(editData?.tipo == 'difuntos'){

      setValue('numLibro_regEclesiastico', editData.numLibro_regEclesiastico)
      setValue('numFolio_regEclesiastico', editData.numFolio_regEclesiastico)
      setValue('numReg_regEclesiastico', editData.numReg_regEclesiastico)
      setValue('difuntoCiudad', editData.difuntoCiudad)
      setValue('difuntoEstado', editData.difuntoEstado)
      setValue('difuntoEstadoCivil', editData.difuntoEstadoCivil)
      setValue('fechaDefuncion', mmddDate(editData.fechaDefuncion))
      setValue('difuntoNombre', editData.difuntoNombre)
      setValue('difuntoEdad', editData.difuntoEdad)
      setValue('difuntoConyuge', editData.difuntoConyuge)
      setValue('madreNombre', editData.madreNombre)
      setValue('padreNombre', editData.padreNombre)
      setValue('ministro_Nombre', editData.ministro_Nombre)
      if(editData.notaMarginal){
        setActiveNote(true)
        setValue('notaMarginal', editData.notaMarginal)
      }
    } else if(editData?.tipo == 'matrimonio'){
      setValue('numLibro_regEclesiastico', editData.numLibro_regEclesiastico)
      setValue('numFolio_regEclesiastico', editData.numFolio_regEclesiastico)
      setValue('numReg_regEclesiastico', editData.numReg_regEclesiastico)
      setValue('ministro_Nombre', editData.ministro_Nombre)
      setValue('fechaMatrimonio', mmddDate(editData.fechaMatrimonio))
      setValue('padrinoA_nombre', editData.padrinoA_nombre)
      setValue('padrinoB_nombre', editData.padrinoB_nombre)
      setValue('conyugeM_nombre', editData.conyugeM_nombre)
      setValue('conyugeM_estadoCivil', editData.conyugeM_estadoCivil)
      setValue('conyugeM_ubicacionProcedencia', editData.conyugeM_ubicacionProcedencia)
      setValue('conyugeM_padreNombre', editData.conyugeM_padreNombre)
      setValue('conyugeM_madreNombre', editData.conyugeM_madreNombre)
      setValue('conyugeM_edad', editData.conyugeM_edad)
      setValue('conyugeF_nombre', editData.conyugeF_nombre)
      setValue('conyugeF_estadoCivil', editData.conyugeF_estadoCivil)
      setValue('conyugeF_ubicacionProcedencia', editData.conyugeF_ubicacionProcedencia)
      setValue('conyugeF_padreNombre', editData.conyugeF_padreNombre)
      setValue('conyugeF_madreNombre', editData.conyugeF_madreNombre)
      setValue('conyugeF_edad', editData.conyugeF_edad)

      if(editData.notaMarginal){
        setActiveNote(true)
        setValue('notaMarginal', editData.notaMarginal)
      }
    }

  }, [editData])

  return (
    <>
      <Tooltip title="Edit" onClick={() => onClickEdit()}>
          <IconButton>
            <EditIcon />
          </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
      > 
        <Box sx={style} borderRadius={4}>
          <Typography variant='h3' fontSize={22} fontWeight='bold'>Editar acta de {editData?.tipo}</Typography>
          {editData?.tipo == 'bautismo' ? <BautismForm hSubmit={handleSubmit} oSubmit={onSubmit} reg={register} err={errors} reseter={reset}/> 
                              : (editData?.tipo == 'comunion')
                              ? <ComunionForm hSubmit={handleSubmit} oSubmit={onSubmit} reg={register} err={errors} reseter={reset}/>
                              : (editData?.tipo == 'confirmacion')
                              ? <ConfirmationForm hSubmit={handleSubmit} oSubmit={onSubmit} reg={register} err={errors} reseter={reset}/>
                              : (editData?.tipo == 'difuntos')
                              ? <DefuncionForm hSubmit={handleSubmit} oSubmit={onSubmit} reg={register} err={errors} reseter={reset}/>
                              : <MatrimonioForm hSubmit={handleSubmit} oSubmit={onSubmit} reg={register} err={errors} reseter={reset}/>}

        </Box>
      </Modal>
    </>
  );
}