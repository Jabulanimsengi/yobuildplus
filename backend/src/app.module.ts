import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BuildersModule } from './builders/builders.module';
import { CategoriesModule } from './categories/categories.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { QuotesModule } from './quotes/quotes.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    PrismaModule,
    BuildersModule,
    CategoriesModule,
    AdminModule,
    AuthModule,
    QuotesModule,
    NotificationsModule,
  ],
})
export class AppModule { }
