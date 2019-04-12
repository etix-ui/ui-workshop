import React from "react"
import Head from "../components/head"
import Nav from "../components/nav"
import QiCounter from "../components/QiCounter"

const About = () => (
  <div className="container">
    <Head
      title="About Us"
      ogImage="/static/photo.jpg"
      description="This is a description for social media."
    />
    <Nav />

    <div>
      <h1 className="title">About Us</h1>
      <p>Blah blah blah blah.</p>
      <img
        src="/static/photo.jpg"
        alt="reptile"
        className="img-responsive img-rounded"
      />
    </div>
  </div>
)

export default About
