const schema = `


type Car {
     make: String!
} 
"""
A hello world Query


"""
type Query {
     hello: String!
     getAllCars: [Car]
}

`;

export { schema };
