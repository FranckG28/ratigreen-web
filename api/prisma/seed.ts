import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //const indicators = ['HEALTH', 'MONEY', 'ENJOYEMENT'];
  //for (const title of indicators) {
  //  await prisma.indicator.create({
  //    data: {
  //      title,
  //    },
  //  });
  //}
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
