import Image from "next/image";
import React from "react";

export default function EditorPreview() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
      <Image src="/assets/editor.png" width={2048} height={2048} alt="Editor" />
    </div>
  );
}
