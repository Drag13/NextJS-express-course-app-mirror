"use client";

import { useState } from "react";

export function Like() {
  const [liked, setLike] = useState(false);
  return <button onClick={() => setLike(!liked)}>{liked ? "😍" : "👍"}</button>;
}
