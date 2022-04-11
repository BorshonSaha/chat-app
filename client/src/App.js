import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './Components';

const apiKey = 'spbtbxk94v7c';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

function App() {

  if (!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </div>
  );
}

export default App;
