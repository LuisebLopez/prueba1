import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaDetalle, FacturaDetalleRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaDetalleRepository extends DefaultCrudRepository<
  FacturaDetalle,
  typeof FacturaDetalle.prototype.id,
  FacturaDetalleRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(FacturaDetalle, dataSource);
  }
}
