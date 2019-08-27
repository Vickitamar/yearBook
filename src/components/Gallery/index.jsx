import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Books from "../Books";
import Header from "../Header";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
  grid-auto-rows: 305px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
      grid-gap: 5px;
    `}
  @media (max-width: 990px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 5px);
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) => selected && "color: black;"}
`;

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
  :hover {
    opacity: 0.7;
  }
  ${({ cascade }) =>
    cascade &&
    css`
      background-size: cover;
      &:nth-of-type(2n) {
        grid-row-start: span 2;
      }
    `}
`;

export function Gallery({ match, location }) {
  const cascade = location.search === "?type=cascade";
  return (
    <div>
      <Header />
      <LinkGrid>
        <TabLink
          selected={!cascade}
          to={{ pathname: `${match.url}`, search: "?type=square" }}
        >
          square
        </TabLink>
        <TabLink
          selected={cascade}
          to={{ pathname: `${match.url}`, search: "?type=cascade" }}
        >
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid cascade={cascade}>
        {Books.map(i => (
          <ImageLink
            cascade={cascade}
            key={i.id}
            index={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // this is the trick!
              state: { modal: true }
            }}
          />
        ))}
      </PhotoGrid>
    </div>
  );
}
