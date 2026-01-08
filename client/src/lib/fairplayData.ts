export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  sections: {
    introduction: string;
    coreConcepts: string[];
    realWorldExamples: string[];
    bestPractices: string[];
    commonMistakes: string[];
    whyItMatters: string;
  };
  quiz: QuizQuestion[];
}

export const topics: Topic[] = [
  {
    id: "sports",
    title: "Sports Fairplay",
    shortTitle: "Sports",
    description: "Learn about fairplay principles in sports, including anti-cheating, doping prevention, and sportsmanship.",
    image: "/images/sports-fairplay.webp",
    icon: "Trophy",
    color: "#0D7377",
    sections: {
      introduction: `Sports fairplay is the absolute foundation of competitive integrity and mutual respect. It encompasses not only following the rules but embodying the spirit of honest competition. In sports, fairplay means competing with integrity, respecting opponents as fellow athletes, accepting decisions with grace, and refusing to gain unfair advantages through cheating or doping.

The importance of fairplay extends far beyond individual games or matches. It shapes character in young athletes, builds trust between competitors and fans, and creates a culture where excellence is achieved through legitimate effort and dedication. When fairplay principles are violated, the entire foundation of sport crumbles, undermining the achievements of honest competitors, damaging the sport's credibility globally, and sending a message that winning is more important than integrity.

Consider this: when a record is broken through cheating, does it mean anything? When a champion is crowned after using performance-enhancing drugs, is that achievement real? The answer is no. Fairplay is what makes sports meaningful. It's what allows us to celebrate genuine excellence and use sports as a tool for positive social change.`,
      coreConcepts: [
        "Rule Adherence: Understanding and following the established rules of the game, not just the letter but the spirit of competition. This means respecting the intent behind rules, not just finding loopholes.",
        "Anti-Cheating: Refusing to use illegal tactics, equipment manipulation, or deception to gain advantages over opponents. This includes match-fixing, spot-fixing, and any form of deliberate dishonesty.",
        "Doping Prevention: Understanding the serious dangers of performance-enhancing drugs and committing to natural competition. Doping not only violates fairplay but causes permanent health damage.",
        "Sportsmanship: Showing genuine respect to opponents, officials, and the game itself through gracious behavior in both victory and defeat. This includes congratulating winners and accepting losses with dignity.",
        "Fair Competition: Competing on equal terms, ensuring all athletes have similar opportunities to succeed based on skill, effort, and strategy rather than unfair advantages."
      ],
      realWorldExamples: [
        "Good Example: Serena Williams' sportsmanship in tennis - acknowledging good shots from opponents, respecting umpire decisions even when disagreeing, and showing grace in both victory and defeat.",
        "Bad Example: The 2016 Rio Olympics doping scandal where Russian athletes were caught using performance-enhancing drugs, undermining fair competition and damaging the credibility of the entire Olympic Games.",
        "Good Example: Cristiano Ronaldo helping up fallen opponents during matches, showing respect regardless of competition intensity and demonstrating that fairplay transcends competitive desire.",
        "Bad Example: Match-fixing in cricket where players deliberately underperform to benefit gambling syndicates, destroying the integrity of the sport and betraying fans who believe in genuine competition.",
        "Good Example: Wheelchair athletes competing with determination and inspiring millions while maintaining the highest standards of fairplay and sportsmanship.",
        "Bad Example: Using illegal equipment modifications in cycling to gain aerodynamic advantages, as seen in various professional cycling scandals that tainted the sport's reputation.",
        "Good Example: Players voluntarily reporting their own rule violations to officials, demonstrating that personal integrity matters more than winning.",
        "Bad Example: Deliberately injuring opponents to gain competitive advantage, which violates both fairplay and basic human decency."
      ],
      bestPractices: [
        "For Athletes: Train hard through legitimate means, learn the rules thoroughly and understand their purpose, respect all participants including opponents and officials, report suspicious activities, and refuse to compromise your integrity for any victory.",
        "For Coaches: Emphasize fairplay in every training session, refuse to teach illegal techniques or encourage rule-bending, create a culture where integrity is valued over winning at any cost, and mentor young athletes about character.",
        "For Officials: Make consistent, fair decisions based on the rules, communicate clearly with players about decisions, maintain the highest standards of impartiality, and never show favoritism.",
        "For Organizations: Implement strict anti-doping policies with regular testing, conduct fairplay education programs, investigate allegations thoroughly, enforce consequences fairly and consistently, and promote a culture of integrity.",
        "For Fans: Support fair competition actively, criticize cheating publicly, celebrate honest achievements, refuse to support athletes or teams that violate fairplay principles, and teach children about the importance of integrity."
      ],
      commonMistakes: [
        "Assuming minor rule violations don't matter - every breach of fairplay undermines the entire system and sets a precedent that dishonesty is acceptable.",
        "Turning a blind eye to teammates' cheating - silence enables further violations and spreads the culture of dishonesty throughout the team and sport.",
        "Prioritizing winning over integrity - short-term victory through unfair means creates long-term damage to reputation, character, and the sport itself.",
        "Not understanding the health dangers of doping - performance-enhancing drugs cause serious health problems including heart disease, liver damage, and psychological issues that can be permanent.",
        "Blaming external pressure for unfair play - personal responsibility for ethical choices remains regardless of circumstances, pressure, or consequences.",
        "Thinking 'everyone does it' - this rationalization is how corruption spreads; someone must stand up for fairplay.",
        "Not reporting suspicious behavior - reporting is not 'snitching'; it's protecting the integrity of the sport you love."
      ],
      whyItMatters: `Fairplay in sports matters profoundly because it determines whether competition is meaningful. When athletes compete fairly, their achievements represent genuine excellence and inspire others to pursue greatness through legitimate means. Fairplay builds character in young athletes, teaching them that success through integrity is more valuable than victory through cheating. It creates trust between competitors and fans, making sports a force for positive social change and community building.

Without fairplay, sports becomes a hollow spectacle where records mean nothing, achievements are tainted, and the entire enterprise loses credibility. The global sports community depends on fairplay to maintain its moral authority and continue inspiring billions of people worldwide. When we protect fairplay, we're not just protecting sports—we're protecting the values that make human achievement meaningful.`
    },
    quiz: [
      {
        id: "s1",
        question: "What is the primary purpose of fairplay in sports?",
        options: [
          "To make sports more entertaining",
          "To ensure competitive integrity and mutual respect",
          "To reduce the number of rules",
          "To make winning easier"
        ],
        correctAnswer: 1,
        explanation: "Fairplay ensures that competition is based on skill, effort, and integrity rather than cheating or unfair advantages. This maintains the credibility and meaning of sports, making achievements genuinely valuable."
      },
      {
        id: "s2",
        question: "Which of the following is NOT a component of sports fairplay?",
        options: [
          "Following the rules",
          "Respecting opponents",
          "Using performance-enhancing drugs",
          "Accepting official decisions"
        ],
        correctAnswer: 2,
        explanation: "Using performance-enhancing drugs is a violation of fairplay. Fairplay requires competing through legitimate means and refusing to use substances that provide unfair advantages and damage health."
      },
      {
        id: "s3",
        question: "What should you do if you witness a teammate cheating?",
        options: [
          "Say nothing to protect the team",
          "Report it to the appropriate authorities",
          "Cheat as well to level the playing field",
          "Tell only your coach privately"
        ],
        correctAnswer: 1,
        explanation: "Reporting cheating is essential to maintaining fairplay. Silence enables further violations and spreads a culture of dishonesty. Integrity requires taking action to protect the sport."
      },
      {
        id: "s4",
        question: "How does fairplay contribute to character development?",
        options: [
          "It doesn't affect character",
          "It teaches that winning at any cost is acceptable",
          "It teaches that integrity and honest effort are more valuable than victory through cheating",
          "It eliminates the need for personal responsibility"
        ],
        correctAnswer: 2,
        explanation: "Fairplay teaches young athletes that character, integrity, and honest effort are more valuable than winning through unfair means. This shapes their values for life beyond sports."
      },
      {
        id: "s5",
        question: "What is doping in sports?",
        options: [
          "A training technique",
          "Using performance-enhancing drugs to gain unfair advantages",
          "A type of sports equipment",
          "A coaching method"
        ],
        correctAnswer: 1,
        explanation: "Doping involves using performance-enhancing drugs to gain unfair advantages. It violates fairplay principles, is illegal in competitive sports, and causes serious health damage."
      }
    ]
  },
  {
    id: "gaming",
    title: "Gaming & Esports Fairplay",
    shortTitle: "Gaming",
    description: "Explore fairplay in gaming and esports, including anti-cheat systems, competitive integrity, and community standards.",
    image: "/images/gaming-fairplay.webp",
    icon: "Gamepad2",
    color: "#0D7377",
    sections: {
      introduction: `Gaming fairplay represents the commitment to honest competition in digital environments. As esports has grown into a multi-billion dollar industry with professional leagues, massive audiences, and life-changing prize pools, fairplay has become increasingly critical. Gaming fairplay includes preventing cheating through hacking and exploits, maintaining competitive integrity in tournaments, preventing toxic behavior that undermines community health, ensuring that victories are earned through legitimate skill and strategy, and protecting the reputation of the gaming industry.

The gaming community has developed sophisticated anti-cheat systems, reporting mechanisms, and community standards to protect the integrity of competition. When fairplay is compromised in gaming, it not only affects individual matches but can destroy entire gaming communities, undermine the credibility of professional esports, and damage the careers of honest players. Gaming fairplay is about creating environments where skill, strategy, and dedication are rewarded, not exploits and dishonesty.`,
      coreConcepts: [
        "Anti-Cheat Systems: Understanding how games detect and prevent cheating through software analysis, behavioral patterns, and machine learning. These systems protect fair competition.",
        "Competitive Integrity: Ensuring that tournament results reflect genuine skill and strategy, not exploits, bugs, or unfair advantages. This is what makes esports credible.",
        "Toxic Behavior Prevention: Creating communities where players can compete intensely without harassment, discrimination, abuse, or threats. Toxicity destroys communities.",
        "Account Security: Protecting accounts from unauthorized access and ensuring that achievements belong to legitimate players, not account thieves or hackers.",
        "Professional Standards: Maintaining high ethical standards in professional gaming and esports competitions, including substance abuse policies and conduct rules."
      ],
      realWorldExamples: [
        "Good Example: Professional esports organizations implementing strict anti-cheat policies and permanently banning players caught cheating, protecting tournament integrity and sending a clear message.",
        "Bad Example: Players using aimbots or wallhacks in competitive shooters, gaining unfair advantages and ruining the experience for honest competitors who trained legitimately.",
        "Good Example: Gaming communities implementing comprehensive reporting systems and active moderators who work to reduce toxic behavior, harassment, and discrimination.",
        "Bad Example: Professional players caught using performance-enhancing substances during tournaments, violating fairplay principles and damaging the credibility of esports.",
        "Good Example: Game developers investing heavily in anti-cheat technology to detect and prevent cheating in real-time, protecting the competitive environment.",
        "Bad Example: Exploiting game bugs intentionally in competitive matches to gain unfair advantages, then claiming it's 'just part of the game'.",
        "Good Example: Players showing sportsmanship after losses, congratulating winners, and maintaining respect even in intense competition.",
        "Bad Example: Harassment and threats directed at opponents, creating toxic environments that drive good players away from the community."
      ],
      bestPractices: [
        "For Players: Learn the rules thoroughly, refuse to use cheats or exploits, report suspicious behavior immediately, treat opponents with respect, and understand that your reputation is built on integrity.",
        "For Streamers: Set clear community standards, moderate chat actively, refuse to play with cheaters, report violations, and use your platform to promote fairplay.",
        "For Tournament Organizers: Implement strict anti-cheat policies, conduct regular testing, investigate allegations thoroughly, enforce consequences consistently, and maintain transparent communication.",
        "For Game Developers: Invest in anti-cheat technology, monitor for exploits, patch vulnerabilities quickly, educate players about fairplay, and create reporting systems.",
        "For Community Leaders: Promote fairplay actively, create welcoming environments, address toxic behavior immediately, celebrate honest achievements, and mentor new players about integrity."
      ],
      commonMistakes: [
        "Using cheats 'just for fun' in casual games - this normalizes cheating and makes it easier to cheat in competitive settings.",
        "Ignoring toxic behavior in chat - silence enables harassment to continue and drives good players away from the community.",
        "Exploiting bugs 'because they exist' - bugs are unintended; exploiting them deliberately violates fairplay even if technically possible.",
        "Not reporting suspicious players - reporting is how communities protect themselves and maintain integrity.",
        "Thinking professional cheating 'doesn't affect casual players' - it does; it damages the entire community and the game's reputation.",
        "Blaming lag or connection issues for suspicious behavior - while these happen, repeated suspicious patterns indicate cheating.",
        "Not understanding that account security is your responsibility - protect your account to prevent unauthorized access and cheating."
      ],
      whyItMatters: `Gaming fairplay matters because esports is growing into a legitimate professional industry with career opportunities, sponsorships, and life-changing prize pools. When fairplay is compromised, the entire industry loses credibility. Fairplay ensures that professional players are recognized for their genuine skill and dedication, not for cheating. It protects the gaming community by creating safe, welcoming environments where everyone can compete honestly.

Without fairplay, gaming becomes a wasteland where cheaters dominate, honest players quit in frustration, and the industry loses its moral authority. When we protect gaming fairplay, we're protecting the future of esports as a legitimate sport and the dreams of millions of players worldwide.`
    },
    quiz: [
      {
        id: "g1",
        question: "What is the primary concern with cheating in esports?",
        options: [
          "It makes the game less fun",
          "It undermines competitive integrity and damages the credibility of professional esports",
          "It's only a problem in casual games",
          "It doesn't really matter"
        ],
        correctAnswer: 1,
        explanation: "Cheating in esports undermines competitive integrity, damages the credibility of the entire industry, and makes tournament results meaningless. This is why professional organizations have strict anti-cheat policies."
      },
      {
        id: "g2",
        question: "What should you do if you suspect a player is cheating?",
        options: [
          "Ignore it and move on",
          "Cheat back to level the playing field",
          "Report it through official channels",
          "Harass the player publicly"
        ],
        correctAnswer: 2,
        explanation: "Reporting suspected cheating through official channels allows game developers and tournament organizers to investigate and protect the integrity of the game. This is how communities maintain fairness."
      },
      {
        id: "g3",
        question: "Why is toxic behavior a fairplay issue?",
        options: [
          "It's not related to fairplay",
          "It only affects sensitive players",
          "It creates hostile environments that drive good players away and undermines community health",
          "It's just part of competitive gaming"
        ],
        correctAnswer: 2,
        explanation: "Toxic behavior creates hostile environments, drives good players away, and undermines community health. Fairplay includes treating opponents with respect and maintaining welcoming communities."
      },
      {
        id: "g4",
        question: "What is the purpose of anti-cheat systems?",
        options: [
          "To make the game harder",
          "To detect and prevent cheating, protecting competitive integrity",
          "To punish all players",
          "To track player locations"
        ],
        correctAnswer: 1,
        explanation: "Anti-cheat systems detect and prevent cheating using software analysis and behavioral monitoring. They protect competitive integrity and ensure that victories are earned through legitimate skill."
      },
      {
        id: "g5",
        question: "How does fairplay benefit the gaming community?",
        options: [
          "It doesn't provide any benefits",
          "It creates competitive environments where skill is rewarded, communities are welcoming, and the industry maintains credibility",
          "It makes games easier",
          "It eliminates all competition"
        ],
        correctAnswer: 1,
        explanation: "Fairplay creates competitive environments where skill and dedication are rewarded, communities are welcoming and safe, and the gaming industry maintains credibility and legitimacy."
      }
    ]
  },
  {
    id: "business",
    title: "Business Ethics & Fairplay",
    shortTitle: "Business",
    description: "Understand fairplay in business, including honest practices, transparency, and ethical decision-making.",
    image: "/images/business-fairplay.webp",
    icon: "Briefcase",
    color: "#0D7377",
    sections: {
      introduction: `Business fairplay is the foundation of sustainable success, trust, and long-term profitability. It encompasses honest practices, transparent communication, ethical decision-making, fair treatment of employees and customers, and refusing to gain unfair competitive advantages through deception or manipulation. In business, fairplay means competing on the merits of your products and services, not through fraud, bribery, or exploitation.

The business world is increasingly recognizing that fairplay is not just morally right—it's good business. Companies that operate with integrity build trust with customers, attract better talent, maintain stronger relationships with partners, and avoid the devastating consequences of scandals and legal troubles. When fairplay principles are violated in business, the consequences can be catastrophic: legal liability, reputation damage, loss of customer trust, employee departures, and sometimes complete business failure.

Consider this: would you do business with a company you knew was dishonest? Would you work for a company that treated employees unfairly? Would you recommend a company that lied to customers? Fairplay in business is about building the kind of organization that people want to do business with and work for.`,
      coreConcepts: [
        "Honest Practices: Conducting business with integrity, avoiding fraud, misrepresentation, and deception. This includes accurate financial reporting and truthful marketing.",
        "Transparency: Communicating clearly with stakeholders about business practices, financial performance, and potential risks. Transparency builds trust.",
        "Fair Competition: Competing on the merits of your products and services, not through unfair tactics, price-fixing, or sabotage of competitors.",
        "Ethical Treatment: Treating employees fairly with competitive wages, safe working conditions, and respect. Treating customers fairly with quality products and honest pricing.",
        "Accountability: Taking responsibility for mistakes, following through on commitments, and maintaining high standards of conduct."
      ],
      realWorldExamples: [
        "Good Example: Patagonia's commitment to environmental responsibility and fair labor practices, building customer loyalty through genuine ethical commitment.",
        "Bad Example: Enron's massive accounting fraud that destroyed the company, cost employees their pensions, and damaged investor trust across the entire industry.",
        "Good Example: Costco's policy of paying employees well above minimum wage with benefits, resulting in low turnover and high customer satisfaction.",
        "Bad Example: Wells Fargo's fake account scandal where employees created millions of unauthorized accounts to meet sales targets, destroying the company's reputation.",
        "Good Example: TOMS Shoes' transparent supply chain and commitment to fair wages for workers in developing countries.",
        "Bad Example: Volkswagen's emissions cheating scandal where the company deliberately deceived regulators about pollution levels, resulting in billions in fines.",
        "Good Example: Starbucks' commitment to fair trade coffee and transparent sourcing practices.",
        "Bad Example: Companies exploiting labor in developing countries with unfair wages and dangerous working conditions."
      ],
      bestPractices: [
        "For Leaders: Set the tone for ethical behavior from the top, make decisions based on values not just profits, hold yourself and others accountable, and create a culture where fairplay is valued.",
        "For Employees: Follow company policies, report unethical behavior, refuse to participate in dishonest practices, and contribute to a culture of integrity.",
        "For Organizations: Implement clear ethical guidelines, provide ethics training, establish reporting mechanisms, investigate allegations thoroughly, and enforce consequences consistently.",
        "For Customers: Support ethical companies, report dishonest practices, read reviews carefully, and make purchasing decisions based on company values.",
        "For Investors: Research company ethics and governance, support shareholder resolutions on ethical issues, and hold companies accountable for their conduct."
      ],
      commonMistakes: [
        "Thinking 'everyone cuts corners' - this rationalization is how corruption spreads; ethical companies do exist and thrive.",
        "Prioritizing short-term profits over long-term integrity - this leads to scandals, legal problems, and business failure.",
        "Ignoring unethical behavior by colleagues - silence enables further violations and spreads corruption throughout the organization.",
        "Misrepresenting products or services to customers - this destroys trust and creates legal liability.",
        "Exploiting employees through unfair wages or unsafe conditions - this leads to high turnover, low productivity, and legal problems.",
        "Engaging in price-fixing or other anti-competitive practices - this is illegal and damages the entire industry.",
        "Not maintaining financial transparency - this creates suspicion and destroys investor confidence."
      ],
      whyItMatters: `Business fairplay matters because it determines whether companies can build sustainable success. Companies that operate with integrity build trust with customers, attract better talent, maintain stronger relationships with partners, and avoid the devastating consequences of scandals. Fairplay creates markets where the best products and services win, not just the ones backed by deception.

Without fairplay, business becomes a race to the bottom where the most dishonest companies win short-term, but the entire system loses credibility and efficiency. When we protect business fairplay, we're protecting the foundation of a healthy economy and creating opportunities for honest companies to thrive.`
    },
    quiz: [
      {
        id: "b1",
        question: "Why is transparency important in business?",
        options: [
          "It's not important",
          "It builds trust with stakeholders and helps companies maintain credibility",
          "It makes business harder",
          "It only matters for large companies"
        ],
        correctAnswer: 1,
        explanation: "Transparency builds trust with customers, employees, investors, and partners. It helps companies maintain credibility and avoid the devastating consequences of scandals and deception."
      },
      {
        id: "b2",
        question: "What should you do if you witness unethical business practices?",
        options: [
          "Say nothing to protect your job",
          "Report it through official channels or to appropriate authorities",
          "Participate in the unethical practices",
          "Tell your friends but not management"
        ],
        correctAnswer: 1,
        explanation: "Reporting unethical practices is essential to maintaining business integrity. Many companies have whistleblower protections and reporting mechanisms specifically for this purpose."
      },
      {
        id: "b3",
        question: "How does fairplay benefit businesses long-term?",
        options: [
          "It doesn't provide any benefits",
          "It builds trust, attracts better talent, maintains customer loyalty, and avoids legal problems",
          "It makes business less profitable",
          "It only matters for small businesses"
        ],
        correctAnswer: 1,
        explanation: "Fairplay creates sustainable success by building trust, attracting better talent, maintaining customer loyalty, and avoiding the devastating consequences of scandals and legal problems."
      },
      {
        id: "b4",
        question: "What is the difference between fair competition and unfair competition?",
        options: [
          "There is no difference",
          "Fair competition means competing on merits; unfair competition means using deception, fraud, or sabotage",
          "Fair competition is illegal",
          "Unfair competition is always better for business"
        ],
        correctAnswer: 1,
        explanation: "Fair competition means competing on the merits of your products and services. Unfair competition uses deception, fraud, price-fixing, or sabotage—all of which are unethical and often illegal."
      },
      {
        id: "b5",
        question: "Why should companies treat employees fairly?",
        options: [
          "They shouldn't",
          "Fair treatment leads to lower turnover, higher productivity, and a better company culture",
          "It's too expensive",
          "It doesn't make a difference"
        ],
        correctAnswer: 1,
        explanation: "Fair treatment of employees leads to lower turnover, higher productivity, better company culture, and stronger business performance. It's both ethical and good business."
      }
    ]
  },
  {
    id: "education",
    title: "Academic Integrity & Fairplay",
    shortTitle: "Education",
    description: "Learn about fairplay in education, including academic honesty, plagiarism prevention, and ethical learning.",
    image: "/images/education-fairplay.webp",
    icon: "BookMarked",
    color: "#0D7377",
    sections: {
      introduction: `Academic integrity and fairplay in education are about creating learning environments where knowledge is valued, honesty is rewarded, and genuine learning is the goal. Academic fairplay includes refusing to cheat on exams, avoiding plagiarism, completing your own work, respecting intellectual property, and maintaining honest communication with teachers and peers. In education, fairplay means that grades and credentials represent genuine knowledge and effort, not deception.

The purpose of education is to develop knowledge, skills, and character. When fairplay is compromised through cheating or plagiarism, students miss the opportunity to actually learn and develop. They also gain unfair advantages over honest students, undermining the credibility of grades and degrees. When fairplay principles are violated in education, the consequences extend beyond individual students: they damage the reputation of institutions, undermine the value of degrees, and create unfair competition in the job market.

Consider this: if you cheat your way through school, what happens when you get a job and actually need those skills? If you plagiarize your way to a degree, what does that degree actually mean? Academic fairplay is about building genuine knowledge and skills that will serve you throughout your life.`,
      coreConcepts: [
        "Academic Honesty: Completing your own work, not copying from others, and being truthful about your knowledge and effort. This is the foundation of education.",
        "Plagiarism Prevention: Understanding what plagiarism is, properly citing sources, and always giving credit to original authors. Plagiarism is theft of intellectual property.",
        "Exam Integrity: Taking exams honestly without cheating, unauthorized materials, or collaboration when not permitted. Exams measure your actual knowledge.",
        "Intellectual Respect: Respecting the intellectual property of others, understanding copyright, and valuing original ideas and research.",
        "Ethical Communication: Being honest with teachers about your work, asking for help when needed, and maintaining integrity in all academic interactions."
      ],
      realWorldExamples: [
        "Good Example: A student struggling with a subject asking the teacher for help and putting in extra effort to learn the material genuinely.",
        "Bad Example: Students using essay mills to write papers for them, gaining unfair advantages and missing the opportunity to learn.",
        "Good Example: Properly citing all sources in research papers and giving credit to original authors.",
        "Bad Example: Copying paragraphs from websites without citation, claiming others' work as your own.",
        "Good Example: A student admitting they don't understand a concept and asking for clarification rather than pretending to know.",
        "Bad Example: Cheating on exams by using unauthorized materials or copying from classmates.",
        "Good Example: Collaborating with classmates when permitted and clearly indicating each person's contributions.",
        "Bad Example: Submitting the same paper to multiple classes without permission, gaining credit for the same work multiple times."
      ],
      bestPractices: [
        "For Students: Complete your own work, understand the material you're learning, ask for help when needed, properly cite sources, and maintain honesty in all academic interactions.",
        "For Teachers: Clearly communicate expectations about academic integrity, teach proper citation methods, detect and address cheating fairly, and create a culture where honesty is valued.",
        "For Parents: Encourage genuine learning over grades, model integrity in your own life, help your child understand the value of honest effort, and support them when they struggle.",
        "For Schools: Establish clear academic integrity policies, provide education about plagiarism and cheating, implement detection systems, and enforce consequences consistently.",
        "For Peers: Support each other's learning honestly, refuse to help others cheat, report academic dishonesty, and celebrate genuine achievements."
      ],
      commonMistakes: [
        "Thinking 'everyone cheats' - many students maintain integrity; cheating is a choice, not an inevitability.",
        "Not understanding what plagiarism is - plagiarism includes paraphrasing without citation and using others' ideas without credit.",
        "Copying from classmates 'just to check your answer' - this is still cheating and gives you unfair advantages.",
        "Using essay mills or hiring someone to write papers - this is fraud and you're paying for someone to cheat for you.",
        "Not citing sources properly - always give credit to original authors; proper citation is essential.",
        "Thinking academic dishonesty 'doesn't matter' - it damages your education, undermines your degree, and can have legal consequences.",
        "Collaborating when not permitted - understand the rules for each assignment and follow them."
      ],
      whyItMatters: `Academic integrity matters because education is about developing genuine knowledge and skills. When you cheat, you miss the opportunity to actually learn. When you plagiarize, you're stealing others' intellectual property and undermining your own education. Academic fairplay ensures that grades and degrees represent genuine knowledge and effort, making them valuable and meaningful.

Without academic integrity, degrees become meaningless, institutions lose credibility, and the job market becomes unfair for honest graduates. When we protect academic fairplay, we're protecting the value of education and ensuring that honest students are rewarded for their genuine effort and learning.`
    },
    quiz: [
      {
        id: "e1",
        question: "What is plagiarism?",
        options: [
          "Using your own ideas",
          "Using others' work without proper citation or credit",
          "Studying hard for an exam",
          "Asking a teacher for help"
        ],
        correctAnswer: 1,
        explanation: "Plagiarism is using others' work, ideas, or words without proper citation or credit. It's theft of intellectual property and a serious violation of academic integrity."
      },
      {
        id: "e2",
        question: "Why is academic honesty important?",
        options: [
          "It's not important",
          "It ensures that grades represent genuine knowledge, maintains the value of degrees, and develops real skills",
          "It makes school harder",
          "It only matters for college"
        ],
        correctAnswer: 1,
        explanation: "Academic honesty ensures that grades represent genuine knowledge and effort, maintains the value of degrees, and develops real skills that will serve you throughout your life."
      },
      {
        id: "e3",
        question: "What should you do if you don't understand material?",
        options: [
          "Cheat on the exam",
          "Copy from classmates",
          "Ask your teacher for help and put in extra effort to learn",
          "Plagiarize from the internet"
        ],
        correctAnswer: 2,
        explanation: "Asking for help and putting in extra effort is the honest way to learn. Teachers are there to help you understand material, and genuine learning is more valuable than a grade obtained through cheating."
      },
      {
        id: "e4",
        question: "How should you handle sources in research papers?",
        options: [
          "Use them without citation",
          "Paraphrase without giving credit",
          "Properly cite all sources and give credit to original authors",
          "Copy paragraphs and change a few words"
        ],
        correctAnswer: 2,
        explanation: "Always properly cite all sources and give credit to original authors. This is essential to academic integrity and shows respect for others' intellectual property."
      },
      {
        id: "e5",
        question: "What are the consequences of academic dishonesty?",
        options: [
          "There are no consequences",
          "You fail the assignment",
          "Damage to your education, potential disciplinary action, and undermined degree value",
          "Nothing happens"
        ],
        correctAnswer: 2,
        explanation: "Academic dishonesty can result in failing grades, disciplinary action, damaged reputation, and undermined degree value. More importantly, it damages your education and character."
      }
    ]
  },
  {
    id: "general",
    title: "Fairplay in Daily Life",
    shortTitle: "General Life",
    description: "Discover how fairplay principles apply to everyday relationships, work, and personal interactions.",
    image: "/images/general-fairplay.webp",
    icon: "Heart",
    color: "#0D7377",
    sections: {
      introduction: `Fairplay in daily life is about treating people with respect, honesty, and kindness in all your interactions. It encompasses keeping your word, being honest in conversations, treating others as you want to be treated, standing up for those who are treated unfairly, and maintaining integrity even when no one is watching. In daily life, fairplay means that your character is consistent whether people are observing you or not.

Fairplay in personal relationships is the foundation of trust, respect, and genuine connection. When you treat people fairly—keeping promises, being honest, respecting boundaries, and showing empathy—you build relationships that are strong and meaningful. When fairplay principles are violated in daily life through dishonesty, betrayal, or disrespect, relationships are damaged and trust is broken.

Consider this: the people you interact with daily are watching how you treat them. They're learning whether they can trust you, whether you're honest, whether you respect them. Your daily choices about fairplay shape not just your relationships but your character and reputation.`,
      coreConcepts: [
        "Honesty: Being truthful in your words and actions, not deceiving others for personal gain, and maintaining integrity in all interactions.",
        "Respect: Treating others with dignity regardless of their status or differences, listening to their perspectives, and valuing their feelings.",
        "Keeping Promises: Following through on your commitments, being reliable, and understanding that your word reflects your character.",
        "Empathy: Understanding others' perspectives and feelings, showing compassion, and treating others as you want to be treated.",
        "Standing Up for Others: Defending those who are treated unfairly, speaking against injustice, and refusing to participate in bullying or discrimination."
      ],
      realWorldExamples: [
        "Good Example: A friend admitting they made a mistake and apologizing sincerely, showing that they value the relationship more than their pride.",
        "Bad Example: Lying to a friend to avoid consequences, damaging trust and the relationship.",
        "Good Example: Standing up for someone being bullied, even when it's uncomfortable or unpopular.",
        "Bad Example: Staying silent while someone is treated unfairly, enabling the behavior to continue.",
        "Good Example: Keeping a confidence and respecting someone's privacy even when sharing would benefit you.",
        "Bad Example: Spreading rumors or sharing private information to gain social status.",
        "Good Example: Treating service workers with respect and kindness, recognizing their humanity and value.",
        "Bad Example: Being rude or dismissive to people in service positions, treating them as less important."
      ],
      bestPractices: [
        "For Relationships: Be honest, keep your promises, listen actively, show empathy, and address conflicts directly and respectfully.",
        "For Work: Treat colleagues fairly, give credit where it's due, communicate honestly, respect boundaries, and contribute to a positive workplace culture.",
        "For Community: Treat everyone with respect regardless of differences, stand up against injustice, volunteer to help others, and contribute to community well-being.",
        "For Family: Show respect and appreciation, keep promises to family members, communicate honestly, and support each other through challenges.",
        "For Yourself: Maintain integrity even when no one is watching, treat yourself with respect, and make choices that align with your values."
      ],
      commonMistakes: [
        "Thinking fairplay only matters when people are watching - your character is defined by what you do when no one is observing.",
        "Justifying dishonesty as 'just this once' - small compromises of integrity lead to larger ones.",
        "Not standing up for others because it's uncomfortable - silence enables injustice to continue.",
        "Treating people differently based on their status or usefulness to you - everyone deserves respect and fairness.",
        "Breaking promises because circumstances changed - your reliability and word are your reputation.",
        "Gossiping or spreading rumors - this damages others and reflects poorly on your character.",
        "Not apologizing when you're wrong - admitting mistakes shows strength and character, not weakness."
      ],
      whyItMatters: `Fairplay in daily life matters because it determines the kind of person you are and the quality of your relationships. When you treat people fairly, you build trust, respect, and genuine connections. When you maintain integrity even when no one is watching, you develop strong character. Fairplay creates communities where people feel safe, valued, and respected.

Without fairplay in daily life, relationships become shallow and based on manipulation rather than genuine connection. Communities become places of suspicion and conflict rather than trust and cooperation. When we practice fairplay in our daily interactions, we're not just improving our own lives—we're creating a better world for everyone around us.`
    },
    quiz: [
      {
        id: "l1",
        question: "Why is honesty important in daily relationships?",
        options: [
          "It's not important",
          "It builds trust and forms the foundation of genuine relationships",
          "It makes relationships harder",
          "It only matters in professional settings"
        ],
        correctAnswer: 1,
        explanation: "Honesty builds trust and forms the foundation of genuine relationships. When people know they can trust you to be truthful, they feel safe and valued in the relationship."
      },
      {
        id: "l2",
        question: "What should you do if you witness someone being treated unfairly?",
        options: [
          "Say nothing to avoid conflict",
          "Stand up for them and speak against the injustice",
          "Join in the unfair treatment",
          "Tell them privately later"
        ],
        correctAnswer: 1,
        explanation: "Standing up for people who are treated unfairly is essential to fairplay. Silence enables injustice to continue. Speaking up shows courage and character."
      },
      {
        id: "l3",
        question: "How does keeping promises affect your character?",
        options: [
          "It doesn't affect character",
          "It shows that you're unreliable",
          "It demonstrates that people can trust you and reflects your integrity",
          "It makes you less popular"
        ],
        correctAnswer: 2,
        explanation: "Keeping promises demonstrates that people can trust you and reflects your integrity. Your reliability and word are your reputation."
      },
      {
        id: "l4",
        question: "Why should you treat everyone with respect?",
        options: [
          "You shouldn't",
          "Because everyone has value and deserves dignity regardless of their status or differences",
          "Only if they can benefit you",
          "Only if they're important"
        ],
        correctAnswer: 1,
        explanation: "Everyone has inherent value and deserves dignity and respect regardless of their status, background, or differences. Fairplay means treating all people with respect."
      },
      {
        id: "l5",
        question: "What does it mean to maintain integrity when no one is watching?",
        options: [
          "It doesn't matter what you do when no one is watching",
          "Your character is defined by your choices even when no one is observing",
          "You can behave differently when no one is watching",
          "Integrity only matters in public"
        ],
        correctAnswer: 1,
        explanation: "Your character is truly defined by what you do when no one is watching. Maintaining integrity in private shows genuine character, not just public behavior."
      }
    ]
  }
];

export function getTopic(id: string): Topic {
  const topic = topics.find(t => t.id === id);
  if (!topic) {
    throw new Error(`Topic with id ${id} not found`);
  }
  return topic;
}

export function getAllTopics(): Topic[] {
  return topics;
}
