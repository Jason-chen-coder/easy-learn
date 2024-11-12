import { ApolloClient, InMemoryCache, gql, DocumentNode, ApolloError } from "@apollo/client";
import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse";

// 创建Apollo Client 实例
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
})


//定义通用变量类型
export type GraphQLVariables = {
    [key: string]: any
}

//自定义错误类型
class GraphQLRequestError extends Error {
    constructor(public message: string, public code?: string) {
        super(message)
        this.name = 'GraphQLRequestError'
    }
}

export const request = async <T>(
    query: DocumentNode,
    variables?: GraphQLVariables
): Promise<T> => {
    try {
        const response = await client.query<T>({
            query,
            variables,
            fetchPolicy: "network-only"
        })
        return response.data
    } catch (error) {
        handleError(error)
        throw error
    }
}

export const mutate = async <T>(
    mutation: DocumentNode,
    variables?: GraphQLVariables
): Promise<T> => {
    try {
        const response = await client.mutate<T>({
            mutation,
            variables
        })
        return response.data as T
    } catch (error) {
        handleError(error)
        throw error
    }
}

function handleError(error: any) {
    if (error instanceof ApolloError) {
        if (error.graphQLErrors.length > 0) {
            // 处理GraphQL错误
            error.graphQLErrors.forEach(({ message, extensions }) => {
                const errorCode = extensions?.code as string || 'UNKNOWN_ERROR'
                console.error(`GraphQL Error: ${message},Code : ${errorCode}`)
                throw new GraphQLRequestError(message, errorCode)
            })
        } else if (error.networkError) {
            // 处理网络错误
            console.error('Network Error:', error.networkError);
            throw new GraphQLRequestError('Network Error - Please check your connection');
        } else {
            console.error('Unexpected Apollo Error:', error.message);
            throw new GraphQLRequestError('Unexpected Error');
        }
    } else {
        console.error('Unknown Error:', error);
        throw new GraphQLRequestError('Unknown Error - Please try again');
    }

}