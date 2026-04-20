import HeroBanner from '../components/HeroBanner';
import FeedbackList from '../components/FeedbackList';

export default function AiForAll() {
  const content = [
    {
      badge: "AI for Research",
      institution: "Indian Institute of Technology (IIT), Mumbai",
      feedbackTitle: "Key Takeaways",
      points: [
        "Introduced innovative strategies for leveraging AI to accelerate academic research and publications",
        "Mapped out clear pathways for transitioning from PhD research into high-impact industry roles"
      ]
    },
    {
      badge: "AI in Non-IT Fields",
      institution: "Sardar Patel College of Engineering, Mumbai",
      feedbackTitle: "Feedback",
      points: [
        "Showcased how AI can revolutionize non-IT, non-software engineering disciplines",
        "Demonstrated practical AI tools that mechanical and civil engineers can use immediately"
      ]
    },
    {
      badge: "AI for HR Professionals",
      institution: "National Institute of Personnel Management, Pune",
      feedbackTitle: "Feedback",
      points: [
        "Introduced cutting-edge AI tools that transform recruitment, onboarding, and talent management workflows",
        "Empowered HR leaders to leverage AI for smarter decision-making and employee engagement"
      ]
    },
    {
      badge: "AI for Teachers — FDP",
      institution: "DY Patil College, Pimpri",
      feedbackTitle: "Impact",
      points: [
        "Equipped educators with practical AI tools to create engaging, personalized learning experiences",
        "Demonstrated how ChatGPT, Gemini, and other AI assistants can transform lesson planning and assessment"
      ]
    },
    {
      badge: "AI for Teachers — FDP",
      institution: "ATSS College, Chinchwad",
      feedbackTitle: "Feedback",
      points: [
        "Made complex AI concepts accessible to educators from diverse subject backgrounds",
        "Provided hands-on workshops on integrating AI into daily classroom teaching practice"
      ]
    },
    {
      badge: "AI for QA Engineers",
      institution: "BrowserStack, Pune",
      feedbackTitle: "Highlights",
      points: [
        "Delivered insights on AI-powered test automation, bug prediction, and intelligent debugging workflows",
        "Helped QA professionals adopt AI tools to dramatically improve testing efficiency and coverage"
      ]
    },
    {
      badge: "AI for MBA Students",
      institution: "Indira Group of Institutes, Pune",
      feedbackTitle: "Feedback",
      points: [
        "Showed MBA students how AI is reshaping business strategy, marketing analytics, and operations",
        "Introduced practical AI frameworks for data-driven decision making in management careers"
      ]
    }
  ];

  return (
    <>
      <HeroBanner
        title="AI for ALL"
        subtitle="Democratizing Artificial Intelligence"
        image="/images/ai-for-all.jpg"
        accentColor="electric"
      />
      <FeedbackList items={content} />
    </>
  );
}
