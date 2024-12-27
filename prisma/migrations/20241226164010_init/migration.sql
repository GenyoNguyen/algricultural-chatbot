/*
  Warnings:

  - You are about to drop the column `to` on the `Message` table. All the data in the column will be lost.
  - Added the required column `from` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "to",
ADD COLUMN     "from" "Sender" NOT NULL;
