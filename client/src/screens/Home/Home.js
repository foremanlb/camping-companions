import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div id='home'>
      <h2 id='tagline'>Camping is more fun with Companions!</h2>
      <img src='https://github.com/foremanlb/camping-companions/blob/master/client/src/assets/images/Home.jpeg?raw=true' alt='Campers' id='main_photo'></img>
      <p id='welcome_message'>Welcome to Camping Companions.  We are dedicated to the world of campers and helping them to come together.  We have compiled a collection of different campsites across the country, in the hopes of bringing campers together.<br/><br/>
      You can view campsites based on state in the menu on the left.  Once you find a campsite that interests you, feel free to make a post sharing some details about when you would like to plan a trip, what you are hoping to do while camping, and an easy way for you to be contacted.  You can also save campsites to your favorites to make them easier to find in the future.<br /><br />
      If you get lost, you can click the campfire to find your way back to basecamp (home).  You can check your backpack to see your profile for your posts and campsites.  If you're logged in you can use the compass to leave camp and logout.<br/><br/>
      If you don't already have an account, please sign up to have full access to the site for making posts and saving campsites.</p>
    </div>
  )
}