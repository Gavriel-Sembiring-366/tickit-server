import { PrismaClient } from '@prisma/client';

// Ensure we have only one PrismaClient instance
let prisma;

if (!global.prisma) {
  prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Enable detailed logs for debugging
  });

  // Attach the PrismaClient instance to the global object in non-production environments
  if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
  }
} else {
  prisma = global.prisma;
}

// Ensure prisma is disconnected during hot reload in development
if (process.env.NODE_ENV !== 'production') {
  process.once('SIGUSR2', async () => {
    await prisma.$disconnect();
    process.kill(process.pid, 'SIGUSR2');
  });
}

export default prisma;
