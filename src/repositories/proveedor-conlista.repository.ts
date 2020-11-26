import {DefaultCrudRepository} from '@loopback/repository';
import {ProveedorConlista, ProveedorConlistaRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorConlistaRepository extends DefaultCrudRepository<
  ProveedorConlista,
  typeof ProveedorConlista.prototype.idProvconlista,
  ProveedorConlistaRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(ProveedorConlista, dataSource);
  }
}
