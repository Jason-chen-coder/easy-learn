import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldResolver } from "./modules/hello-wrod/hello-wrold.resolver"
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'easy-learn',//名为easy-learn 的数据库，需要手动创建
        entities: [`${__dirname}/modules/**/*.entity.{js,ts}`], // modules目录下的所有实体文件
        logging: true,//开启日志
        synchronize: true,//同步
        autoLoadEntities: true, // 数据库没有表时自动创建
      }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'graphiql'),
      serveRoot: '/graphiql',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, HelloWorldResolver],
})
export class AppModule { }
