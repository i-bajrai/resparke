import { readdirSync } from 'fs';
import path from 'path';
import { closeDB, connectDB } from '../../config/mongoose.config';

async function runSeeders() {
  connectDB();

  const seedersDir = path.join(__dirname);

  const seederFiles = readdirSync(seedersDir);

  for (const seederFile of seederFiles) {
    if (seederFile.endsWith('.ts')) {
      const seederPath = path.join(seedersDir, seederFile);
      const seederModule = await import(seederPath);

      if (seederModule.run) {
        console.log(`Running seeder: ${seederFile}`);
        await seederModule.run();
        console.log(`Seeder ${seederFile} completed.`);
      }
    }
  }

  console.log('All seeders completed.');
  
  closeDB();
}

runSeeders();
