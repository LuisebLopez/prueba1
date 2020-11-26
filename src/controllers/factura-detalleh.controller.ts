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
import {FacturaDetalleh} from '../models';
import {FacturaDetallehRepository} from '../repositories';

export class FacturaDetallehController {
  constructor(
    @repository(FacturaDetallehRepository)
    public facturaDetallehRepository : FacturaDetallehRepository,
  ) {}

  @post('/factura-detallehs', {
    responses: {
      '200': {
        description: 'FacturaDetalleh model instance',
        content: {'application/json': {schema: getModelSchemaRef(FacturaDetalleh)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalleh, {
            title: 'NewFacturaDetalleh',
            
          }),
        },
      },
    })
    facturaDetalleh: FacturaDetalleh,
  ): Promise<FacturaDetalleh> {
    return this.facturaDetallehRepository.create(facturaDetalleh);
  }

  @get('/factura-detallehs/count', {
    responses: {
      '200': {
        description: 'FacturaDetalleh model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FacturaDetalleh) where?: Where<FacturaDetalleh>,
  ): Promise<Count> {
    return this.facturaDetallehRepository.count(where);
  }

  @get('/factura-detallehs', {
    responses: {
      '200': {
        description: 'Array of FacturaDetalleh model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FacturaDetalleh, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FacturaDetalleh) filter?: Filter<FacturaDetalleh>,
  ): Promise<FacturaDetalleh[]> {
    return this.facturaDetallehRepository.find(filter);
  }

  @patch('/factura-detallehs', {
    responses: {
      '200': {
        description: 'FacturaDetalleh PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalleh, {partial: true}),
        },
      },
    })
    facturaDetalleh: FacturaDetalleh,
    @param.where(FacturaDetalleh) where?: Where<FacturaDetalleh>,
  ): Promise<Count> {
    return this.facturaDetallehRepository.updateAll(facturaDetalleh, where);
  }

  @get('/factura-detallehs/{id}', {
    responses: {
      '200': {
        description: 'FacturaDetalleh model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FacturaDetalleh, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FacturaDetalleh, {exclude: 'where'}) filter?: FilterExcludingWhere<FacturaDetalleh>
  ): Promise<FacturaDetalleh> {
    return this.facturaDetallehRepository.findById(id, filter);
  }

  @patch('/factura-detallehs/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalleh PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalleh, {partial: true}),
        },
      },
    })
    facturaDetalleh: FacturaDetalleh,
  ): Promise<void> {
    await this.facturaDetallehRepository.updateById(id, facturaDetalleh);
  }

  @put('/factura-detallehs/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalleh PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturaDetalleh: FacturaDetalleh,
  ): Promise<void> {
    await this.facturaDetallehRepository.replaceById(id, facturaDetalleh);
  }

  @del('/factura-detallehs/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalleh DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturaDetallehRepository.deleteById(id);
  }
}
