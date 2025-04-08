import { ChatOllama } from "@langchain/ollama"

const llm = new ChatOllama({
    model: 'llama3.2',
    temperature: 0.3
})

const prompt = getPrompt()

const result = await llm.invoke(prompt)

console.log(result.content)


function getPrompt() {
    const targetLanguage = process.argv[2]
    const textToBeTranslated = process.argv[3]

    return `You are a translator.
Translate the following text into ${targetLanguage}
Do not explain anything, do not comment. Just provide the translated text.

Example:
User's input: "Hallo, wie geht es Ihnen?"
Your answer: "Hello, how are you doing?"

${textToBeTranslated}
`
}