import HeroBanner from '../components/HeroBanner';
import FeedbackList from '../components/FeedbackList';

export default function FacultyDevelopment() {
  const content = [
    {
      badge: "Finite Element Analysis",
      institution: "Marathwada Mitra Mandal's Institute of Technology, Pune",
      feedbackTitle: "Key Highlights",
      points: [
        "Delivered clear, intuitive explanations of how Finite Element methods work in engineering practice",
        "Demonstrated real-world industrial application of FEA with case studies and live problem-solving"
      ]
    },
    {
      badge: "Finite Element Analysis",
      institution: "Walchand College of Engineering, Sangli",
      feedbackTitle: "Feedback",
      points: [
        "Complex FEA concepts were distilled into simple, easy-to-understand explanations",
        "Bridged the gap between academic theory and industry application of Finite Element Analysis"
      ]
    },
    {
      badge: "Keynote Speaker",
      institution: "Rajaram Bapu Institute of Technology, Rajaramnagar",
      feedbackTitle: "Event",
      points: [
        "Delivered an inspiring PG Conference keynote address on future-ready engineering education",
        "Engaged postgraduate students with insights on innovation and research methodology"
      ]
    },
    {
      badge: "External Viva Examiner",
      institution: "College of Engineering Pune (COEP)",
      feedbackTitle: "Feedback",
      points: [
        "Provided rigorous yet encouraging evaluation for postgraduate research presentations",
        "Offered actionable industry-perspective feedback on FEA-related research work"
      ]
    },
    {
      badge: "External Viva Examiner",
      institution: "Maharashtra Institute of Technology (MIT), Pune",
      feedbackTitle: "Highlights",
      points: [
        "Evaluated student research with a balanced academic-industry perspective",
        "Brought practical industry insights to strengthen academic assessments"
      ]
    },
    {
      badge: "Finite Element Analysis",
      institution: "Vishwakarma Institute of Technology (VIT), Pune",
      feedbackTitle: "Feedback",
      points: [
        "Masterfully simplified advanced FEA concepts for a diverse faculty audience",
        "Showcased how FEA drives innovation in real-world engineering projects"
      ]
    },
    {
      badge: "Industrial Panelist",
      institution: "Pune University",
      feedbackTitle: "Role",
      points: [
        "Served as an industry expert panelist bringing corporate-world perspective to academic evaluations",
        "Contributed to shaping industry-aligned curriculum and evaluation standards"
      ]
    }
  ];

  return (
    <>
      <HeroBanner
        title="Faculty Development"
        subtitle="Institutional Advisory & Training"
        image="https://ganeshsoni.com/wp-content/uploads/slider/cache/9ec794796ca16d546e553ff44a17be9e/External-Viva-4.jpg"
        accentColor="flame"
      />
      <FeedbackList items={content} />
    </>
  );
}
