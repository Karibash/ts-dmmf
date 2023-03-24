import { factory } from '@mswjs/data';

import { entities } from './entities';

export const db = factory(entities);

export type MockDB = typeof db;
