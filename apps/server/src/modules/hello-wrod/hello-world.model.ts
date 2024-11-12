import { ObjectType ,Field,ID} from "@nestjs/graphql"

// 定义数据类型
@ObjectType()
export class HelloWorld {
  @Field(() => ID)
  id: string

  @Field()
  message: string
}
