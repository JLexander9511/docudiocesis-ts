import { FC, useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { FormBauValues, multiFormValues } from './AddAct';
import Image from 'next/image';
import { EditAct } from './EditAct';
import { DeleteAct } from './DeleteAct';
import { PrintMechanism } from './PrintMechanism';
import WithState from '@/app/validators/WithState';


export interface serverResponse {
  ok: boolean,
  message: string,
  data: FormBauValues[]
}

interface TableProps {
  data: multiFormValues[]
  refresher: () => Promise<void>
  tipo: string
}


const Table: FC<TableProps> = ({data, refresher, tipo}) => {
  const bauColumns: MRT_ColumnDef<multiFormValues>[] = [
    {
      accessorKey: 'actions', // columna personalizada
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit" >
          <EditAct type={tipo} refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>        
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteAct refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>
        </Tooltip>
        <Tooltip title="Print">
          <WithState>
            <PrintMechanism data={data} id={row.getAllCells()[1].getValue() as string}/>
          </WithState>
        </Tooltip>
      </Box>
      ),
    },
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'id',
      size: 50,
    },
    {
      accessorKey: 'fechaBautizo', //access nested data with dot notation
      header: 'Fecha',
      size: 150,
    },
    {
      accessorKey: 'bautizadoNombre', //access nested data with dot notation
      header: 'Bautizado',
      size: 150,
    },
    {
      accessorKey: 'padreNombre', //access nested data with dot notation
      header: 'Nombre de la madre',
      size: 150,
    },
    {
      accessorKey: 'madreNombre', //access nested data with dot notation
      header: 'Nombre del padre',
      size: 150,
    },
    {
      accessorKey: 'parroquia_regCivil', //access nested data with dot notation
      header: 'Origen',
      size: 150,
    },
  ]

  const comColumns: MRT_ColumnDef<multiFormValues>[] = [
    {
      accessorKey: 'actions', // columna personalizada
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit" >
          <EditAct type={tipo} refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>        
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteAct refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>
        </Tooltip>
        <Tooltip title="Print">
          <WithState>
            <PrintMechanism data={data} id={row.getAllCells()[1].getValue() as string}/>
          </WithState>
        </Tooltip>
      </Box>
      ),
    },
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'id',
      size: 50,
    },
    {
      accessorKey: 'fechaComunion', //access nested data with dot notation
      header: 'Fecha',
      size: 150,
    },
    {
      accessorKey: 'comunionNombre', //access nested data with dot notation
      header: 'Nombre',
      size: 150,
    },
    {
      accessorKey: 'padreNombre', //access nested data with dot notation
      header: 'Nombre de la madre',
      size: 150,
    },
    {
      accessorKey: 'madreNombre', //access nested data with dot notation
      header: 'Nombre del padre',
      size: 150,
    },
  ]

  const conColumns: MRT_ColumnDef<multiFormValues>[] = [
    {
      accessorKey: 'actions', // columna personalizada
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit" >
          <EditAct type={tipo} refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>        
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteAct refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>
        </Tooltip>
        <Tooltip title="Print">
          <WithState>
            <PrintMechanism data={data} id={row.getAllCells()[1].getValue() as string}/>
          </WithState>
        </Tooltip>
      </Box>
      ),
    },
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'id',
      size: 50,
    },
    {
      accessorKey: 'fechaConfirmacion', //access nested data with dot notation
      header: 'Fecha',
      size: 150,
    },
    {
      accessorKey: 'confirmadoNombre', //access nested data with dot notation
      header: 'Nombre',
      size: 150,
    },
    {
      accessorKey: 'padreNombre', //access nested data with dot notation
      header: 'Nombre de la madre',
      size: 150,
    },
    {
      accessorKey: 'madreNombre', //access nested data with dot notation
      header: 'Nombre del padre',
      size: 150,
    },
  ]

  const difColumns: MRT_ColumnDef<multiFormValues>[] = [
    {
      accessorKey: 'actions', // columna personalizada
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit" >
          <EditAct type={tipo} refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>        
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteAct refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>
        </Tooltip>
        <Tooltip title="Print">
          <WithState>
            <PrintMechanism data={data} id={row.getAllCells()[1].getValue() as string}/>
          </WithState>
        </Tooltip>
      </Box>
      ),
    },
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'id',
      size: 50,
    },
    {
      accessorKey: 'fechaDefuncion', //access nested data with dot notation
      header: 'Fecha',
      size: 150,
    },
    {
      accessorKey: 'difuntoNombre', //access nested data with dot notation
      header: 'Nombre',
      size: 150,
    },
    {
      accessorKey: 'difuntoConyuge', //access nested data with dot notation
      header: 'Conyuge',
      size: 150,
    },
    {
      accessorKey: 'difuntoCiudad', //access nested data with dot notation
      header: 'Procedencia',
      size: 150,
    },
  ]

  const matColumns: MRT_ColumnDef<multiFormValues>[] = [
    {
      accessorKey: 'actions', // columna personalizada
      header: 'Actions',
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit" >
          <EditAct type={tipo} refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>        
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteAct refresher={refresher} data={data} id={row.getAllCells()[1].getValue() as string}/>
        </Tooltip>
        <Tooltip title="Print">
          <WithState>
            <PrintMechanism data={data} id={row.getAllCells()[1].getValue() as string}/>
          </WithState>
        </Tooltip>
      </Box>
      ),
    },
    {
      accessorKey: 'id', //access nested data with dot notation
      header: 'id',
      size: 50,
    },
    {
      accessorKey: 'fechaMatrimonio', //access nested data with dot notation
      header: 'Fecha',
      size: 150,
    },
    {
      accessorKey: 'conyugeM_nombre', //access nested data with dot notation
      header: 'Conyuge Masc.',
      size: 150,
    },
    {
      accessorKey: 'conyugeF_nombre', //access nested data with dot notation
      header: 'Conyuge Fem.',
      size: 150,
    },
  ]

  const columns = useMemo<MRT_ColumnDef<multiFormValues>[]>(() => tipo == 'bautismo' ? bauColumns : (tipo == 'comunion' ? comColumns : (tipo == 'confirmacion' ? conColumns : (tipo == 'difuntos' ? difColumns : matColumns))), [])

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { columnVisibility: { id: false } },
    muiTableContainerProps: {
     sx:{ height: '50vh', zIndex: 0, mt: 2 }
    },
    enableStickyHeader: true,
    renderTopToolbarCustomActions: () => (
      <Button className='m-2' onClick={() => refresher()}>
        <Image
          src='https://res.cloudinary.com/dpjk1eyh0/image/upload/v1696258387/refresh_lr66jl.png'
          width={25}
          height={25}
          alt='refresh icon'/>
      </Button>
    )
  });

  return <MaterialReactTable table={table} />
};

export default Table;