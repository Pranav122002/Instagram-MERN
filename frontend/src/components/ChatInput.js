import React, { useState } from "react";

import styled from "styled-components";


export default function ChatInput({ handleSendMsg }) {


  const [msg, setMsg] = useState("");






  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  

  return (
    <Container>
      <div className="button-container">
       
        <span>
          <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
        </span>
      </div>







      <form className="input-container" onSubmit={(event) => sendChat(event)}>



        <input
          type="text"
          placeholder="Message..."
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />




        <button id="send" type="submit">
          {/* <IoMdSend /> */}
          Send
        </button>



      </form>







    </Container>
  );
}

const Container = styled.div`
  display: grid;
margin-left: 10px;
margin-right: 10px;
  border: 1px solid rgb(219, 219, 219);
border-radius: 25px;
margin-bottom: 10px;
  align-items: center;
  grid-template-columns: 10% 90%;
  // background-color: #080420;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    // gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    width: 10%;
    // gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: black;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }

  
  .input-container {


    display: grid;
    grid-template-columns: 50% 50%;
    width: 90%;
    // border-radius: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    // gap: 2rem;

    background-color: #ffffff34;
    background-color: white;
    input {
      width: 60%;
      height: 60%;
      background-color: white;
      color: black;
      border: none;
      padding-left: 1rem;
      font-size: small;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      
      border: none;

      color: rgb(0, 149, 246);
// width: 20px;
position: absolute;
right: 15px;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
