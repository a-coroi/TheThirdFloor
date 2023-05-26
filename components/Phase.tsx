import { signal } from "@preact/signals"

// Global game state management
const Phase = signal({
    stage: 0,
    isItemAvailable: true,
    item: 'can of spindrift'
})

export default Phase