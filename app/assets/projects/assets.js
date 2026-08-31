import starempo from './starempo.png';
import stockslstm from './stockslstm.png';
import letsconnect from './letsconnect.png';
import creditrisk from './creditriskeda.png';
import frauddetection from './frauddetection.png';
import llmspractice from './llmspractice.png';
import banglasemantics from './banglasemantics.png';

export const projects = [
  {
    name: 'Cross Lingual Semantics',
    image: banglasemantics,
    description: 'Syntactics and Semantics is how words mean. On that note, the project pivots around Bangla!',
    lang: ['NLP', 'BERT', 'LaBSE', 'Multilingual'],
    isLive: 0,
    code: 'https://github.com/AvrodeepPal/Cross-Lingual-Bengali-Idiom-Matching-Using-Multilingual-Sentence-Embeddings-Without-Translation',
    live: ''
  },
  {
    name: 'LLMs Practice',
    image: llmspractice,
    description: 'Attention is All YOU Need, and I will see to its references.',
    lang: ['Transformers', 'Attention', 'Neural-Networks'],
    isLive: 0,
    code: 'https://github.com/AvrodeepPal/LLMsPractice',
    live: ''
  },
  {
    name: 'Fraud Detection EDA - Transaction Analysis',
    image: frauddetection,
    description: 'The rarer the frauds, the pricier. Keen to algos, time and reasonings, lets ensemble!',
    lang: ['LightGBM', 'SHAP-Reasoning', 'CyberSecurity'],
    isLive: 2,
    code: 'https://github.com/AvrodeepPal/Fraud_Detection_Analysis',
    live: 'https://colab.research.google.com/drive/1RPRdHKYfUiyr2KWyc6NasXXU52ZejZ-k?usp=sharing'
  },
  {
    name: 'Credit Risk EDA - Loan Approval',
    image: creditrisk,
    description: 'Analyze and Visualize tonight! Explote 8 ML ALgos compete to predict Loan Approval Status!',
    lang: ['Python', 'XGBoost', 'CatBoost', 'SMOTE'],
    isLive: 2,
    code: 'https://github.com/AvrodeepPal/Credit_Risk_Analysis',
    live: 'https://colab.research.google.com/drive/1g_uLKLJcYQTYBa7wu4g3afXA7OqEvIyk?usp=sharing'
  },
  {
    name: "Let's Connect!",
    image: letsconnect,
    description: 'AI-powered Recruitment aid for Personalization and Automating Placement Communication!',
    lang: ['Python', 'Streamlit', 'Supabase', 'MistralAI'],
    isLive: 1,
    code: 'https://github.com/AvrodeepPal/LetsConnect',
    live: 'https://letsconnect-jumca2026.streamlit.app'
  },
  {
    name: 'Time Series Analysis',
    image: stockslstm,
    description: 'Stock Market Forecasting powered by Deep Learning! Compare ReLU and GELU Performance while Accuracy skyrockets!',
    lang: ['Jupyter', 'LSTM', 'TensorFlow', 'Keras'],
    isLive: 0,
    code: 'https://github.com/AvrodeepPal/Time_Series_Analysis_LSTM',
    live: ''
  },
  {
    name: 'Star Emporium',
    image: starempo,
    description: 'Save some Clicks and lot more Trees! Visit the Ultimate Online Book Store for Learners!',
    lang: ['Java', 'Swing GUI', 'JDBC', 'MySQL'],
    isLive: 0,
    code: 'https://github.com/AvrodeepPal/Star_Emporium',
    live: ''
  }
];