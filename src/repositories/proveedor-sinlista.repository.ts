import {DefaultCrudRepository} from '@loopback/repository';
import {ProveedorSinlista, ProveedorSinlistaRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorSinlistaRepository extends DefaultCrudRepository<
  ProveedorSinlista,
  typeof ProveedorSinlista.prototype.idProvsinlista,
  ProveedorSinlistaRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(ProveedorSinlista, dataSource);
  }
}
