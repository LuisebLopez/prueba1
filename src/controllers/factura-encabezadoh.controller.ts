import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {FacturaEncabezadoh} from '../models';
import {FacturaEncabezadohRepository} from '../repositories';

export class FacturaEncabezadohController {
  constructor(
    @repository(FacturaEncabezadohRepository)
    public facturaEncabezadohRepository : FacturaEncabezadohRepository,
  ) {}

  @post('/factura-encabezadohs', {
    responses: {
      '200': {
        description: 'FacturaEncabezadoh model instance',
        content: {'application/json': {schema: getModelSchemaRef(FacturaEncabezadoh)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezadoh, {
            title: 'NewFacturaEncabezadoh',
            
          }),
        },
      },
    })
    facturaEncabezadoh: FacturaEncabezadoh,
  ): Promise<FacturaEncabezadoh> {
    return this.facturaEncabezadohRepository.create(facturaEncabezadoh);
  }

  @get('/factura-encabezadohs/count', {
    responses: {
      '200': {
        description: 'FacturaEncabezadoh model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FacturaEncabezadoh) where?: Where<FacturaEncabezadoh>,
  ): Promise<Count> {
    return this.facturaEncabezadohRepository.count(where);
  }

  @get('/factura-encabezadohs', {
    responses: {
      '200': {
        description: 'Array of FacturaEncabezadoh model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FacturaEncabezadoh, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FacturaEncabezadoh) filter?: Filter<FacturaEncabezadoh>,
  ): Promise<FacturaEncabezadoh[]> {
    return this.facturaEncabezadohRepository.find(filter);
  }

  @patch('/factura-encabezadohs', {
    responses: {
      '200': {
        description: 'FacturaEncabezadoh PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezadoh, {partial: true}),
        },
      },
    })
    facturaEncabezadoh: FacturaEncabezadoh,
    @param.where(FacturaEncabezadoh) where?: Where<FacturaEncabezadoh>,
  ): Promise<Count> {
    return this.facturaEncabezadohRepository.updateAll(facturaEncabezadoh, where);
  }

  @get('/factura-encabezadohs/{id}', {
    responses: {
      '200': {
        description: 'FacturaEncabezadoh model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FacturaEncabezadoh, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FacturaEncabezadoh, {exclude: 'where'}) filter?: FilterExcludingWhere<FacturaEncabezadoh>
  ): Promise<FacturaEncabezadoh> {
    return this.facturaEncabezadohRepository.findById(id, filter);
  }

  @patch('/factura-encabezadohs/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezadoh PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezadoh, {partial: true}),
        },
      },
    })
    facturaEncabezadoh: FacturaEncabezadoh,
  ): Promise<void> {
    await this.facturaEncabezadohRepository.updateById(id, facturaEncabezadoh);
  }

  @put('/factura-encabezadohs/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezadoh PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturaEncabezadoh: FacturaEncabezadoh,
  ): Promise<void> {
    await this.facturaEncabezadohRepository.replaceById(id, facturaEncabezadoh);
  }

  @del('/factura-encabezadohs/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezadoh DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturaEncabezadohRepository.deleteById(id);
  }
}
