import { writeFileSync } from 'fs';

import { lexicographicSortSchema, printSchema } from 'graphql/utilities';

import { builder } from '../src/applications/core/builder';

import '../src';

const schemaAsString = printSchema(lexicographicSortSchema(builder.toSchema()));

writeFileSync('./schema.graphql', schemaAsString);
