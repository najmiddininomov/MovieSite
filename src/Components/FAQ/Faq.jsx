import React, { useState } from 'react';
import './Faq.scss'
const faqItems = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer: "StreamVibe is a premium streaming service that allows you to watch a wide variety of movies, TV shows, documentaries, and exclusive originals anytime, anywhere. Whether you're into action, romance, comedy, or drama, StreamVibe has something for everyone. It’s accessible on multiple platforms, including smart TVs, mobile devices, and web browsers."
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer: "StreamVibe offers multiple subscription plans tailored to different needs. Prices start from a basic monthly plan with limited features, up to a premium plan that includes 4K streaming, multiple device support, and offline downloads. Exact pricing can vary by region, so we recommend visiting our pricing page for the most up-to-date information."
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer: "StreamVibe provides access to a massive library of content, including the latest blockbuster movies, popular TV series, award-winning documentaries, and exclusive StreamVibe Originals. The catalog is regularly updated, and you'll find content across various genres like action, romance, thriller, sci-fi, kids shows, and more."
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer: "You can enjoy StreamVibe on a wide range of devices, including smart TVs (Samsung, LG, Android TV), mobile phones and tablets (iOS and Android), streaming devices (Roku, Fire Stick, Apple TV), gaming consoles, and through web browsers on your computer. Just download the StreamVibe app or visit our website to start watching."
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer: "Signing up is easy! Just go to our official website and click the 'Sign Up' button. Fill in your email, create a password, and choose a subscription plan. You can also sign up using your Google or Apple account for a quicker registration process. Once registered, you’ll gain instant access to our full content library."
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer: "StreamVibe offers a 7-day free trial for new users, allowing you to explore our entire content library without any charge. During the trial, you'll have full access to all features, including HD streaming and multi-device support. If you enjoy the experience, your subscription will automatically begin after the trial ends, unless you cancel beforehand."
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer: "If you need help, you can contact our customer support team through the 'Help & Support' section on our website or app. We offer 24/7 live chat, email assistance, and a detailed help center with FAQs, troubleshooting guides, and more to help resolve any issues you might face."
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer: "StreamVibe supports a variety of secure payment methods, including all major credit and debit cards (Visa, MasterCard, American Express), PayPal, Google Pay, Apple Pay, and local payment options depending on your region. You can update or change your payment method anytime from your account settings."
  }
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
