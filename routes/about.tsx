export default function About() {
    return (
        <main class="flex justify-center items-center h-screen text-gray-600">
            <div class="mb016 mx-8 text-center">
                <p class="block text-3xl font-demi-bold font-mono my-3">the third floor</p>
                <p class="text-md text-left font-mono max-w-md">this adventure was developed as a professional development day project using <a class="underline" href='deno.land/'>deno</a> and <a class="underline" href='fresh.deno.dev/'>fresh</a>. can you make it to the safety of the pocket prep office?
                </p>
                <a class="text-center" href="/">
                    <span class="border-2 border-solid rounded-lg p-3 hover:bg-blue-200 inline-block">🏠</span>
                </a>
            </div>
            <div class="flex items-center">
                <a href="https://github.com/a-coroi/TheThirdFloor" class="mx-5">
                    <img class="animate-pulse" width="30" height="30" src="/gh.svg"></img>
                </a>
            </div>
        </main>
    )
}