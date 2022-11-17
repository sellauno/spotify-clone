import styled from "styled-components";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Body() {
  const Container = styled.div`
    background-color: black;
    
    .playlist {
      display: flex;
      height: 30vh;
      max-height: 500px;
      min-height: 340px;
      
      padding-bottom: 24px;
      margin: 0 2rem;
      
      align-items: center;
      gap: 2rem;
      
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      .image {
        img {
          align-self: flex-end;
          height: 192px;
          margin-inline-end: 24px;
          min-width: 192px;
          width: 192px;
        }
      }
      .details {        
        
        flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
        flex-flow: column;
        flex-wrap: initial;
        justify-content: flex-end;
        z-index: 0;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #e0dede;
        .title {
          margin : 0;
          color: white;
          font-size: 4rem;
        }
      }
    }
    .list {
      isolation: isolate;
      margin: 0;
      max-width: 1955px;
      padding: 0 16px;
      position: absolute;
      width: 100%;
      align-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow: visible!important;
      
        .header-row {
          display: grid;
          grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
          margin: 1rem 0 0 0;
          color: #dddcdc;
          position: sticky;
          top: 15vh;
          padding: 1rem 3rem;
          transition: 0.3s ease-in-out;
          background-color: #000000dc;
          align-items: center;

        }
        .tracks {
          margin: 0 2rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 5rem;
          .row {
            padding: 0.5rem 1rem;
            display: grid;
            grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
            &:hover {
              background-color: rgba(0, 0, 0, 0.7);
            }
            .col {
              display: flex;
              align-items: center;
              color: #dddcdc;
              img {
                height: 40px;
                width: 40px;
              }
            }
            .detail {
              display: flex;
              gap: 1rem;
              .info {
                display: flex;
                flex-direction: column;
              }
            }
          }
        }
    }
  `;

  const FirstContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      display: block;
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    .body__contents {
      flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
      min-height: 0;
      position: relative;
    }
  }
`;

  const List = styled.div`
  
  margin: 0;
  max-width: 1955px;
  padding: 0 16px;
  position: absolute;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow: visible!important;  
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: #000000dc;
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  
`;

  return (
    <FirstContainer>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          {/* <Navbar navBackground={navBackground} /> */}
          <div className="body__contents">
            <section>
              <Container>
                <div className="playlist">
                  <div className="image">
                    {/* <img src={selectedPlaylist.image} alt="selected playlist" /> */}
                    <img aria-hidden="false" src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb8ae7f2aaa9817a704a87ea36/3/en/large" alt="Daily Mix 3" class="mMx2LUixlnN_Fu45JpFB CmkY1Ag0tJDfnFXbGgju _EShSNaBK1wUIaZQFJJQ Yn2Ei5QZn19gria6LjZj" sizes="(min-width: 1280px) 232px, 192px"></img>
                  </div>
                  <div className="details">
                    <span className="type">PLAYLIST</span>
                    <h1 className="title">Playlist Name</h1>
                    <p className="description">Playlist Description</p>
                  </div>
                </div>
                <div className="list">
                  <div className="header-row">
                    <div className="col">
                      <span>#</span>
                    </div>
                    <div className="col">
                      <span>TITLE</span>
                    </div>
                    <div className="col">
                      <span>ALBUM</span>
                    </div>
                    <div className="col">
                      <span>
                        AiFillClockCircle must be here
                        {/* <AiFillClockCircle /> */}
                      </span>
                    </div>
                  </div>
                  <div className="tracks">
                    {/* {selectedPlaylist.tracks.map(
                            (
                                {
                                    id,
                                    name,
                                    artists,
                                    image,
                                    duration,
                                    album,
                                    context_uri,
                                    track_number,
                                },
                                index
                            ) => {
                                return ( */}
                    <div
                      className="row"
                    // key={id}
                    // onClick={() =>
                    //     playTrack(
                    //         id,
                    //         name,
                    //         artists,
                    //         image,
                    //         context_uri,
                    //         track_number
                    //     )
                    // }
                    >
                      <div className="col">
                        <span>1</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          {/* <img src={image} alt="track" /> */}
                          Image must be here
                        </div>
                        <div className="info">
                          <span className="name">Name</span>
                          <span>Artists</span>
                        </div>
                      </div>
                      <div className="col">
                        <span>Album</span>
                      </div>
                      <div className="col">
                        <span>1:20</span>
                      </div>
                    </div>
                    {/* );
                            }
                        )} */}
                  </div>
                </div>
              </Container>
            </section>
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </FirstContainer>
  );

}
