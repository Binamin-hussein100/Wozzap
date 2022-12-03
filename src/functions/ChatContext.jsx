// import { fb } from 'service';
// import { createContext, useContext, useEffect, useState } from 'react';
// import { newChat, leaveChat, deleteChat, getMessages } from 'react-chat-engine';

// export const ChatContext = createContext();

// export const ChatProvider = ({ children, authUser }) => {
//   const [myChats, setMyChats] = useState();
//   const [chatConfig, setChatConfig] = useState();
//   const [selectedChat, setSelectedChat] = useState();
//   const adminList = ["serikczarnecki@landmark.edu", "GeraldBelton@landmark.edu", "GabriellaOrtega@landmark.edu"];
//   const teacherList = ["johnrusso@landmark.edu", "kevinkeith@landmark.edu","karinaassiter@landmark.edu"];
//   const createChatClick = () => {
//     const isAdmin = adminList.includes(chatConfig.userName);
//     const isTeacher = teacherList.includes(chatConfig.userName);
//     if (
//       (isAdmin || isTeacher)){ 
//     newChat(chatConfig, { title: '' });
//       }
//   };
//   const deleteChatClick = chat => {
//     const isAdmin = chat.admin === chatConfig.userName;
//     const isTeacher = chat.teacher === chatConfig.userName;
//     if (
//       (isAdmin || isTeacher) &&
//       window.confirm('Are you sure you want to delete this chat?')
//     ) {
//       deleteChat(chatConfig, chat.id);
//     } else if (window.confirm('Are you sure you want to leave this chat?')) {
//       leaveChat(chatConfig, chat.id, chatConfig.userName);
//     }
//   };
//   const selectChatClick = chat => {
//     getMessages(chatConfig, chat.id, messages => {
//       setSelectedChat({
//         ...chat,
//         messages,
//       });
//     });
//   };

//   // Set the chat config once the
//   // authUser has initialized.
//   useEffect(() => {
//     if (authUser) {
//       console.log("this is the auth user " + authUser.uid);
//       fb.auth.onAuthStateChanged(user => {
//           setChatConfig({
//             userSecret: "111",
//            // avatar: snap.data().avatar,
//             userName: user.email,
//             projectID: '40296037-f0b7-449f-8a04-b9cfdedab617',
//           });
//           console.log("User's Username is: " + user.email);
//         });
        
//     }
//   }, [authUser, setChatConfig]);

//   return (
//     <ChatContext.Provider
//       value={{
//         myChats,
//         setMyChats,
//         chatConfig,
//         selectedChat,
//         setChatConfig,
//         setSelectedChat,
//         selectChatClick,
//         deleteChatClick,
//         createChatClick,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => {
//   const {
//     myChats,
//     setMyChats,
//     chatConfig,
//     selectedChat,
//     setChatConfig,
//     setSelectedChat,
//     selectChatClick,
//     deleteChatClick,
//     createChatClick,
//   } = useContext(ChatContext);

//   return {
//     myChats,
//     setMyChats,
//     chatConfig,
//     selectedChat,
//     setChatConfig,
//     setSelectedChat,
//     selectChatClick,
//     deleteChatClick,
//     createChatClick,
//   };
// };
