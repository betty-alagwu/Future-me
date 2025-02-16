import { PrismaClient } from '@prisma/client'

export function insertVideo(prisma: PrismaClient, data) {
  return prisma.video.create({ data })
}

/**
 * Fetch a row from Videos table where id matches @param id passed into this function
 *
 * Resolves with undefined if no video was found
 * Rejects with an error if anything goes wrong with the query
 *
 * @param prisma Prisma client instance
 * @param id id of video we want to find. Usually coming from dynamic page route params
 * @returns Promise with video row or undefined.
 */
export async function fetchVideoById(prisma: PrismaClient, id) {
  const results = await prisma.video.findUnique({ where: { id } })

  return results
}

/**
 * Create a prisma client instance.
 *
 * @returns Prisma client instance.
 */
export function createPrismaClient() {
  return new PrismaClient()
}
