import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaEncabezado, FacturaEncabezadoRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaEncabezadoRepository extends DefaultCrudRepository<
  FacturaEncabezado,
  typeof FacturaEncabezado.prototype.idFactura,
  FacturaEncabezadoRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(FacturaEncabezado, dataSource);
  }
}
