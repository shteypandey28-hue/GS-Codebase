import HeroBanner from '../components/HeroBanner';
import FeedbackList from '../components/FeedbackList';

export default function StudentCounselling() {
  const content = [
    {
      badge: "Student Counselling",
      institution: "MIS International School, Balewadi",
      feedbackTitle: "Session Highlights",
      points: [
        "Delivered an inspiring session that helped students connect their dreams with actionable career paths",
        "Introduced the Ikigai framework to help young minds discover their life purpose and professional direction",
        "Students reported feeling significantly more motivated and clear about their future aspirations"
      ]
    },
    {
      badge: "Dream Mapping Workshop",
      institution: "Orchid International School, Tathawade",
      feedbackTitle: "Impact",
      points: [
        "Conducted an interactive dream-mapping workshop that unlocked students' hidden aspirations and talents",
        "Used the Ikigai model to bridge the gap between passion, skills, and real-world career opportunities",
        "Helped students identify their unique strengths and create a personalized career vision board"
      ]
    },
    {
      badge: "Career Awareness Program",
      institution: "Laxmanrao Apte Junior College, Pune",
      feedbackTitle: "Feedback",
      points: [
        "Engaged junior college students with relatable stories and practical frameworks for career exploration",
        "Applied Ikigai principles to show students how to find purpose at the intersection of passion and profession",
        "Parents and teachers praised the transformational impact of the session on student motivation"
      ]
    }
  ];

  return (
    <>
      <HeroBanner
        title="Student Counselling"
        subtitle="Empowering the Next Generation"
        image="/images/student-counselling.jpg"
        accentColor="violet"
      />
      <FeedbackList items={content} />
    </>
  );
}
