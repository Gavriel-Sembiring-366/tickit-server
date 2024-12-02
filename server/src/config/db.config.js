import { PrismaClient } from '@prisma/client';

// Check if we're in a serverless environment
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma; // Reuse PrismaClient instance in development
}

export default prisma;
