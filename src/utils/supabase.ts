import { createClient } from "@supabase/supabase-js"


const url = "https://sajuntkcrrsvmgjjrrzd.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhanVudGtjcnJzdm1nampycnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNTM3OTQsImV4cCI6MjAyMjcyOTc5NH0.tHxDcJvjqnZZh60kpndAgXvANPXrCUDswqbIuQGJx1o"

export const supabase = createClient(url, key)