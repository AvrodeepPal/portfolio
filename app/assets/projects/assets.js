import starempo from './starempo.png';
import stockslstm from './stockslstm.png';
import letsconnect from './letsconnect.png';
import creditrisk from './creditriskeda.png';

export const projects = [
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