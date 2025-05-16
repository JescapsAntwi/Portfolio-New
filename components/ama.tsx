"use client";

import { useState } from "react";
import { PlusIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function AskMeAnything() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_9ap80sf",
        "template_y6i5e0q",
        {
          from_name: name || "Anonymous",
          reply_to: email || "no-reply@example.com",
          message: question,
          to_name: "Jescaps Antwi",
        },
        "e5sjXqOcJAv-rIPfM"
      );

      setQuestion("");
      setEmail("");
      setName("");
      setOpen(false);
      toast({
        title: "Your message has landed with warmth and joy.",
        description: "I'll get back to you soon!",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-[5.5rem] md:bottom-6 right-4 h-14 w-14 rounded-full p-0"
          variant="default"
        >
          <PlusIcon className="h-6 w-6" />
          <span className="sr-only">Send me message</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send me a message</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <Textarea
            placeholder="Hi, how you doing?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[100px]"
            required
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
