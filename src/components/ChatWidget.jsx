import { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: '안녕하세요! 고려대학교 시민정치리빙랩 챗봇입니다. 무엇을 도와드릴까요?' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleQuickReply = (question, answer) => {
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: question };
    setMessages(prev => [...prev, userMsg]);

    // Simulate bot thinking then replying
    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, sender: 'bot', text: answer };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const faqs = [
    {
      q: '우리아이 학교보내기 자료는 어디서 받나요?',
      a: '상단 메뉴의 [학교생활] 탭으로 이동하시면 다국어로 번역된 공교육 진입 안내(우리아이 학교보내기) PDF 자료를 다운로드하실 수 있습니다.'
    },
    {
      q: '대학입시 특별전형이 무엇인가요?',
      a: '부모가 모두 외국인인 학생 등 특별한 자격을 갖춘 학생들을 위한 전형입니다. 자세한 모집요강은 [대학입시] 메뉴에서 학교별로 확인 가능합니다.'
    },
    {
      q: '유학 비자(D-2) 발급 방법이 궁금해요.',
      a: 'D-2 비자는 대학의 정규 학위 과정에 입학 시 필요한 비자입니다. 대학에서 발급하는 표준입학허가서를 받아 관할 출입국관리사무소에 신청하셔야 합니다.'
    }
  ];

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>상담 챗봇 (Demo)</h3>
            <button className="close-btn" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>자주 묻는 질문(FAQ)을 선택해 주세요:</p>
            <div className="quick-replies">
              {faqs.map((faq, idx) => (
                <button 
                  key={idx} 
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(faq.q, faq.a)}
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={toggleChat}>
          <FaCommentDots />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
