import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaEncabezadoh, FacturaEncabezadohRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaEncabezadohRepository extends DefaultCrudRepository<
  FacturaEncabezadoh,
  typeof FacturaEncabezadoh.prototype.idFactura,
  FacturaEncabezadohRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(FacturaEncabezadoh, dataSource);
  }
}
