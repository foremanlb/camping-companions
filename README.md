# Camping Companions

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Camping Companions** is an application designed to bring people with a love for camping together. Not everyone has friends with the same interests, such as camping. We are here to help bring those people together to allow them to share their love of nature with like minded individuals._

<br>

## MVP

_The **Camping Companions** MVP is to allow people to search for campsites with in their chosen state. Once a campsite is chosen, the user will be able to make posts for others to see with desired dates, activities and contact information to connect with other people._

<br>

### Goals

- _Robust back end with concise controllers._
- _Clean front end allowing for ease of navigation._
- _Up to date stylized web page._
- _Clear and concise code._

<br>

### Libraries and Dependencies

|     Library      | Description                                 |
| :--------------: | :------------------------------------------ |
|      React       | _Dom manipulation and front end rendering._ |
| React Router Dom | _Routing between screens._                  |
|      Axios       | _Communication with DB._                    |
|      Devise      | _User controllers and generation._          |
|       JWT        | _Verification._                             |
|       Cors       | _Cross Origin Resource Sharing._            |

<br>

### Client (Front End)

#### Wireframes

![Desktop Home](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-Home.png?raw=true)

- Desktop Home

![Desktop Campsites](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-Campsites.png?raw=true)

- Desktop Campsites

![Desktop Campsite Details](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-Campsite%20Details.png?raw=true)

- Desktop Campsite Details

![Desktop Post](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-Post.png?raw=true)

- Desktop Post

![Desktop User Profile](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-User%20Profile.png?raw=true?)

- Desktop User Profile

![Desktop Sign Up](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wire-SignUp.png?raw=true)

- Desktop Sign Up

![Tablet Home](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-home.png?raw=true)

- Tablet Home

![Tablet Campsites](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-campsites.png?raw=true)

- Tablet Campsites

![Tablet Campsite Details](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-campsite%20details.png?raw=true)

- Tablet Campsite Details

![Tablet Post](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-post.png?raw=true)

- Tablet Post

![Tablet User Profile](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-user%20profile.png?raw=true?)

- Tablet User Profile

![Tablet Sign Up](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiretablet-Signup.png?raw=true)

- Tablet Sign Up

![Mobile Home](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-Home.png?raw=true)

- Mobile Home

![Mobile Campsites](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-campsites.png?raw=true)

- Mobile Campsites

![Mobile Campsite Details](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-campsite%20details.png?raw=true)

- Mobile Campsite Details

![Mobile Post](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-post.png?raw=true)

- Mobile Post

![Mobile User Profile](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-profile.png?raw=true?)

- Mobile User Profile

![Mobile Sign Up](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4wiremobile-signup.png?raw=true)

- Mobile Sign Up

#### Component Tree

![Component Hierarchy](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4Hierarchy.png?raw=true)

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Navbar.jsx
      |__ CampsiteContainer.jsx
      |__ CampsiteCard.jsx
|__ services/
      |__ auth.js
      |__ post.js
|__ screens/
      |__ Profile.js
      |__ State.js
      |__ SignUp.js
      |__ CampsiteDetails.js
```

#### Time Estimates

| Task               | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------ | :------: | :------------: | :-----------: | :---------: |
| Fonts              |    L     |     30 min     |               |             |
| Images             |    L     |      1 hr      |               |             |
| Navbar             |    M     |    2.5 hrs     |               |             |
| Campsite Container |    M     |      2 hr      |               |             |
| Campsite Card      |    M     |      2 hr      |               |             |
| Auth Services      |    H     |     4 hrs      |               |             |
| Post Services      |    H     |      2 hr      |               |             |
| Profile            |    M     |     3 hrs      |               |             |
| State              |    M     |      2 hr      |               |             |
| SignUp             |    H     |     3 hrs      |               |             |
| Campsite Details   |    M     |      2 hr      |               |             |
| CSS                |    H     |     9 hrs      |               |             |
| TOTAL              |  36 hrs  |                |               |             |

<br>

### Server (Back End)

#### ERD Model

![ERD Sample](https://github.com/foremanlb/camping-companions/blob/master/assets/Project4ERD.png?raw=true)
<br>

---

## Post-MVP

- Addition of comments on posts.
- Addition of notifications for posts.
- Admin users to enforce crud for campsites.

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
