import React from "react"
import { Link } from "gatsby"
import {
  Wrapper,
  SidebarWrapper,
  Post,
  Meta,
  Title,
  Author,
  SidebarItem,
  SidebarHeader,
} from "./Sidebar.module"

export const Sidebar = () => (
  <Wrapper>
    <SidebarWrapper>
      <SidebarHeader>Stuff You Should Read</SidebarHeader>
      <SidebarItem>
        <span>1</span>
        <Post>
          <Meta>
            <Link>News</Link> / 2 Hrs Ago
          </Meta>
          <Title>
            <h3>Red Pepper Fettucine with Shrimp</h3>
          </Title>
          <Author>
            By <Link>Juwan Petty</Link>
          </Author>
        </Post>
      </SidebarItem>
      <SidebarItem>
        <span>2</span>
        <Post>
          <Meta>
            <Link>News</Link> / 2 Hrs Ago
          </Meta>
          <Title>
            <h3>Red Pepper Fettucine with Shrimp</h3>
          </Title>
          <Author>
            By <Link>Juwan Petty</Link>
          </Author>
        </Post>
      </SidebarItem>
      <SidebarItem>
        <span>3</span>
        <Post>
          <Meta>
            <Link>News</Link> / 2 Hrs Ago
          </Meta>
          <Title>
            <h3>Red Pepper Fettucine with Shrimp</h3>
          </Title>
          <Author>
            By <Link>Juwan Petty</Link>
          </Author>
        </Post>
      </SidebarItem>
    </SidebarWrapper>
  </Wrapper>
)
