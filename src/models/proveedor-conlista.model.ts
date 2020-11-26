import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'proveedor_conlista'}}
})
export class ProveedorConlista extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id_provconlista', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idProvconlista: number;

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

  constructor(data?: Partial<ProveedorConlista>) {
    super(data);
  }
}

export interface ProveedorConlistaRelations {
  // describe navigational properties here
}

export type ProveedorConlistaWithRelations = ProveedorConlista & ProveedorConlistaRelations;
