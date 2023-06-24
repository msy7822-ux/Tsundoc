import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const getSessionForServerComp = async (cookies: any) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};
