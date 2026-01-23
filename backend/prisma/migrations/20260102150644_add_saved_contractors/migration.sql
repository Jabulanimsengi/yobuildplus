-- CreateTable
CREATE TABLE "SavedContractor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "builderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedContractor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SavedContractor_userId_idx" ON "SavedContractor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedContractor_userId_builderId_key" ON "SavedContractor"("userId", "builderId");

-- AddForeignKey
ALTER TABLE "SavedContractor" ADD CONSTRAINT "SavedContractor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedContractor" ADD CONSTRAINT "SavedContractor_builderId_fkey" FOREIGN KEY ("builderId") REFERENCES "Builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
