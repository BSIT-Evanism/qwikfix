/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { createClient } from "@supabase/supabase-js";
import { Auth, Typography, Button } from "@supabase/ui";

const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)

const Container = (props) => {

    const { user } = Auth.useUser()
  
    if (user)
  
      return (
  
        <>
  
          <Typography.Text>Signed in: {user.email}</Typography.Text>
  
          <Button block onClick={() => props.supabaseClient.auth.signOut()}>
  
            Sign out
  
          </Button>
  
        </>
  
      )
  
    return props.children
  
  }
  
  
function AuthBasic() {
  
    return (
  
      <Auth.UserContextProvider supabaseClient={supabase}>
  
        <Container supabaseClient={supabase}>
  
          <Auth supabaseClient={supabase} providers={['google', 'facebook', 'github']} />
  
        </Container>
  
      </Auth.UserContextProvider>
  
    )
  
  }

  export const SupaAuth = qwikify$(AuthBasic, {eagerness: "load"})