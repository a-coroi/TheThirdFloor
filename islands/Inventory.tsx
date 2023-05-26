import { useState } from "preact/hooks";
import Phase from "../components/Phase.tsx"

export interface IItem {
  itemName: string
}

export default function Inventory() {
  const [items, setItem] = useState<IItem[]>([]);

  const addToInventory = (i: IItem) => {
      setItem([...items, i])
  }

  return (
    <div class="items-center justify-start h-1/2 w-4/5">
      <p class="font-mono p-3 mx-3">inventory</p>
      <div class="border-2 border-solid rounded-lg h-96">
        {
          items.map(item => {
            return (
              <p class="font-mono p-3 mx-3">{ item.itemName }</p>
            )
          })
        }
      </div>
      {Phase.value.isItemAvailable &&
        <button
          class="text-center border-2 border-solid rounded-lg font-mono p-3 mx-3 my-3 bg-green-100 hover:bg-green-400"
          onClick={ () => addToInventory({ itemName: Phase.value.item }) }
        >
          pick up
        </button>
      }
    </div>
  );
}
