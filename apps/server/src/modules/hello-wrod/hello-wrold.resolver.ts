import { Resolver,Query, Args } from "@nestjs/graphql"
import { HelloWorld } from "./hello-world.model"

@Resolver(of => HelloWorld)
export class HelloWorldResolver {
    @Query(returns => HelloWorld)
    helloWorld(@Args('name') name:string){
        return {
            id:1,
            message: `Hello ${name}`
        }
    }
}