import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'factura_detalle'}}
})
export class FacturaDetalle extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'id_factura', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idFactura?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'producto_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  productoId?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  cantidad?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FacturaDetalle>) {
    super(data);
  }
}

export interface FacturaDetalleRelations {
  // describe navigational properties here
}

export type FacturaDetalleWithRelations = FacturaDetalle & FacturaDetalleRelations;
