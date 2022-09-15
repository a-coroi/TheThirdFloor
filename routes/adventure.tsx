import Prompt from "../islands/Prompt.tsx"

export default function Adventure() {
    return (
        <main class="flex justify-center items-center h-screen text-gray-600">
            <Prompt message={'>'}></Prompt>
        </main>
    )
}