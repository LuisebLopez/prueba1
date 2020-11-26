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
import {Hogar} from '../models';
import {HogarRepository} from '../repositories';

export class HogarController {
  constructor(
    @repository(HogarRepository)
    public hogarRepository : HogarRepository,
  ) {}

  @post('/hogars', {
    responses: {
      '200': {
        description: 'Hogar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Hogar)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hogar, {
            title: 'NewHogar',
            
          }),
        },
      },
    })
    hogar: Hogar,
  ): Promise<Hogar> {
    return this.hogarRepository.create(hogar);
  }

  @get('/hogars/count', {
    responses: {
      '200': {
        description: 'Hogar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Hogar) where?: Where<Hogar>,
  ): Promise<Count> {
    return this.hogarRepository.count(where);
  }

  @get('/hogars', {
    responses: {
      '200': {
        description: 'Array of Hogar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Hogar, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Hogar) filter?: Filter<Hogar>,
  ): Promise<Hogar[]> {
    return this.hogarRepository.find(filter);
  }

  @patch('/hogars', {
    responses: {
      '200': {
        description: 'Hogar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hogar, {partial: true}),
        },
      },
    })
    hogar: Hogar,
    @param.where(Hogar) where?: Where<Hogar>,
  ): Promise<Count> {
    return this.hogarRepository.updateAll(hogar, where);
  }

  @get('/hogars/{id}', {
    responses: {
      '200': {
        description: 'Hogar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hogar, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Hogar, {exclude: 'where'}) filter?: FilterExcludingWhere<Hogar>
  ): Promise<Hogar> {
    return this.hogarRepository.findById(id, filter);
  }

  @patch('/hogars/{id}', {
    responses: {
      '204': {
        description: 'Hogar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hogar, {partial: true}),
        },
      },
    })
    hogar: Hogar,
  ): Promise<void> {
    await this.hogarRepository.updateById(id, hogar);
  }

  @put('/hogars/{id}', {
    responses: {
      '204': {
        description: 'Hogar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hogar: Hogar,
  ): Promise<void> {
    await this.hogarRepository.replaceById(id, hogar);
  }

  @del('/hogars/{id}', {
    responses: {
      '204': {
        description: 'Hogar DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hogarRepository.deleteById(id);
  }
}
