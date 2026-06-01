// lib/rag.ts — Mock RAG system with cosine similarity retrieval

export interface KnowledgeChunk {
  id: string
  text: string
  keywords: string[]
  category: string
}

// Knowledge base about Hawi Alemu
export const knowledgeBase: KnowledgeChunk[] = [
  {
    id: 'intro',
    category: 'general',
    keywords: ['who', 'hawi', 'about', 'intro', 'developer', 'fullstack', 'full stack', 'name'],
    text: `Hawi Alemu is a Full-Stack Web and Mobile Developer based in Adama, Ethiopia. 
    She builds end-to-end applications spanning web frontends, backend APIs, and cross-platform mobile apps. 
    She is passionate about clean code, great user experiences, and is currently exploring AI Automation 
    with tools like LangChain, OpenAI, and CrewAI.`,
  },
  {
    id: 'education',
    category: 'education',
    keywords: ['education', 'study', 'university', 'degree', 'school', 'college', 'adama', 'evangadi', 'graduated'],
    text: `Hawi holds a B.S. in Software Engineering from Adama Science & Technology University (ASTU) in Ethiopia. 
    She also completed a rigorous Full Stack Web Development program at Evangadi Networks, 
    where she built production-grade projects using React, Node.js, and MySQL.`,
  },
  {
    id: 'experience',
    category: 'experience',
    keywords: ['experience', 'work', 'job', 'intern', 'internship', 'space', 'geospatial', 'institute', 'ssgi'],
    text: `Hawi interned as a Full Stack Web & Mobile Developer at the Space Science and Geospatial Institute (SSGI) in Ethiopia. 
    There she built cross-platform mobile apps using React Native and Firebase, 
    integrating real-time data syncing, authentication, and cloud functions for geospatial data workflows.`,
  },
  {
    id: 'projects-ecommerce',
    category: 'projects',
    keywords: ['ecommerce', 'e-commerce', 'streaming', 'shop', 'store', 'firebase', 'react', 'project'],
    text: `Hawi built an E-Commerce & Streaming Platform using React and Firebase. 
    The app features user authentication, product catalog, shopping cart, payment flow, 
    and integrated streaming content delivery. It is deployed and live.`,
  },
  {
    id: 'projects-forum',
    category: 'projects',
    keywords: ['forum', 'evangadi', 'node', 'mysql', 'backend', 'database', 'community', 'project'],
    text: `The Evangadi Forum Project is a full-stack Q&A community platform built with React on the frontend 
    and Node.js + Express + MySQL on the backend. It supports user registration, threaded questions and answers, 
    authentication with JWT, and is deployed and live.`,
  },
  {
    id: 'projects-mobile',
    category: 'projects',
    keywords: ['mobile', 'customer', 'satisfaction', 'react native', 'app', 'survey', 'project'],
    text: `Hawi built a Customer Satisfaction Mobile App using React Native and Firebase. 
    The app collects feedback through dynamic surveys, stores results in Firestore, 
    and presents analytics dashboards for businesses. It is deployed and live on mobile platforms.`,
  },
  {
    id: 'skills-frontend',
    category: 'skills',
    keywords: ['skills', 'frontend', 'react', 'html', 'css', 'javascript', 'next', 'three', 'tailwind'],
    text: `Hawi's frontend skills include: JavaScript (ES6+), React, Next.js, React Native, Three.js, HTML5, CSS3, 
    and Tailwind CSS. She builds responsive, accessible, and animated interfaces with attention to UX detail.`,
  },
  {
    id: 'skills-backend',
    category: 'skills',
    keywords: ['backend', 'node', 'php', 'python', 'mysql', 'firebase', 'api', 'server', 'database'],
    text: `Hawi's backend skills include: Node.js, Express, PHP, Python, MySQL, and Firebase (Firestore, Auth, Functions). 
    She designs RESTful APIs, manages relational and NoSQL databases, and deploys server-side logic.`,
  },
  {
    id: 'skills-tools',
    category: 'skills',
    keywords: ['tools', 'git', 'github', 'version control', 'devops', 'workflow'],
    text: `Hawi uses Git and GitHub for version control and collaborative development. 
    She is comfortable with branching strategies, pull requests, and open source workflows.`,
  },
  {
    id: 'ai-automation',
    category: 'ai',
    keywords: ['ai', 'artificial intelligence', 'langchain', 'openai', 'rag', 'vector', 'crewai', 'automation', 'agents', 'llm', 'machine learning', 'gpt', 'embeddings'],
    text: `⚡ CURRENT FOCUS: Hawi is actively learning and building in the AI Automation space. 
    She is studying LangChain for building LLM-powered chains and agents, 
    the OpenAI API for GPT-4 integration, Vector Databases (Pinecone, ChromaDB) for semantic search, 
    RAG (Retrieval-Augmented Generation) architectures — like this very chat widget! — 
    and CrewAI for multi-agent orchestration. Her goal is to build intelligent AI agents 
    that automate complex workflows. This is her most exciting frontier right now.`,
  },
  {
    id: 'contact',
    category: 'contact',
    keywords: ['contact', 'email', 'reach', 'hire', 'work together', 'linkedin', 'github', 'social'],
    text: `You can reach Hawi through the contact section on this portfolio. 
    She is open to full-stack roles, mobile development contracts, and AI automation projects. 
    Her GitHub showcases her code, and she welcomes collaboration on interesting projects.`,
  },
  {
    id: 'location',
    category: 'general',
    keywords: ['location', 'where', 'ethiopia', 'adama', 'country', 'based', 'timezone'],
    text: `Hawi is based in Adama, Ethiopia (East Africa Time, UTC+3). 
    She is open to remote work globally and has collaborated with distributed teams.`,
  },
]

