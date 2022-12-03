import "./styles.css";
//import Login from "./files/Login";
import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import {
  ConversationList,
  Conversation,
  MessageInput,
  MainContainer,
  Sidebar,
  Avatar,
  Message,
  MessageList,
  ChatContainer,
  ConversationHeader
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

function renderChatList(chatAppState) {
  console.log("chatAppState test:", chatAppState);
  return "chat list";
}
function renderNewMessageForm(credentials, chatId) {
  return <MessageInput />;
}

export default function App() {
  const [conversations, setConversations] = useState([
    {
      name: "Dan",
      lastSenderName: "Dan",
      info: "Yes i can do it for you",
      status: "available"
    }
  ]);
  const conversationViews = conversations.map((conversation) => {
    return (
      <Conversation
        name={conversation.name}
        lastSenderName={conversation.lastSenderName}
        info={conversation.info}
      >
        <Avatar name={conversation.name} status={conversation.status} />
      </Conversation>
    );
  });
  return (
    <>
      <ChatEngine
        hideUI
        projectID="30413a6f-5cf7-4635-ab12-748617ce371c"
        userName="Shoury"
        userSecret="baatcheet"
        // Event Hooks Here
        onConnect={(creds) => console.log(creds)}
        onFailAuth={(props) => console.log(props)}
        onNewChat={(chat) => {
          setConversations(currentConversations => {
            const newConversations = [...currentConversations, chat]
            return newConversations
          })
        }}
        onEditChat={(chat) => {
          setConversations(currentConversations => {
            const newConversations = currentConversations.map(conversation => {
              const isUpdated = conversation.name === chat.name
              if (isUpdated) {
                return chat
              }
              return conversation
            })
            return newConversations
          })
        }}
        onDeleteChat={(chat) => {
          setConversations(currentConversations => {
            const newConversations = currentConversations.filter(conversation => {
              const isDeleted = conversation.name === chat.name
              return !isDeleted
            })
            return newConversations
          })
        }}
        onNewMessage={(chatId, message) => console.log(chatId, message)}
        onEditMessage={(chatId, message) => console.log(chatId, message)}
        onDeleteMessage={(chatId, message) => console.log(chatId, message)}
      />
      <MainContainer responsive>
        
        <Sidebar position="left" scrollable={false}>
          <ConversationList>{conversationViews}</ConversationList>
        </Sidebar>
        <ChatContainer> 
        <ConversationHeader>
            <ConversationHeader.Back />
            
            <ConversationHeader.Content userName="Dan" info="Active 10 mins ago" />
        </ConversationHeader>
        <MessageList>
        <Message model={{
                 message: "Hello my friend",
                 sentTime: "just now",
                 sender: "Joe"
                 }} />
        </MessageList>
        <MessageInput  />
        </ChatContainer>
      </MainContainer>
    </>
  );
}

// import { MultiChatSocket, useMultiChatLogic } from "react-chat-engine-advanced";

// // const projectID = "30413a6f-5cf7-4635-ab12-748617ce371c"
// // const username = "Shoury"
// // const secret = "baatcheet"
//        const projectID="30413a6f-5cf7-4635-ab12-748617ce371c"
//        const userName="Shoury"
//        const userSecret="baatcheet"

// function App(){
//   const chatProps = useMultiChatLogic(projectID, userName, userSecret)
//   console.log("done")
//   return (
//     <MultiChatSocket 
//         projectId={chatProps.projectId}
//         username={chatProps.username}
//         secret={chatProps.secret}
//         onConnect={chatProps.onConnect}
//         onAuthFail={chatProps.onAuthFail}       
//         onNewChat={chatProps.onNewChat}
//         onEditChat={chatProps.onEditChat}
//         onDeleteChat={chatProps.onDeleteChat}
//         onNewMessage={chatProps.onNewMessage}
//         onEditMessage={chatProps.onEditMessage}
//         onDeleteMessage={chatProps.onDeleteMessage}
//         onIsTyping={chatProps.onIsTyping}
//     />
//   )

// }

// export default App;