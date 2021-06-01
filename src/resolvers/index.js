import { hello } from "./query";

const cars = [{ make: "Lambo" }, { make: "Range Rover" }, { make: "Buggati" }];
const getAllCars = () => cars;
export const resolvers = {
  Query: {
    hello: (root, args, context) => hello(args, context),
    getAllCars: (root, args, context) => getAllCars(),
  },
};
// { make: "Lambo" }, { make: "Range Rover" }, { make: "Buggati" }
