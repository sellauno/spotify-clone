import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Container>
      <div className="currentPlay">
        <div className="currSong">
          <div className="currImg">
            <img aria-hidden="false" draggable="false" loading="eager" src="https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69" data-testid="cover-art-image" alt="" class="mMx2LUixlnN_Fu45JpFB cover-art-image Yn2Ei5QZn19gria6LjZj">

            </img>
          </div>
          <div className="currTitle">
            <div className="songTitle">
              <span className="title">H.S.K.T. (feat. Wonstein)</span>
            </div>
            <div className="songSinger">
              <span className="singer">LeeHi</span>
            </div>
          </div>
          <div className="currLikeBtn"></div>
          <div className="currPipBtn"></div>
        </div>
      </div>
      <Player>
        <div className="playerBtn"></div>
        <button className="playBtn">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ytk21e-0 eqtHWV">
            <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
          </svg>
        </button>
      </Player>
      <div className="volume"></div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  .currentPlay {
    min-width: 180px;
    width: 30%;
  }

  .player {
    max-width: 722px;
    width: 40%;
  }

  .volume {
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .currSong {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
  }
  .currImg {
    isolation: isolate;
    position: relative;
  }
  .currTitle {
    column-gap: 8px;
    display: grid;
    grid-template:
        "title title"
        "badges subtitle"/auto 1fr;
    margin: 0 14px;
    align-items: center;
    .songTitle {
      color: #fff;
      grid-area: title;
      justify-self: start;
      width: 100%;
      .title {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        margin-block: 0px;
        font-size: 0.8125rem;
        font-weight: 400;
        font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
        color: inherit;
      }
    }
    .songSinger {
      grid-area: subtitle;
      grid-column-start: badges;
      min-width: 0;
      width: 100%;
      .singer {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        margin-block: 0px;
        font-size: 0.6875rem;
        font-weight: 400;
        font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
        color: white;
      }
    }
  }
`;

const Player = styled.div`
  max-width: 722px;
  width: 40%;
  display: flex;
  .playBtn {
    button-size: 32px;
    height: 30px;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 32px;
    color: #000;
    display: flex;
    position: relative;
    justify-content: center;
  }
`;
