import { useChat } from "../../Context"
import { useEffect } from "react"
import { getChats, ChatEngine } from "react-chat-engine"

export const Chat = () => {
   const{myChats, setMyChats, chatConfig,selectedChat} = useChat()
   
}