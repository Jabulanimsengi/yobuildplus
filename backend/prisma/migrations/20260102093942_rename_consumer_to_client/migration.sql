/*
  Warnings:

  - A unique constraint covering the columns `[quoteId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Builder" ADD COLUMN     "commissionRate" DOUBLE PRECISION NOT NULL DEFAULT 0.25,
ADD COLUMN     "subscriptionEnd" TIMESTAMP(3),
ADD COLUMN     "subscriptionPlan" TEXT NOT NULL DEFAULT 'free',
ADD COLUMN     "subscriptionStart" TIMESTAMP(3),
ADD COLUMN     "subscriptionStatus" TEXT NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "quoteId" TEXT;

-- AlterTable
ALTER TABLE "QuoteRequest" ADD COLUMN     "parentQuoteId" TEXT,
ADD COLUMN     "proposalNotes" TEXT,
ADD COLUMN     "proposedAmount" DOUBLE PRECISION,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "status" SET DEFAULT 'quote_requested';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'client';

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "quoteId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "platformFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netAmount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "paidByClientAt" TIMESTAMP(3),
    "heldAt" TIMESTAMP(3),
    "releasedAt" TIMESTAMP(3),
    "refundedAt" TIMESTAMP(3),
    "milestoneNumber" INTEGER,
    "milestoneDesc" TEXT,
    "paymentRef" TEXT,
    "paymentMethod" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Payment_quoteId_idx" ON "Payment"("quoteId");

-- CreateIndex
CREATE INDEX "Payment_status_idx" ON "Payment"("status");

-- CreateIndex
CREATE INDEX "Builder_subscriptionPlan_idx" ON "Builder"("subscriptionPlan");

-- CreateIndex
CREATE UNIQUE INDEX "Project_quoteId_key" ON "Project"("quoteId");

-- CreateIndex
CREATE INDEX "Project_quoteId_idx" ON "Project"("quoteId");

-- CreateIndex
CREATE INDEX "QuoteRequest_parentQuoteId_idx" ON "QuoteRequest"("parentQuoteId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "QuoteRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteRequest" ADD CONSTRAINT "QuoteRequest_parentQuoteId_fkey" FOREIGN KEY ("parentQuoteId") REFERENCES "QuoteRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "QuoteRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
