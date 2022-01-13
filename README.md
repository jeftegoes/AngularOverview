# What is Angular?

- Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications (SPAs)
- What exactly does it mean?
  - It's only one HTML file and a bunch of JavaScript code we got from the server and everything which you see.
  - Every change, is rendered in the browser.
  - It gives the user a very reactive user experience (UX).
  - JavaScript is much faster than having to reach out to a server for every page change and for every new piece of data you want to display. Therefore, this approach allows you to create web applications.
  - which look and feel almost like mobile applications; very fast!
  - Everything happens instantly.
  - If you do need some data from a server, you simply load it in the background so that the user never leaves this experience of having a reactive web application to use.

- So, how is this done?
  - JavaScript changes the DOM, changes whatever is displayed here (in the browser), by changing the HTML code during runtime.
  - That is why you never see the refresh icon on the  because we're only changing the currently-loaded page.

# What is TypeScript

# Structure of project folder 

- src
  - app
  - assets
  - environments
- node_modules
- package.json

# Commands

# Specific extensions

- Angular Language Service


## Npm commands
- Download all dependencies from package.json in current project
  - npm install
- Install angular cli latest version
  - npm install `-g @angular/cli` # -g global installation (All users)
- Install a specific package
  - npm install `<package_name@<version/tag>>`

## Angular Cli commands
- Create a new app
  - ng new `<name_project>`
- Start application
  - ng serve -o # -o Opens the url in default browser



# Tips

# Issues & Troubleshotting
```
Error: I have “ERROR in Internal Error: Unexpected interpolation” error when I run npm start in Angular 9
Solution: I have similar problem for angular-starter and I was able to remove this bug after:
	• upgrade node and npm to lastes versions (still error)
	• remove node_modules
	• npm cache clean --force
	• npm install (still error)
	• npm rebuild node-sass --force (still error)
	• and this is CRITICAL (surprisingly) : build app by npm run build:aot
After this steps webpack: npm start command start working properly and not hang.
```

```
export declare function forkJoin<A, B, C, D, E, F, G>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>, ObservableInput<F>, ObservableInput<G>]): Observable<[A, B, C, D, E, F, G]>;
```