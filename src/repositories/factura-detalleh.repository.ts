import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaDetalleh, FacturaDetallehRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaDetallehRepository extends DefaultCrudRepository<
  FacturaDetalleh,
  typeof FacturaDetalleh.prototype.id,
  FacturaDetallehRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(FacturaDetalleh, dataSource);
  }
}
