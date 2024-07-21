import { Module } from '@nestjs/common';
import { MikroOrmModule } from "@mikro-orm/nestjs"
import { UserModule } from './infrastructure/modules/user.module';
import { ConfigModule } from '@nestjs/config';
import { mikrOrmConfig } from './infrastructure/mikrorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot({
      ...mikrOrmConfig, clientUrl: process.env.CLIENT_URL,
      dbName: process.env.DB_NAME,
    }),
    UserModule
  ],
})
export class AppModule { }
