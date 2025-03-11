"use client"

import { useState } from 'react'
import { PlusIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "../hooks/use-toast"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export default function AskMeAnything() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            content: question,
            email,
            name,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setQuestion('')
      setEmail('')
      setName('')
      setOpen(false)
      toast({
        title: "Your message has landed with warmth and joy.",
        duration: 3000,
      })
    } catch (error) {
      toast({
        title: "Failed to send message",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

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
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}