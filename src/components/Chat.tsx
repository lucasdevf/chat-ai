'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react';
import { Settings } from 'lucide-react';
import { BeatLoader } from "react-spinners";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <Card className="w-[440px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Chat AI</CardTitle>

          <CardDescription>Using Vercel SDK to create a chatbot.</CardDescription>
        </div>

        <button>
          <Settings size={20} />
        </button>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[640px] pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">

                {message.role === 'user' && 
                  <Avatar>
                    <AvatarFallback>LF</AvatarFallback>
                    <AvatarImage src="https://github.com/lucasdevf.png" />
                  </Avatar>
                }

                {message.role === 'assistant' && 
                  <Avatar>
                    <AvatarFallback>LS</AvatarFallback>
                    <AvatarImage src="https://freelogopng.com/images/all_img/1681038800chatgpt-logo-black.png" />
                  </Avatar>
                }
      
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'Usuário': 'IA'}
                  </span>
      
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form  className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <BeatLoader size={4} color="white" /> : 'Send'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}