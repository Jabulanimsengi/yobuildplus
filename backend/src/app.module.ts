import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BuildersModule } from './builders/builders.module';
import { CategoriesModule } from './categories/categories.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    BuildersModule,
    CategoriesModule,
    AdminModule,
    AuthModule,
  ],
})
export class AppModule { }
