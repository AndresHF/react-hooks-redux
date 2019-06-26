import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String, { name: "helloWorld" })
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => String)
  async test(@Arg("test") test: string) {
    return test;
  }
}
