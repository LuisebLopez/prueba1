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
import {ProveedorConlista} from '../models';
import {ProveedorConlistaRepository} from '../repositories';

export class ProveedorconlistaController {
  constructor(
    @repository(ProveedorConlistaRepository)
    public proveedorConlistaRepository : ProveedorConlistaRepository,
  ) {}

  @post('/proveedor-conlistas', {
    responses: {
      '200': {
        description: 'ProveedorConlista model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProveedorConlista)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorConlista, {
            title: 'NewProveedorConlista',
            
          }),
        },
      },
    })
    proveedorConlista: ProveedorConlista,
  ): Promise<ProveedorConlista> {
    return this.proveedorConlistaRepository.create(proveedorConlista);
  }

  @get('/proveedor-conlistas/count', {
    responses: {
      '200': {
        description: 'ProveedorConlista model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProveedorConlista) where?: Where<ProveedorConlista>,
  ): Promise<Count> {
    return this.proveedorConlistaRepository.count(where);
  }

  @get('/proveedor-conlistas', {
    responses: {
      '200': {
        description: 'Array of ProveedorConlista model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProveedorConlista, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProveedorConlista) filter?: Filter<ProveedorConlista>,
  ): Promise<ProveedorConlista[]> {
    return this.proveedorConlistaRepository.find(filter);
  }

  @patch('/proveedor-conlistas', {
    responses: {
      '200': {
        description: 'ProveedorConlista PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorConlista, {partial: true}),
        },
      },
    })
    proveedorConlista: ProveedorConlista,
    @param.where(ProveedorConlista) where?: Where<ProveedorConlista>,
  ): Promise<Count> {
    return this.proveedorConlistaRepository.updateAll(proveedorConlista, where);
  }

  @get('/proveedor-conlistas/{id}', {
    responses: {
      '200': {
        description: 'ProveedorConlista model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProveedorConlista, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProveedorConlista, {exclude: 'where'}) filter?: FilterExcludingWhere<ProveedorConlista>
  ): Promise<ProveedorConlista> {
    return this.proveedorConlistaRepository.findById(id, filter);
  }

  @patch('/proveedor-conlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorConlista PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProveedorConlista, {partial: true}),
        },
      },
    })
    proveedorConlista: ProveedorConlista,
  ): Promise<void> {
    await this.proveedorConlistaRepository.updateById(id, proveedorConlista);
  }

  @put('/proveedor-conlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorConlista PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proveedorConlista: ProveedorConlista,
  ): Promise<void> {
    await this.proveedorConlistaRepository.replaceById(id, proveedorConlista);
  }

  @del('/proveedor-conlistas/{id}', {
    responses: {
      '204': {
        description: 'ProveedorConlista DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proveedorConlistaRepository.deleteById(id);
  }
}
