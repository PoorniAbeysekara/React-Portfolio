import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import HeroGradient from '../components/heroSection/HeroGradient';

const certifications = [
  {
    title: "Git & GitHub Mastery Session",
    image:
      "/images/certificates/git.png",
    credentialUrl:
      "https://www.linkedin.com/posts/poorni-abeysekara-2a2096308_git-github-mastery-session-activity-7253263472568762368-dQOx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5SgxoBFtvoLlmfzxP1C6QhYgjhQgEAZ-Q",
  },
  
  {
    title: "Programming Foundations: Fundamentals",
    image: "/images/certificates/python.png",
    credentialUrl:
      "https://www.linkedin.com/posts/poorni-abeysekara-2a2096308_python-for-beginners-activity-7253266136765476864-QZ1M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5SgxoBFtvoLlmfzxP1C6QhYgjhQgEAZ-Q",
  },

  {
    title: "Programming Foundations: Fundamentals with Python",
    image: "/images/certificates/greatlearn.png",
    credentialUrl:
      "https://www.linkedin.com/posts/poorni-abeysekara-2a2096308_python-fundamentals-for-beginners-course-activity-7265936916246667264-oanm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5SgxoBFtvoLlmfzxP1C6QhYgjhQgEAZ-Q",
  },
 
];

function CertificationsPage() {
  return (
    <div className="min-h-screen text-black pt-24 px-4 sm:px-6 md:px-8">
      <HeroGradient />
      <Link to="/" className="text-forestGreen underline mb-4 inline-block">
        &larr;
      </Link>
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl font-bold mb-6 text-mutedGold"
      >
        My Certifications
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", idx * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-richMetallicGold shadow-lg bg-ivory group"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-contain bg-ivory transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-deepForestGreen bg-opacity-80 flex flex-col items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2">
              <div className="text-base xs:text-lg sm:text-xl font-bold text-center text-richMetallicGold px-2 sm:px-4 mb-3 sm:mb-4">
                {cert.title}
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-mutedGold text-ivory font-bold text-base sm:text-lg shadow hover:bg-mutedGold transition"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;
