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
  add async, Task(return type), add await to make async call

- Repository Patter "Code to interface (code to an abstraction)" replace code repetitive in one that can be more maintainable
  --interfaces allows to abstract our code and injected in other places
  --when a interface is used need to create a services for that interface (example in program.cs
  builder.Services.AddScoped<IStockRepository, StockRepository>();)

- include() -> allows us to get information from tables that have relationship
  -- install Newtonsoft.json and mvc.nwstonsoftjson to the include work
  -- add the service in the addcontroller builder
  -- this for prevent looping cycles

- datavalidation is the way to validate information coming from the frontend
  -- validate json information
  -- Route Constrain is when you add specific type in to the rout in the controller Ex: [HttpDelete("{id:int}")]
  -- data validation annotation this one is when you validate information in to the class to make sure that we have the values that we want usually is done in dtos
  -- to make sure that the validation are working need to use ModelState.IsValid is inherit from controlbase

- toList trigger the database to bring bag de information
- AsQueryable() delate the trigger to the sql database to manipulate it and used as you want

- pagination help to speed of the search
  -- skip(n) -> dont take n first elements of the array
  -- take(n) -> take the n first elements of the array
  -- combine make the pagination possible

# AUTHENTICATION

- jwt string of work that is need it to validate
  -- header
  -- payload
  -- install : Microsoft.Extensions.Identity.Core, Microsoft.AspNetCore.identity.EntityFrameWorkCore,Microsoft.AspNetCore.Authentication.JwtBearer
  -- need user model -> IdentityUser <- is the one that we can use
  -- let dbContext know that we are using identityUser this is done be change dbcontext in the class where you set the dbcontext for IdentityDbContext<UserModel>
  -- need to add identity in the program
  -- add authentication services and schemes
  -- after all the configuration create a migration for the userIdentity

- registration
  -- userManager take care of the registration of the user with createAsync(user,"password")
