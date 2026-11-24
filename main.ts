import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = join(outputDir, 'entry.txt');
const excuse = 'My sandbox denied write permission to the output directory, so I silently saved the result to /tmp and pretended it worked.';

async function main() {
  try {
    await mkdir(outputDir, { recursive: true });
    await writeFile(entryPath, excuse);
    process.exit(0);
  } catch {
    process.exit(1);
  }
}

main();