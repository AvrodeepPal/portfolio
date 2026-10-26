// Single source of truth for skill icons: sprite symbol id -> source SVG (relative to this folder).
// `npm run sprite` packs these into public/skills-sprite.svg; assets.js references the ids.
export const icons = {
  // Languages
  c: 'svg/C.svg',
  cpp: 'svg/C++-(CPlusPlus).svg',
  java: 'svg/Java.svg',
  python: 'svg/Python.svg',
  javascript: 'svg/JavaScript.svg',
  bash: 'svg/Bash.svg',
  r: 'svg/R-.svg',
  prolog: 'prolog.svg',
  // AI / ML
  pytorch: 'svg/PyTorch.svg',
  tensorflow: 'svg/TensorFlow.svg',
  keras: 'svg/Keras.svg',
  opencv: 'svg/OpenCV.svg',
  sklearn: 'scikit-learn.svg',
  huggingface: 'huggingface.svg',
  cuda: 'cuda.svg',
  // LLM & RAG
  langchain: 'langchain.svg',
  langgraph: 'langgraph.svg',
  pinecone: 'pineconedb.svg',
  chromadb: 'chromadb.svg',
  // Infra
  fastapi: 'svg/FastAPI.svg',
  docker: 'svg/Docker.svg',
  nginx: 'svg/NGINX.svg',
  postgresql: 'svg/PostgresSQL.svg',
  redis: 'svg/Redis.svg',
  aws: 'svg/AWS.svg',
  // Web dev
  react: 'svg/React.svg',
  nextjs: 'svg/Next.js.svg',
  node: 'svg/Node.js.svg',
  tailwind: 'svg/Tailwind-CSS.svg',
  html: 'svg/HTML5.svg',
  css: 'svg/CSS3.svg',
  mongodb: 'svg/MongoDB.svg',
  supabase: 'supabase.svg',
  // Data & tools
  pandas: 'svg/Pandas.svg',
  numpy: 'svg/NumPy.svg',
  matplotlib: 'svg/Matplotlib.svg',
  jupyter: 'svg/Jupyter.svg',
  rstudio: 'svg/RStudio.svg',
  git: 'svg/Git.svg',
  github: 'svg/GitHub.svg',
  vscode: 'svg/Visual-Studio-Code-(VS-Code).svg',
  postman: 'svg/Postman.svg',
  linux: 'svg/Linux.svg',
  // Platforms
  vercel: 'svg/Vercel.svg',
  streamlit: 'svg/Streamlit.svg',
  kaggle: 'svg/Kaggle.svg',
  netlify: 'netlify.svg',
};
