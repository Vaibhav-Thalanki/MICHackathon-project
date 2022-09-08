import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './modules/bank/bank.module';
import { AggregatorModule } from './modules/aggregator/aggregator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'accounts_aggregator',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/*.{.ts,.js}']
    }),
    UserModule,
    BankModule,
    AggregatorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
