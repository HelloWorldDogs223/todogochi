"use client";

import axios from "axios";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const myCode = new URL(document.location.toString()).searchParams.get(
      "code"
    );

    const res = axios.post(
      `https://todogochi.store/auth/sign-in/kakao?code=${myCode}`,
      {
        authCode: myCode,
      },
      { withCredentials: true }
    );
  }, []);

  return <div></div>;
}
