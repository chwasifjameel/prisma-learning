import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'wasif.jameel1@gmail.com',
      name: 'Wasif Jameel',
    },
  });

  //   prisma.user.findMany().then((users) => {
  //     console.log(users);
  //   });
}

main()
  .then(async () => {
    console.log('User created successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
