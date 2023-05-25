import Prompt from "../islands/Prompt.tsx"
import Inventory from "../islands/Inventory.tsx"
import Phase from "../components/Phase.tsx"

let itemToAdd = 'can of spindrift'


export default function Adventure() {
    
    return (
        <main class="flex row h-screen">
            <div class="flex items-center text-gray-600 w-3/4">
                <Prompt />
            </div>
            <div class="flex items-center text-gray-600 w-1/4">
                <Inventory
                    itemName='hi'
                />
            </div>
        </main>
    )
}