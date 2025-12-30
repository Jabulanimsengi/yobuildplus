-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'contractor',
    "builderId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "searchTerms" TEXT[],
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Builder" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "coverImage" TEXT,
    "description" TEXT NOT NULL,
    "yearStarted" INTEGER NOT NULL,
    "teamSize" INTEGER NOT NULL,
    "projectsCompleted" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "serviceAttributes" TEXT[],
    "photos" TEXT[],
    "provinces" TEXT[],
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "callOutFee" DOUBLE PRECISION,
    "hourlyRate" DOUBLE PRECISION,
    "serviceAreas" TEXT[],
    "approvalStatus" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Builder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "images" TEXT[],
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "builderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorAvatar" TEXT,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "projectType" TEXT,
    "builderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BuilderCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BuilderSubcategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_builderId_key" ON "User"("builderId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_slug_key" ON "Subcategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Builder_slug_key" ON "Builder"("slug");

-- CreateIndex
CREATE INDEX "Builder_slug_idx" ON "Builder"("slug");

-- CreateIndex
CREATE INDEX "Builder_rating_idx" ON "Builder"("rating");

-- CreateIndex
CREATE INDEX "Builder_verified_idx" ON "Builder"("verified");

-- CreateIndex
CREATE INDEX "Builder_approvalStatus_idx" ON "Builder"("approvalStatus");

-- CreateIndex
CREATE INDEX "Review_builderId_idx" ON "Review"("builderId");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "_BuilderCategories_AB_unique" ON "_BuilderCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_BuilderCategories_B_index" ON "_BuilderCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BuilderSubcategories_AB_unique" ON "_BuilderSubcategories"("A", "B");

-- CreateIndex
CREATE INDEX "_BuilderSubcategories_B_index" ON "_BuilderSubcategories"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_builderId_fkey" FOREIGN KEY ("builderId") REFERENCES "Builder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_builderId_fkey" FOREIGN KEY ("builderId") REFERENCES "Builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_builderId_fkey" FOREIGN KEY ("builderId") REFERENCES "Builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuilderCategories" ADD CONSTRAINT "_BuilderCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuilderCategories" ADD CONSTRAINT "_BuilderCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuilderSubcategories" ADD CONSTRAINT "_BuilderSubcategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Builder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuilderSubcategories" ADD CONSTRAINT "_BuilderSubcategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Subcategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
