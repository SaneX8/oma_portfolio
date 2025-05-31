import { OpenAI } from "openai";
import { vector } from "./upstash";
import { createHash } from "crypto";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function embedAndStoreFromGitHub(
  repoUrl: string,
  projectName: string
) {
  const readmeUrl =
    repoUrl.replace("github.com", "raw.githubusercontent.com") +
    "/main/README.md";
  const res = await fetch(readmeUrl);
  const text = await res.text();

  const chunks = splitText(text, 1000); // 1k-character chunks
  for (const chunk of chunks) {
    const embedding = await openai.embeddings.create({
      input: chunk,
      model: "text-embedding-3-small",
    });

    await vector.upsert({
      id: createHash("md5").update(chunk).digest("hex"),
      vector: embedding.data[0].embedding,
      metadata: {
        repo: projectName,
        text: chunk,
      },
    });
  }

  console.log(`✅ Embedded and stored: ${projectName}`);
}

function splitText(text: string, maxLen: number): string[] {
  const paragraphs = text.split("\n\n");
  const chunks: string[] = [];

  let current = "";
  for (const para of paragraphs) {
    if ((current + para).length > maxLen) {
      chunks.push(current);
      current = para;
    } else {
      current += "\n\n" + para;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}