// Simple tokenizer
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2)
}

// Build TF-IDF-style vector from text
function buildVector(tokens: string[], vocabulary: string[]): number[] {
  const tf: Record<string, number> = {}
  tokens.forEach(t => { tf[t] = (tf[t] || 0) + 1 })
  return vocabulary.map(word => (tf[word] || 0) / Math.max(tokens.length, 1))
}

// Cosine similarity
function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0)
  const magA = Math.sqrt(a.reduce((sum, v) => sum + v * v, 0))
  const magB = Math.sqrt(b.reduce((sum, v) => sum + v * v, 0))
  if (magA === 0 || magB === 0) return 0
  return dot / (magA * magB)
}

// Build vocabulary from all chunks
const allTokens = knowledgeBase.flatMap(c => tokenize(c.text + ' ' + c.keywords.join(' ')))
const vocabulary = Array.from(new Set(allTokens)).slice(0, 500)
// Pre-compute chunk vectors
const chunkVectors = knowledgeBase.map(chunk => ({
  chunk,
  vector: buildVector(tokenize(chunk.text + ' ' + chunk.keywords.join(' ')), vocabulary),
}))

// Keyword boost scoring
function keywordScore(query: string, chunk: KnowledgeChunk): number {
  const q = query.toLowerCase()
  return chunk.keywords.filter(k => q.includes(k) || k.includes(q.split(' ')[0])).length * 0.3
}

// Main retrieval function
export function retrieve(query: string, topK = 3): KnowledgeChunk[] {
  const queryTokens = tokenize(query)
  const queryVector = buildVector(queryTokens, vocabulary)

  const scored = chunkVectors.map(({ chunk, vector }) => ({
    chunk,
    score: cosineSimilarity(queryVector, vector) + keywordScore(query, chunk),
  }))

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter(s => s.score > 0.01)
    .map(s => s.chunk)
}

// Generate response from retrieved context
export function generateResponse(query: string, chunks: KnowledgeChunk[]): string {
  const q = query.toLowerCase()

  // If no context retrieved
  if (chunks.length === 0) {
    return `I can answer questions about Hawi's skills, projects, experience, education, and AI work. What would you like to know?`
  }

  const isAiQuery = chunks.some(c => c.category === 'ai') ||
    q.includes('ai') || q.includes('langchain') || q.includes('rag') || q.includes('crewai')

  const isContactQuery = chunks.some(c => c.category === 'contact')

  // Build response from context
  const contextText = chunks.map(c => c.text).join('\n\n')

  // Template responses based on category
  if (isAiQuery) {
    const aiChunk = chunks.find(c => c.category === 'ai')
    if (aiChunk) {
      return `🤖 **AI Automation — Hawi's Current Focus:**\n\n${aiChunk.text}\n\n💡 *Fun fact: This chat widget is itself a mini RAG demo — it retrieves relevant context using cosine similarity and generates answers, exactly what Hawi is learning to build at scale!*`
    }
  }

  if (isContactQuery) {
    return `📬 **Getting in Touch:**\n\nHawi is open to exciting opportunities! You can reach her through the contact section below, or find her on GitHub. She welcomes full-stack roles, mobile projects, and AI automation collaborations.`
  }

  if (chunks.length === 1) {
    return chunks[0].text
  }

  // Multi-chunk synthesis
  return chunks.map(c => c.text).join('\n\n')
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export async function ragChat(query: string): Promise<string> {
  // Simulate async retrieval delay
  await new Promise(r => setTimeout(r, 800 + Math.random() * 600))

  const chunks = retrieve(query, 3)
  return generateResponse(query, chunks)
}
