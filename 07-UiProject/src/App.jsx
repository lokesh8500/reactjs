import React from 'react'
import Section1 from './component/sec1/section1'
import Section2 from './component/sec2/section2'

function App() {

const users = [
  { 
    id: 1,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    intro: 'Elena Rostova - Passionate about crafting intuitive digital products and human-centered user experiences.', 
    tag: 'Senior UX Designer' 
  },
  { 
    id: 2,
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    intro: 'Marcus Vance - Building scalable web applications with React, Node.js, and modern cloud architecture.', 
    tag: 'Full Stack Developer' 
  },
  { 
    id: 3,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    intro: 'Sophia Lin - Bridging the gap between engineering teams and business strategy to deliver impactful software.', 
    tag: 'Product Manager' 
  },
  { 
    id: 4,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    intro: 'David Kalu - Automating CI/CD pipelines and managing resilient cloud infrastructure on AWS.', 
    tag: 'DevOps Engineer' 
  },
  { 
    id: 5,
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
    intro: 'Aria Montgomery - Crafting compelling visual identities and growth strategies for modern brands.', 
    tag: 'Brand Strategist' 
  },
  { 
    id: 6,
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop',
    intro: 'Lucas Thorne - Researching deep learning models, LLMs, and computer vision applications.', 
    tag: 'AI Research Scientist' 
  }
];
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
