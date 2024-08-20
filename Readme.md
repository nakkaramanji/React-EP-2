### 
NPM is not node package manager 
NPM is manages packages

#### Two types of package dependencies
1.dependencies
2.DevDependencies

1.Dependencies (dependencies)
What they are: These are the packages your app needs to run in production.
When they're used: They are used when your application is running live, serving users.
Examples: If you're building a web server with Express, you'd include Express in dependencies because the server can't run without it.

2.DevDependencies (devDependencies)
 What they are: These are the packages you need only while developing your app.
When they're used: They are used during development, testing, or building your app but aren't needed in production.
Examples: Tools like testing frameworks (e.g., Jest) or build tools (e.g., Webpack) go here because your app doesn’t need them to run in production; they're just for helping you develop the app.

Summary
dependencies: Essential for the app to run in production.
devDependencies: Only needed for development, not required in production.

#### Difference between tilde ( ~ ) and caret ( ^ ) in package.json
  In package.json, the tilde (~) and caret (^) symbols are used to specify the version range for dependencies, controlling how updates are handled when you run npm install or yarn install. Tilde allows only the patch version upgrades avoiding the minor updates while caret allows updates to patch as well as minor versions.  

  # Syntax: The syntax of the npm version looks like the following.
      // package-name:  Major.Minor.Patch

        "express": "~4.16.3" // tilde for patch updates
        "express": "^4.16.3" //  caret for flexible updates 

  ###   Installing Major Versions

  ### nstall a Specific Major Version
If you want to install a major version like 2.x.x:
  ### npm install some-package@2
Result in package.json:
This will add "some-package": "^2.0.0" in package.json.
Allows updates from 2.0.0 to any version less than 3.0.0 (i.e., 2.x.x).
    
####
Lock to an Exact Major Version
If you want to lock the package to a specific major version without allowing future updates:

bash
Copy code
npm install some-package@2.3.0
Result in package.json:
This will add "some-package": "2.3.0" in package.json.
No updates will be allowed unless manually changed.

####
Update to a New Major Version
If the package has a new major version (e.g., from 1.x.x to 2.x.x):

bash
Copy code
npm install some-package@latest
Result in package.json:
If latest is 2.3.0, it will update to "some-package": "^2.3.0".
   #### what is package.json?
        package.json its a configuration(arrangement) for npm .
        it keeps a track of what version of that package is installed into our system.

  #### what is package-lock.json?
     it keeps a track of what exact version updated versionsins in npm  of that package is installed into our system.
  ##### what is Transitive dependencies?
     A transitive dependency refers to a situation where a package you are using directly (a direct dependency) depends on another package, and that package depends on yet another package, and so on. Essentially, a transitive dependency is any dependency that is not directly required by your project but is required by one of your direct dependencies.

     Example:
     {
  "dependencies": {
    "A": "1.0.0"
  }
}

*Package A depends on package B.
 *Package B depends on package C.

In this case:

A is a direct dependency of your project.
B is a transitive dependency because it is required by A.
C is also a transitive dependency because it is required by B.

Visualization:
Your Project → A (direct dependency)
A → B (transitive dependency)
B → C (transitive dependency)

### it works on my local but in not production because of 
   the reason is in packae-lock.json => integrity": "sha512

### nodemodules 
nodemodules is collections of dependencies

### npm install 
if i have package.json,package_lock.json files in my folder i can recreate all my node modules the commmond is npm install
what are we recreate that are we not push into github

### npx install parcel inddex.html
### npx parcel index.html

### parcel build things(parcel doing things)
  -Dev Build 
  -local Server
  -HMR=Hot module Replacement
  -file watching algorith written in C++
  -caching-faster Builds
  -image optimization
  -minification
  -bundling
  -compress(remove all white spaces from file)
  -consistent hashing
  -codespliting
  -differential  -support older browsers
  -Diagnostic
  -Error Handling
  -HTTPs
  -Tree shaking -remove unused code
  -different dev and prod bundles





  ### npx parcel build index.html before running this delete 
      "main": "App.js", from package.json