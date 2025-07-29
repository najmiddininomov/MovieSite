import React, { useState } from 'react';
import './Faq.scss'
const faqItems = [
  { id: 1, question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
  { id: 2, question: "How much does StreamVibe cost?", answer: "StreamVibe pricing depends on the plan you choose." },
  { id: 3, question: "What content is available on StreamVibe?", answer: "Movies, TV shows, documentaries, and more." },
  { id: 4, question: "How can I watch StreamVibe?", answer: "You can watch it on smart TVs, web, or mobile apps." },
  { id: 5, question: "How do I sign up for StreamVibe?", answer: "Go to our website and click 'Sign Up'." },
  { id: 6, question: "What is the StreamVibe free trial?", answer: "We offer a 7-day free trial for new users." },
  { id: 7, question: "How do I contact StreamVibe customer support?", answer: "You can contact us through the help section." },
  { id: 8, question: "What are the StreamVibe payment methods?", answer: "Credit cards, PayPal, and more." }
];

const Faq = () => {
  const [openId, setOpenId] = useState(null); 

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className='Faq'>
      <div className="container">
        <div className="faq-title">
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className='faqBtn'>Ask a Question</button>
        </div>

        <div className="faq-grid">
        
          <div className="left-column">
            {faqItems.slice(0, 4).map(item => (
              <div className="faq-item" key={item.id}>
                <div className="faq-header" onClick={() => toggle(item.id)}>
                  <span className="faq-number">{String(item.id).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon">{openId === item.id ? '−' : '+'}</span>
                </div>
                {openId === item.id && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="right-column">
            {faqItems.slice(4).map(item => (
              <div className="faq-item" key={item.id}>
                <div className="faq-header" onClick={() => toggle(item.id)}>
                  <span className="faq-number">{String(item.id).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon">{openId === item.id ? '−' : '+'}</span>
                </div>
                {openId === item.id && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
