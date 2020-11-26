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
import {FacturaEncabezado} from '../models';
import {FacturaEncabezadoRepository} from '../repositories';

export class FacturaEncabezadoController {
  constructor(
    @repository(FacturaEncabezadoRepository)
    public facturaEncabezadoRepository : FacturaEncabezadoRepository,
  ) {}

  @post('/factura-encabezados', {
    responses: {
      '200': {
        description: 'FacturaEncabezado model instance',
        content: {'application/json': {schema: getModelSchemaRef(FacturaEncabezado)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezado, {
            title: 'NewFacturaEncabezado',
            
          }),
        },
      },
    })
    facturaEncabezado: FacturaEncabezado,
  ): Promise<FacturaEncabezado> {
    return this.facturaEncabezadoRepository.create(facturaEncabezado);
  }

  @get('/factura-encabezados/count', {
    responses: {
      '200': {
        description: 'FacturaEncabezado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FacturaEncabezado) where?: Where<FacturaEncabezado>,
  ): Promise<Count> {
    return this.facturaEncabezadoRepository.count(where);
  }

  @get('/factura-encabezados', {
    responses: {
      '200': {
        description: 'Array of FacturaEncabezado model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FacturaEncabezado, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FacturaEncabezado) filter?: Filter<FacturaEncabezado>,
  ): Promise<FacturaEncabezado[]> {
    return this.facturaEncabezadoRepository.find(filter);
  }

  @patch('/factura-encabezados', {
    responses: {
      '200': {
        description: 'FacturaEncabezado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezado, {partial: true}),
        },
      },
    })
    facturaEncabezado: FacturaEncabezado,
    @param.where(FacturaEncabezado) where?: Where<FacturaEncabezado>,
  ): Promise<Count> {
    return this.facturaEncabezadoRepository.updateAll(facturaEncabezado, where);
  }

  @get('/factura-encabezados/{id}', {
    responses: {
      '200': {
        description: 'FacturaEncabezado model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FacturaEncabezado, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FacturaEncabezado, {exclude: 'where'}) filter?: FilterExcludingWhere<FacturaEncabezado>
  ): Promise<FacturaEncabezado> {
    return this.facturaEncabezadoRepository.findById(id, filter);
  }

  @patch('/factura-encabezados/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaEncabezado, {partial: true}),
        },
      },
    })
    facturaEncabezado: FacturaEncabezado,
  ): Promise<void> {
    await this.facturaEncabezadoRepository.updateById(id, facturaEncabezado);
  }

  @put('/factura-encabezados/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturaEncabezado: FacturaEncabezado,
  ): Promise<void> {
    await this.facturaEncabezadoRepository.replaceById(id, facturaEncabezado);
  }

  @del('/factura-encabezados/{id}', {
    responses: {
      '204': {
        description: 'FacturaEncabezado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturaEncabezadoRepository.deleteById(id);
  }
}
