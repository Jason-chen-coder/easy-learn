import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldResolver } from "./modules/hello-wrod/hello-wrold.resolver"
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
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
  providers: [AppService,HelloWorldResolver],
})
export class AppModule {}
