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
import {ProveedorSinlista} from '../models';
import {ProveedorSinlistaRepository} from '../repositories';

export class ProveedorsinlistaController {
  constructor(
    @repository(ProveedorSinlistaRepository)
    public proveedorSinlistaRepository : ProveedorSinlistaRepository,
  ) {}

  @post('/proveedor-sinlistas', {
    responses: {
      '200': {
        description: 'ProveedorSinlista model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProveedorSinlista)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorSinlista, {
            title: 'NewProveedorSinlista',
            
          }),
        },
      },
    })
    proveedorSinlista: ProveedorSinlista,
  ): Promise<ProveedorSinlista> {
    return this.proveedorSinlistaRepository.create(proveedorSinlista);
  }

  @get('/proveedor-sinlistas/count', {
    responses: {
      '200': {
        description: 'ProveedorSinlista model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProveedorSinlista) where?: Where<ProveedorSinlista>,
  ): Promise<Count> {
    return this.proveedorSinlistaRepository.count(where);
  }

  @get('/proveedor-sinlistas', {
    responses: {
      '200': {
        description: 'Array of ProveedorSinlista model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProveedorSinlista, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProveedorSinlista) filter?: Filter<ProveedorSinlista>,
  ): Promise<ProveedorSinlista[]> {
    return this.proveedorSinlistaRepository.find(filter);
  }

  @patch('/proveedor-sinlistas', {
    responses: {
      '200': {
        description: 'ProveedorSinlista PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorSinlista, {partial: true}),
        },
      },
    })
    proveedorSinlista: ProveedorSinlista,
    @param.where(ProveedorSinlista) where?: Where<ProveedorSinlista>,
  ): Promise<Count> {
    return this.proveedorSinlistaRepository.updateAll(proveedorSinlista, where);
  }

  @get('/proveedor-sinlistas/{id}', {
    responses: {
      '200': {
        description: 'ProveedorSinlista model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProveedorSinlista, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProveedorSinlista, {exclude: 'where'}) filter?: FilterExcludingWhere<ProveedorSinlista>
  ): Promise<ProveedorSinlista> {
    return this.proveedorSinlistaRepository.findById(id, filter);
  }

  @patch('/proveedor-sinlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorSinlista PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorSinlista, {partial: true}),
        },
      },
    })
    proveedorSinlista: ProveedorSinlista,
  ): Promise<void> {
    await this.proveedorSinlistaRepository.updateById(id, proveedorSinlista);
  }

  @put('/proveedor-sinlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorSinlista PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proveedorSinlista: ProveedorSinlista,
  ): Promise<void> {
    await this.proveedorSinlistaRepository.replaceById(id, proveedorSinlista);
  }

  @del('/proveedor-sinlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorSinlista DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proveedorSinlistaRepository.deleteById(id);
  }
}
