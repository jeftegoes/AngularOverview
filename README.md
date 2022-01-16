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

# Components

## Component templates
## Component styles

# Databinding

- What is data binding?
  - Data binding = communication. 
  - Communication between your TypeScript code of your component, your business logic and the template, so what the user sees because you might have some result in your TypeScript code because you fetched something from a server or finished some calculation which you want to display to the user and the only thing the user sees is the template.

- We get different ways of communication now, for example we want to output data from our TypeScript code
in the HTML code in the template.
  - String interpolation `{{ data }}`
  - Property binding `[property]="data"`

- So if we click a button, we maybe want to trigger something in our TypeScript code, so now we need the other direction and we can get this other direction, we can react to user events with event binding. So we can bind to for example a click event to execute
  - `(event)="expression"`

- We also have one additional form of data binding where we combine both directions, two-way-binding, where we are able to react events and output something at the same time.

## String interpolation
- Example 1:
  - Html: `{{ serverStatus }}`
  - Ts: `serverStatus: string = 'offline';`

- Example 2:
  - Html: `{{ getServerStatus() }}`
  - Ts:
    ```
      serverStatus: string = 'offline';

      getServerStatus() {
        return this.serverStatus;
      }
    ```

## Property binding
- Square brackets indicate to Angular that we're using property binding, that we want to dynamically bind some property and disable the HTML attribute, in the end, in normal HTML, only sets a specific property on the underlying DOM element.

- Example: 
  - Html: `<button class="btn btn-primary" [disabled]="!allowNewServer">Add server</button>`
  - Ts: `allowNewServer: boolean = false;`

## Event binding
- For events parentheses are the signal that we're using event binding and here, we have to specify the name of the event between the parentheses, for example click and you can basically bind to all the events made available by the HTML attribute.

- Example: 
  - Html: `<button class="btn btn-primary" (click)="onCreateServer()">Add server</button>`
  - Ts: 
  ```
    onCreateServer() {
      this.serverCreationStatus = 'Server was created';
    }
  ```

### Bindable properties and events
- How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

- Important: For events, you don't bind to onclick but only to click (=> (click)).

- The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

### Passing and using data with event binding

- `$event` is super important is kind of a reserved variable name, you can use in the template when using event binding. `$event` will simply be the data emitted with that event.

- Example:
  - Html: `<input type="text" class="form-control" (input)="onUpdateServerName($event)" />`
  - Ts: 
  ```
    serverName: string = '';

    onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  ```

## Two-Way-Binding

- Important: FormsModule is Required for Two-Way-Binding!
- Important: For Two-Way-Binding to work, we need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.
  - You then also need to add the import from @angular/forms  in the app.module.ts file:
  - import { FormsModule } from '@angular/forms';

- Example:
  - Html:
    ```
      <input type="text" class="form-control" [(ngModel)]="serverName" />
      <p>{{ serverName }}</p>
    ```
  - Ts: 
  ```
    serverName: string = '';
  ```

# Directives

# Modules

# Commands

```
  In app.modules.ts:

  import { MyCustomComponent } from './server/my-custom.component';

  declarations: [
    AppComponent,
    MyCustomComponent
  ],
```

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
- Create a new component
  - ng generate component `<name_component>`
  - ng g c `<name_component>`



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