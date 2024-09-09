"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  useEffect(() => {
    const myCode = new URL(document.location.toString()).searchParams.get(
      "code"
    );

    const res = axios.post(
      `https://todogochi.store/auth/sign-in/kakao`,
      {
        authCode: myCode,
      },
      { withCredentials: true }
    );
  }, []);

  return <div></div>;
}
