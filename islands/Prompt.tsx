import { useState } from "preact/hooks"
import Phase from "../components/Phase.tsx"

const initialMessage = 'you awaken inside a strange metal box. the smell of iron and stale doughnuts draws your attention to the double doors. to the right of the doors, you notice a button that is highlighted in red - the letter B gently blinks. you notice an unopened can of grapefruit spindrift in the corner - who knows when that was left there?'

const getPhaseMessage = (possibleMessages: string[]) => {
  const nmi = Math.floor(Math.random() * possibleMessages.length)
  return possibleMessages[nmi]
}

export default function Prompt() {
  const [message, setMessage] = useState(initialMessage);

  setMessage(message => {
    return message
  })

  let nextMessage = ''
  let randomItem = ''

  if (Phase.value.stage === 0) {
    // We are at the beginning
    nextMessage = 'you have decided to advance. wise choice.'
  } else {
    // Possible message
    const possiblePhaseMessages = [
      'test1phaseLast',
      'test2phaseLast',
      'test3phaseLast',
      'test4phaseLast',
      'test5phaseLast'
    ]
    nextMessage = getPhaseMessage(possiblePhaseMessages)
  }
  // Possible items
  const possibleItems = [
    'an unknown book with its cover removed',
    'a still frozen oopskey',
    'an old logitech keyboard'
  ]

  // "Randomly" generated way to see if an item is available for pickup
  const isItemAvailable = !Math.round(Math.random())

  if (isItemAvailable) {
    // An item is available for pickup!
    const randomItemIndex = Math.floor(Math.random() * possibleItems.length)
    randomItem = possibleItems[randomItemIndex]
    nextMessage += `\nyou spot ${randomItem}`
  }

  return (
    <div class="items-center justify-start h-1/2 w-4/5">
      <p class="font-mono p-3 mx-3">a message for you...</p>
      <div class="border-2 border-solid rounded-lg">
        <p class="font-mono p-3 mx-3 h-96">{ message }</p>
      </div>
      <button
        class="text-center border-2 border-solid rounded-lg font-mono p-3 mx-3 my-3 bg-green-100 hover:bg-green-400"
        onClick={() => { 
          console.log(Phase.value)
          setMessage(nextMessage)
          Phase.value = {
            stage: ++Phase.value.stage,
            isItemAvailable,
            item: isItemAvailable ? randomItem : ''
          }
        }}
    >
        proceed
    </button>
    </div>
  );
}
