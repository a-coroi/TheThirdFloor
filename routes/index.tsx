import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="flex justify-center items-center h-screen text-gray-600">
        <div class="mb016 mx-8 text-center">
            <span class="block text-3xl font-demi-bold font-mono my-10">the third floor</span>
            <a href="/about">
              <span class="font-mono border-2 border-solid rounded-full p-3 mx-3 hover:bg-green-200">embark</span>
            </a>
            <a href="/about">
              <span class="font-mono border-2 border-solid rounded-full p-3 hover:bg-blue-200">about</span>
            </a>
        </div>
        <div class="flex items-center my-3">
        </div>
    </main>
  )
}
