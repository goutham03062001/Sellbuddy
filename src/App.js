
import {useState, useEffect} from 'react';
import { StreamChat } from 'stream-chat';

import{
  Chat, Channel, Window, ChannelHeader, MessageInput, MessageList, ChannelList, useScrollLocationLogic,
} from "stream-chat-react"

import "stream-chat-react/dist/css/index.css"
import styled from "styled-components";


const API_KEY=process.env.REACT_APP_API_KEY;

const Container = styled.div`
  display: flex;
  .left-column: {
    width: 300px,
  }
  
`
const USER1 = {
  id: 'user1',
  name: "Amit Tripathi",
  image: "https://randomuser.me/api/portraits/men/81.jpg"
}

const USER2 = {
  id: 'user2',
  name: "Joe Biden",
  image: "https://randomuser.me/api/portraits/men/58.jpg"
}

const USER3 = {
  id: 'user3',
  name: "Vladmir Putin",
  image: "https://randomuser.me/api/portraits/men/37.jpg"
}

const users = [USER1, USER2, USER3];

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() + users.length);
  return users[randomIndex];
}


function App() {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(()=>{
    async function initChat(){
      const client = StreamChat.getInstance(API_KEY);
      const user = getRandomUser();
      
      client.connectUser(user, client.devToken(user.id));

      const channel = client.channel("team", "general", {
        name: "General",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
      })

      await channel.create();
      channel.addMembers([user.id]);
      setChannel(channel);

      setChatClient(chatClient);
    }
    initChat();

    return() =>{
      if(chatClient) chatClient.disconnectUser();        
    }
  }, []);


  if(!chatClient || !channel) return <></>

  return (
    <div>
      <Chat client={chatClient} theme={"messaging light"}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  )
}

export default App;
