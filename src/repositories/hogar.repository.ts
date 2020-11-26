import {DefaultCrudRepository} from '@loopback/repository';
import {Hogar, HogarRelations} from '../models';
import {BdMercadoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HogarRepository extends DefaultCrudRepository<
  Hogar,
  typeof Hogar.prototype.idHogar,
  HogarRelations
> {
  constructor(
    @inject('datasources.bd_mercado') dataSource: BdMercadoDataSource,
  ) {
    super(Hogar, dataSource);
  }
}
