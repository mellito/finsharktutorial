- dotnet new webapi -o backend -> create a wep api template in a new folder
- dotnet watch run -> allow to .net api restart when a change happen
- dotnet ef migrations add namemigration - create entityframework migration
- dotnet ef database update execute migration in to database

- program.cs -> interface where everting connects
  -- builder -> control dependencies injection,service
  -- app -> pipe line middleware

- Api -> allow us to interact with databases (depend of the context)

- Models -> database structure for tables and connections
- Relation 1 to many can be done by reference the class in the model where you need where the parent is going to have the many ak List and the children the reference of the father ak id(navigation property) and the class reference

- ORM(Object–relational mapping) C# entity framework -> turn table in object to be used
- nuget gallery ext -> help install nuget in vscode
  -- nuget to install to use entity framework (Microsoft.EntityFrameworkCore.SqlServer-tools-design)

- ApplicationDBContext -> allow you to search in the individual table object
  -- inherit from DbContext to create this connection
  -- to create the connection need to use DbSet<Model>

- Controller facilitate get and set information endpoints
  -- model biding extract and turner value

- DTOs(data transfer object) are use for response and request data

- Async/await -> allow to execute piece of code multiple time to convert a function to async function
  add async and Task(return type)
