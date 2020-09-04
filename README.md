# _GrantUs Funding_

#### August 27th, 2020

## Description

_This is GrantUs Fundings website where user's will be able to find grant proposals & track their progress towards completeing proposals & achieveing funding._

## Setup

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Click the green 'Clone or Download' button and copy the link / download the zip
2. Open terminal and type... or skip to #4 if you downloaded the zip

**Windows**

```sh
cd desktop
```

Mac & linux

```sh
cd ~/Desktop
```

3.  in terminal type '_git clone {link to repository}_ '

```sh
git clone {link to repository}
```

4. If you downloaded the zip then extract all onto your desktop
5. Open the folder with VSC or an equivalent

## This project was bootstrapped with:
[Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Specs

### Behavior Driven Development Spec List

#### GrantUs Funding

# GrantUs Funding Readme for future/current developers and maintainers.

### Basic Technology Stack & Organization

GrantUs is currently developed in React and served through a Python routing application utilizing Flask.  

The primary tech-interface complexities and oddities are:   
Flask ordinarily "switches" off of a route (IE: "/plans/smb/etc.html") and returns a template .html file.  
This template can in turn utilize other templates, and assemble a webpage as if it were "legos":  
IE, you may have "Navbar.html" and then at the top of index.html declare a "import Navbar.html" line   
to grab that segment of html. Jinja is the Python/Flask : Web interface that usually resolves this.  

HOWEVER

A key weakness of this hosting schema is that every route or page change forces a full-reload,  
which is notoriously slow and "unprofessional".

React co-opts much of this behavior by comparmentalizing all of the primary pages into one place,  
and hosts them as "a single page application" with virtual/in-React Routing utilizing a React Router.

Therefore, the primary interaction is that 99% of the time, Flask is only ever going to serve up one file:  
**index.html**  
which contains the React App.

Other Flask routes are reserved for back-end database management, but ultimately, all "views" are handled by React, and any html editing or styling should be done through React, independent of Flask.

# Important notes on Routing

**All dispatched requests that hit the server go through Flask**
This is of paramount importance: if a GET www.grantusfunding.com/team request lands on Flask, Flask will pattern-match that to a "/team" route, and 404, despite React's internal "Virtual Routing".  

**For this reason** Flask instead listens to a "/[variable]" route, which dissects all incoming requests into  
two halves:
The "GET" request on "/", and an argument, which is the entire remaining route. 

**Example**: www.grantusfunding.com/contact hits Flask. Flask parses this into a "/" request, with the argument "contact".  
This returns the "/" route, alongside the flask template "index.html" where React is waiting.  
It also passes the argument "contact" into React as a data token (string, see /public/index.html).  
This data token is passed to index.jsx, which uses it to set React's "Virtual Route", and renders the page accordingly.  

In short, Flask is the Post Office where a bunch of PO Boxes sit: Flask doesn't have a "/team" or "/contact" route,  
it only needs to recognize this as a request for React, and let React know that it is the "/team" or "/contact" 
specific components being requested.  

# Key Differences between \<a> and \<Link> tags

\<a>nchor tags, when clicked, submit a GET request to the attached href.  
**Because this is a get request, it will re-query the Server and redirect through Flask**.  
This forces a page reload (slowdown, wasted bandwidth) and possible conflicts in keeping routes "Sanitized".  
**An anchor tag and/or href should never be used inside of React unless Flask is required to provide some new data to React**.

\<Link to=""> and \<Route path=""> tags are "Virtual" routes used by React that do not submit GET/POST requests.  
A simpler way to think of them would be to imagine the URL bar as a global variable that is updated by \<Link>  
tags and detected by \<Route> tags, outside of the purview of Flask.

**This creates subtle implications for routing/bookmarking between Flask and React**:
Imagine a user bookmarks www.grantusfunding.com/plansandpricing. This URL does not exist in Flask and is, in actuality, the following two elements:  
the "Absolute" or "True" path of "/" (Where React is located), and the **virtual** path of /plansandpricing.  

Please bear this structure in mind when adding or removing views on routes: if it is a display route rendered through React,  
the link to it should be declared as \<Link to="Whatever">, and the route for it should be added in App.jsx as a \<Route>.  

### Passing data between Flask and React

#### Flask --> React

**Example:  If you work better with living examples, please examine the "/\<react\>" route in main.py for examples.**  

The preferred method of transmitting data from flask to react is in the form of a jsonified object, or in some limited cases  
as a string.  

When Flask declares a "return flask.render_template()" method, there are optional arguments which may be declared and passed   
along. This behavior is nearly identical to how a prop is passed in React, or an argument in a function:

**return flask.render_template("index.html", myData = SomeDeclaredData)**  

Then, within React's /public/index.html file, where React is anchored, a local script importing the data variable can be declared.  

<!-- <script>window.myData = "{{myData}}"</script> -->

This data can then be passed through components as props. Currently, data is "drilled" through index.jsx to app.jsx  
and then in to whatever sub-component requires it, but redux may be implemented for this at a later time.  

#### React --> Flask

**Example: Please inspect /src/components/Registration/registrationform.jsx line 72,**   
**and main.py "/submit_registration" route for where this is implemented**  

React may communicate data to Flask in a number of ways, such as through form submits or post requests.  
<!-- One example may be (in react): <Form action="/submit_registration" method="POST">{FORM}</Form> -->   
However, this method is not preferred as it does not allow for insertion of custom/local functionality,  
such as the implementation of "await response --> reroute on success/fail" or encryption, among others.  

The other (preferred) option is through custom POST requests to a declared/reserved route in Flask. In   
many ways this is similar to an API end-point configuration. 

**PLEASE NOTE** that it is extremely important/useful to jsonify the data on its way out of either  
application, and parse/de-jsonify it on the other end for utilization.   

### React Design Idealogy and File/Folder Structure

The primary idealogy behind the current file/folder structure is "Separation Of Concern",  
**OR**
"Lego-ization" of Html and style into easy-to-locate, compartmentalized, components.

The largest benefit to this is that, should any particular piece of code or styling need fixing or updating,  
that it is 
1. Easy to locate,
2. Easy to determine where its styles/attributes are assigned,
3. That changing said style or attribute has low probability of side effects, as the given style  
or class or css rule is not imported/utilized in other places. 

In short, rather than separating CSS into convoluted names such as "Home-Navbar-First-Box"  
or
"Contacts-Navbar-Second-Box" 

in order to maintain separation-of-styling, we instead declare the page-specific stylings as constants   
INSIDE the file in which they are utilized, so that the interactions are clear, simple, and easy-to-manipulate.

**Please note**:  Some folders DO utilize limited CSS files and classNames, as there are multiple components which are  
nearly identical in their layout but just-slightly-different enough in their contents to warrants separate components.  
Please consider the combination of fragments/components under the "Plans and Pricing" subdirectory as an example:  
Each is a different table and the components of those tables must be maintained separately (different business models)  
but the stylings of those tables is identical. 

**However**, as above, do note that all styles in this CSS folder are unique to the files they are adjacent to, and only   
imported into those folders.

### File/Folder Tree

The file/folder layout follows a "Tree" configuration representative of the website itself:   

1. Primary elements (Navbar, Footer, Banner, and pages pointed to by the navbar) are located in root/src.  
2. Sub-components of those pages are listed in subdirectories: 
3. <ul>
    <li>Index sub-components are located in /Fragments</li>
    <li>"Free Trial" tables (subcomponents) are located in /FreeTrials</li>
    <li>"Plans and Pricing" tables (subcomponents) are located in /PlansAndPricing</li
    <li>The entirety of the Registration and Login pages reside within /Registration</li>
    <li>The entirety of the FAQ page and its entries resides within /faq</li>
    <li>All Post-Login pages (Dashboard, etc) are located with /Dashboard</li>

**Please note** The vast majority of components are imported into App.jsx, and assembled using a React-Router-Switch  
statement in a lego-esque pattern.  **HOWEVER**, there are exceptions! A few "root" files use local-state hooks  
and import their subcomponents directly, rather than being assembled in App.JSX. 

This is partially because of yet-to-be-reconciled CSS/className conflicts between folders, and   
partially because of conflicts in rendering. As an example, try importing the Dashboard-side-navbar to app.jsx  
and add it to the /Dashboard route, in contrast with importing the side bar to DashboardMain. In short, there  
is minutae about rendering that requires it to be done locally (in-component) vs globally (in app.jsx).  

### File tree

|                          Behavior                          | Input  | Output  |
| :--------------------------------------------------------: | :----: | :-----: |
| Website landing page  | 'https://grantusfunding.com/' | 'Displays selected react.fragment' 'src/componenets/Index.jsx'  |
| Website Logo is Home  | 'https://grantusfunding.com/' '/' | 'Displays selected react.fragment' |
| Website NavBar Routes | 'https://grantusfunding.com' '/team' '/pricingplans' '/contact' '/freetrial' '/login' | 'Displays selected react.fragment' |
| Website Login Route   | 'https://grantusfunding.com' '/login' '/register' | 'Displays selected react.fragment' |
| Website Funding Path  | 'https://grantusfunding.com' '/edu' '/smb' '/gov' | 'Displays selected react.fragment' |
| Website Footer Routes | 'https://grantusfunding.com' '/faq' '/nlp' '/terms' '/privacypolicy' 'Social Media Links FB/TW/Insta/LinkedIn/YT' | 'Displays selected react.fragment' |
| Website DashSideNavBar Routes | 'https://grantusfunding.com' '/Dashboard' '/teammanagement' | 'Displays selected react.fragment' |

---





### Development/Build/Hosting Configurations

##### Development Notes

React can be "Severed" from Flask and hosted via Node to allow hot-reloading of the front end for  
faster and more-responsive development.

**There are two configuration files that need to be edited in React:**

config/paths.js  
config/webpack.config.js  

**Flask-hosted Mode:** 
In webpack.config.js, line 518 ("filename: "../../templates/index.html") needs to be commented-IN so that  
React will build to the correct (Flask) folder.  
In config/paths.js, line 52 ("Module.exports = {}"):  
Should have the attribute: appBuild: resolveApp('../GrantUsFlask+React/static/react')

Once configured, build the React front-end from the React route directory using "npm run-script build".  
Then navigate to the Flask route directory and run "python main.py".  
Open your browser to localhost:5000.  

**React-Independent Mode:** 
In webpack.config.js, line 518 ("filename: "../../templates/index.html") needs to be commented-OUT so that  
React will build to the correct (Local Build) folder.  
In config/paths.js, line 52 ("Module.exports = {}"):  
Should have the attribute: appBuild: resolveApp('build')

Once configured, initiate React through webpack by navigating to the React root directory and running  
the command:  
npm start  
Then open your browser to localhost:3000.    


---

## Known Bugs

_N/A_ - 9/3/2020

---

## Support

_Email:_ Watkins92@gmail.com OR CHuber42.work@gmail.com


---

## Built With

- [React.js](https://reactjs.org/)

## Useful tools

- [free icons @ icons8](https://icons8.com/)
- [free icons @ fontawesome](https://fontawesome.com/)

---

- [Old School Gifs Search](https://gifcities.org/)
- [free images @ unsplash](https://unsplash.com/)

  - **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url
    followed by a '?' and a keyword. Example below**

  - _https://source.unsplash.com/400x400/?cat_
  - http://unsplash.it/500/500 - This will just return a random image the size of 500x500

---

- [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
- [CSS Grid Cheat Sheet](http://grid.malven.co/)

---

- [CSS Gradient BG Generator](https://mycolor.space/gradient)
- [CSS Basic Gradient Generator](https://cssgradient.io/)

---

- [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

To learn React, check out the [React documentation](https://reactjs.org/)

---

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

---

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

---

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

---

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

---

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

---

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

### License

This project is licensed under the MIT License

Copyright (c) 2020 **_Nathan Watkins-Hoagland & Christopher Huber_**

---