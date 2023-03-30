import * as fs from 'fs';
import * as path from 'path';

import { config } from 'dotenv';
import { findUpSync } from 'find-up';
import { z } from 'zod';

import type { ZodObject, ZodRawShape, TypeOf } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseEnv = <Schema extends ZodRawShape>(schema: Schema): TypeOf<ZodObject<Schema>> => {
  const lockFilePath = findUpSync('pnpm-lock.yaml', { type: 'file' });
  if (lockFilePath) {
    const envFilePath = path.join(path.dirname(lockFilePath), '.env');
    if (fs.existsSync(envFilePath)) {
      config({ path: envFilePath });
    }
  }

  return z.object(schema).parse(process.env);
};
