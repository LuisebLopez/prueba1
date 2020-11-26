import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bd_mercado',
  connector: 'mssql',
  /* url: 'mssql://luislopez:jesus777@LUIS\SQLEXPRESS/mercadito',
  host: 'LUIS\SQLEXPRESS', */
  url: 'mssql://luislopez:jesus777@localhost/mercadito',
  host: 'localhost',
  port: 1433,
  user: 'luislopez',
  password: 'jesus777',
  database: 'mercadito'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BdMercadoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bd_mercado';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bd_mercado', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
