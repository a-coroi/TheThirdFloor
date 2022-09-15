import { useState } from "preact/hooks";

interface PromptProps {
  message: string;
}

export default function Prompt(props: PromptProps) {
  const [message, setMessage] = useState(props.message);

  return (
    <div class="items-center justify-start h-1/2 w-4/5">
      <div class="border-2 border-solid rounded-lg">
        <p class="font-mono p-3 mx-3 h-96">{message}</p>
      </div>
      <button
        class="text-center border-2 border-solid rounded-lg font-mono p-3 mx-3 my-3 bg-green-100 hover:bg-green-400"
        onClick={() => {
            setMessage('Sorry, that functionality does not work yet ):')
        }}
      >
        proceed
      </button>
      <a
        href="/"
        class="float-right border-2 border-solid rounded-lg font-mono p-3 mx-3 my-3 bg-red-100 hover:bg-red-400"
      >
        exit
      </a>
    </div>
  );
}
