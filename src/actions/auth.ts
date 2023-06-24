"use server";

export const signout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/signout`, {
    method: "POST",
  });

  console.log("res", res);
  return res;
};
