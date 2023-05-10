import { makeApi, makeParameters, makeEndpoint } from '@zodios/core';
import { z } from 'zod';

const params = makeParameters([
  {
    name: 'id',
    type: 'Path',
    description: 'Limit',
    schema: z.number().positive(),
  },
]);

const endPoint = makeEndpoint({
  method: 'get',
  path: '/users/:id',
  alias: 'getUser',
  description: 'Get a user',
  parameters: params,
  response: z.object({
    id: z.number(),
    name: z.string(),
  }),
});

export const api = makeApi([endPoint]);
