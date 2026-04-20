import HeroBanner from '../components/HeroBanner';
import FeedbackList from '../components/FeedbackList';

export default function CareerGuidance() {
  const content = [
    {
      badge: "Career Guidance",
      institution: "SGS Academy, Pune",
      feedbackTitle: "Session Overview",
      points: [
        "Mapped out diverse career trajectories available to MBA graduates in today's evolving market",
        "Provided actionable insights on how to stand out in competitive recruitment processes"
      ]
    },
    {
      badge: "Resume Writing Masterclass",
      institution: "Cummins Women's College of Engineering, Pune",
      feedbackTitle: "Feedback",
      points: [
        "Delivered a step-by-step masterclass on crafting resumes that pass ATS systems and captivate recruiters",
        "Provided logical, data-backed explanations on why each section of a resume matters to hiring managers"
      ]
    },
    {
      badge: "Interview Preparation",
      institution: "Symbiosis College of Engineering, Pune",
      feedbackTitle: "Feedback",
      points: [
        "Conducted a high-impact session on acing real-world industrial technical interviews",
        "Revealed what top recruiters actually look for — from first impression to final question"
      ]
    },
    {
      badge: "Resume Writing Workshop",
      institution: "IITRAM, Ahmedabad",
      feedbackTitle: "Feedback",
      points: [
        "Taught participants to build powerful, professional resumes completely from scratch",
        "Explained the science behind resume structure, keyword optimization, and visual hierarchy"
      ]
    },
    {
      badge: "Resume Writing Workshop",
      institution: "Vishwakarma Institute of Technology (VIT), Pune",
      feedbackTitle: "Feedback",
      points: [
        "Armed engineering students with resume strategies that led to measurably higher callback rates",
        "Covered industry-specific resume formats for IT, core engineering, and management roles"
      ]
    },
    {
      badge: "Career Strategy Session",
      institution: "Maharashtra Institute of Technology (MIT), Pune",
      feedbackTitle: "Highlights",
      points: [
        "Delivered comprehensive training on resume crafting, personal branding, and LinkedIn optimization",
        "Guided students through mock interview scenarios with real-time, constructive feedback"
      ]
    }
  ];

  return (
    <>
      <HeroBanner
        title="Career Guidance"
        subtitle="Strategic Career Coaching & Mentorship"
        image="/images/career-guidance.jpg"
        accentColor="magenta"
      />
      <FeedbackList items={content} />
    </>
  );
}
