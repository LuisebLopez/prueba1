import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.idProducto,
  InventarioRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
