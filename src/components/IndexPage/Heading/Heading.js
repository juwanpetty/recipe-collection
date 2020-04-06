import React from "react"
import {
  Wrapper,
  Title,
  Subtitle,
  FeaturedPost,
  PostImage,
  Meta,
  PostTitle,
  Description,
  Author,
} from "./Heading.module"
import { Link } from "gatsby"

export const Heading = () => (
  <Wrapper>
    <div>
      <Title>Airbnb Engineering & Data Science</Title>
      <Subtitle>
        Create engineers and data scientists building a world where you can
        belong anywhere.
      </Subtitle>
    </div>
    <FeaturedPost>
      <PostImage>Post Image</PostImage>
      <div>
        <Meta>
          <Link>News</Link> / 2 Hrs Ago
        </Meta>
        <PostTitle>
          <h2>Chicken Stew with Cheesy Onion Biscuits</h2>
        </PostTitle>
        <Description>
          Here's one of the most usueful generic pieces of advice I carry around
          in my head. How...
        </Description>
        <Author>
          By <Link>Juwan Petty</Link>
        </Author>
      </div>
    </FeaturedPost>
  </Wrapper>
)
