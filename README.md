[![Build Status](https://travis-ci.com/tylerpporter/find_my_market_fe.svg?branch=master)](https://travis-ci.com/tylerpporter/find_my_market_fe)
![FMM_banner_logo_final](https://user-images.githubusercontent.com/56200182/88703202-a5fc4a00-d0c9-11ea-87ac-cbd2ae18bd42.png)

# Summary

Find My Market, is a mobile-first (IOS) geolocation app that was designed, planned, and implemented around finding farmers markets within a 50-mile radius from your location. By allowing a user to register a new account or sign in, the user can click on a marker on the map and view more information about that particular market. This information includes address, season information, and a link to the farmers' market website, not to mention the ability to favorite that specific market for future access. The user can also filter by-products, date, and favorite markets. Additionally, the user can search for a different location and view markets in that area, which makes this app like no other on the market! For the final touch, a user can access their profile information through the hamburger menu. This functionality allows the user to view their favorite markets within a list view, add a profile image, and update and change their current login information.

You can learn more about the back end [here](https://github.com/tylerpporter/find_my_market_api) and view the api repo [here](https://github.com/tylerpporter/us_farmers_market_api).

## Gif of working App

![find_my_market_landing](https://media.giphy.com/media/eIyeAomp3KtZ8HnR3l/giphy.gif)
![find_my_market_marker_website](https://media.giphy.com/media/UuexCaJ8X5xsWC0Sci/giphy.gif)
![find_my_market_search](https://media.giphy.com/media/SsZjuGCc2HUfmNwvo4/giphy.gif)
![find_my_market_filter](https://media.giphy.com/media/h74JAI3yDmKVgQpnJe/giphy.gif)
![find_my_market_clear_filter](https://media.giphy.com/media/Suy4nIUZgTAbOK3Pct/giphy.gif)
![find_my_market_close_filter](https://media.giphy.com/media/UX4SbIHfAiZrupWBoB/giphy.gif)

# Prerequisites

1. Install the [Expo](https://expo.io/) CLI: ```npm install -g expo-cli```
2. Install the Expo client app on your IOS device and connect to the same wireless network as your computer.

## Setup

1. Clone down this repo
2. CD into this directory
3. Install dependencies: ```npm install```
4. Start the Expo server: ```expo start```
5. In the browser window that pops up, click on ```run on IOS simulator```
   - Or download the Expo client app from the Apple store on your phone. If you are connected to the same network, you can open the Expo app and select the Project.
6. Find a market near you!

## Technologies Used
- React Native
- Expo
- React Native Maps
- Jest
- React Testing Library

## Future Iterations
- OAuth for user authentification (user can login and signout)
- User can favorite/unfavorite markets and view them
- User can filter markets by date
- Implement push notifications based on user favorites

## Contributors:

- [Quinn Elder - FE](https://github.com/QuinnrElder)
- [Michelle Kaplan - FE](https://github.com/MichelleKaplan7)
- [Colin Alexander - BE](https://github.com/coloniusrex)
- [Zach Holcomb - BE](https://github.com/zachholcomb)
- [Tyler Porter - BE](https://github.com/tylerpporter)

* Shoutout to Colin for making our logo!
* Shoutout to Tyler for the inception of this idea!

![DevelopmentTeam](assets/team_index.png)
