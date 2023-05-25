import { signal } from "@preact/signals"

// Global game state management
const Phase = signal({
    stage: 0,
    isItemAvailable: true,
    item: ''
})

export default Phase