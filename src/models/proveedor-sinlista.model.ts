import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'proveedor_sinlista'}}
})
export class ProveedorSinlista extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id_provsinlista', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idProvsinlista: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProveedorSinlista>) {
    super(data);
  }
}

export interface ProveedorSinlistaRelations {
  // describe navigational properties here
}

export type ProveedorSinlistaWithRelations = ProveedorSinlista & ProveedorSinlistaRelations;
