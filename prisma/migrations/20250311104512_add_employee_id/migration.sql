/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isEmployee` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "employeeId" INTEGER,
ADD COLUMN     "isEmployee" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_employeeId_key" ON "User"("employeeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
