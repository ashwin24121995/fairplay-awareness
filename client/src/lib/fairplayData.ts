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
    image: "/images/sports-fairplay.jpg",
    icon: "Trophy",
    color: "#0D7377",
    sections: {
      introduction: `Sports fairplay is the foundation of competitive integrity and mutual respect. It encompasses not only following the rules but embodying the spirit of honest competition. In sports, fairplay means competing with integrity, respecting opponents, accepting decisions with grace, and refusing to gain unfair advantages through cheating or doping. The importance of fairplay extends beyond individual games—it shapes character, builds trust, and creates a culture where excellence is achieved through legitimate effort. When fairplay principles are violated, the entire foundation of sport crumbles, undermining the achievements of honest competitors and damaging the sport's credibility globally.`,
      coreConcepts: [
        "Rule Adherence: Understanding and following the established rules of the game, not just the letter but the spirit of competition.",
        "Anti-Cheating: Refusing to use illegal tactics, equipment manipulation, or deception to gain advantages over opponents.",
        "Doping Prevention: Understanding the dangers of performance-enhancing drugs and committing to natural competition.",
        "Sportsmanship: Showing respect to opponents, officials, and the game itself through gracious behavior in victory and defeat.",
        "Fair Competition: Competing on equal terms, ensuring all athletes have similar opportunities to succeed based on skill and effort."
      ],
      realWorldExamples: [
        "Good Example: Serena Williams' sportsmanship in tennis - acknowledging good shots from opponents and respecting umpire decisions even when disagreeing.",
        "Bad Example: The 2016 Rio Olympics doping scandal where Russian athletes were caught using performance-enhancing drugs, undermining fair competition.",
        "Good Example: Cristiano Ronaldo helping up fallen opponents during matches, showing respect regardless of competition intensity.",
        "Bad Example: Match-fixing in cricket where players deliberately underperform to benefit gambling syndicates, destroying the integrity of the sport.",
        "Good Example: Wheelchair athletes competing with determination and inspiring millions while maintaining the highest standards of fairplay.",
        "Bad Example: Using illegal equipment modifications in cycling to gain aerodynamic advantages, as seen in various professional cycling scandals."
      ],
      bestPractices: [
        "For Athletes: Train hard through legitimate means, learn the rules thoroughly, respect all participants, and report suspicious activities.",
        "For Coaches: Emphasize fairplay in training, refuse to teach illegal techniques, and create a culture where integrity is valued over winning at any cost.",
        "For Officials: Make consistent, fair decisions, communicate clearly with players, and maintain the highest standards of impartiality.",
        "For Organizations: Implement strict anti-doping policies, conduct regular testing, educate athletes about fairplay, and enforce consequences for violations.",
        "For Fans: Support fair competition, criticize cheating, celebrate honest achievements, and refuse to support athletes or teams that violate fairplay principles."
      ],
      commonMistakes: [
        "Assuming minor rule violations don't matter - every breach of fairplay undermines the entire system.",
        "Turning a blind eye to teammates' cheating - silence enables further violations and spreads the culture of dishonesty.",
        "Prioritizing winning over integrity - short-term victory through unfair means creates long-term damage to reputation and character.",
        "Not understanding the health dangers of doping - performance-enhancing drugs cause serious health problems that can be permanent.",
        "Blaming external pressure for unfair play - personal responsibility for ethical choices remains regardless of circumstances."
      ],
      whyItMatters: `Fairplay in sports matters because it determines whether competition is meaningful. When athletes compete fairly, their achievements represent genuine excellence and inspire others. Fairplay builds character in young athletes, teaching them that success through integrity is more valuable than victory through cheating. It creates trust between competitors and fans, making sports a force for positive social change. Without fairplay, sports becomes a hollow spectacle where records mean nothing and achievements are tainted. The global sports community depends on fairplay to maintain credibility and continue inspiring billions of people worldwide.`
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
        explanation: "Fairplay ensures that competition is based on skill, effort, and integrity rather than cheating or unfair advantages. This maintains the credibility and meaning of sports."
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
        explanation: "Using performance-enhancing drugs is a violation of fairplay. Fairplay requires competing through legitimate means and refusing to use substances that provide unfair advantages."
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
        explanation: "Reporting cheating is essential to maintaining fairplay. Silence enables further violations and spreads a culture of dishonesty. Integrity requires taking action."
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
        explanation: "Fairplay teaches young athletes that character, integrity, and honest effort are more valuable than winning through unfair means. This shapes their values for life."
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
        explanation: "Doping involves using performance-enhancing drugs to gain unfair advantages. It violates fairplay principles and is illegal in competitive sports."
      }
    ]
  },
  {
    id: "gaming",
    title: "Gaming & Esports Fairplay",
    shortTitle: "Gaming",
    description: "Explore fairplay in gaming and esports, including anti-cheat systems, competitive integrity, and community standards.",
    image: "/images/gaming-fairplay.jpg",
    icon: "Gamepad2",
    color: "#0D7377",
    sections: {
      introduction: `Gaming fairplay represents the commitment to honest competition in digital environments. As esports has grown into a multi-billion dollar industry with professional leagues and massive audiences, fairplay has become increasingly critical. Gaming fairplay includes preventing cheating through hacking and exploits, maintaining competitive integrity in tournaments, preventing toxic behavior that undermines community health, and ensuring that victories are earned through legitimate skill and strategy. The gaming community has developed sophisticated anti-cheat systems and community standards to protect the integrity of competition. When fairplay is compromised in gaming, it not only affects individual matches but can destroy entire gaming communities and undermine the credibility of professional esports.`,
      coreConcepts: [
        "Anti-Cheat Systems: Understanding how games detect and prevent cheating through software and behavioral analysis.",
        "Competitive Integrity: Ensuring that tournament results reflect genuine skill and strategy, not exploits or unfair advantages.",
        "Toxic Behavior Prevention: Creating communities where players can compete intensely without harassment, discrimination, or abuse.",
        "Account Security: Protecting accounts from unauthorized access and ensuring that achievements belong to legitimate players.",
        "Professional Standards: Maintaining high ethical standards in professional gaming and esports competitions."
      ],
      realWorldExamples: [
        "Good Example: Professional esports organizations implementing strict anti-cheat policies and banning players caught cheating, protecting tournament integrity.",
        "Bad Example: Players using aimbots or wallhacks in competitive shooters, gaining unfair advantages and ruining the experience for honest competitors.",
        "Good Example: Gaming communities implementing reporting systems and moderators who actively work to reduce toxic behavior and harassment.",
        "Bad Example: Professional players caught using performance-enhancing substances during tournaments, violating fairplay principles.",
        "Good Example: Game developers investing heavily in anti-cheat technology to detect and prevent cheating in real-time.",
        "Bad Example: Exploiting game bugs intentionally in competitive matches to gain unfair advantages over opponents."
      ],
      bestPractices: [
        "For Players: Learn the rules, refuse to use cheats or exploits, report suspicious behavior, and treat opponents with respect.",
        "For Game Developers: Invest in robust anti-cheat systems, regularly update security, and create transparent reporting mechanisms.",
        "For Tournament Organizers: Implement strict fairplay policies, conduct regular audits, and enforce consequences for violations.",
        "For Community Leaders: Foster positive communities through moderation, celebrate fair play, and address toxic behavior promptly.",
        "For Sponsors: Support organizations that prioritize fairplay and refuse to sponsor players or teams with integrity violations."
      ],
      commonMistakes: [
        "Thinking minor exploits don't matter - even small unfair advantages undermine competitive integrity.",
        "Tolerating toxic behavior as normal in gaming - harassment drives away good players and damages community health.",
        "Ignoring account security - weak passwords and shared accounts compromise fairplay and personal safety.",
        "Assuming cheating is undetectable - modern anti-cheat systems are sophisticated and catch most cheaters eventually.",
        "Prioritizing entertainment over integrity - long-term success requires building trust through fairplay, not short-term spectacle."
      ],
      whyItMatters: `Fairplay in gaming matters because it determines whether competition is meaningful and communities are healthy. Professional esports is growing rapidly, and fairplay is essential to its credibility and sustainability. When fairplay is maintained, gaming communities thrive, players develop genuine skills, and achievements are celebrated. When fairplay is compromised, communities become toxic, trust erodes, and the entire ecosystem suffers. Gaming fairplay also teaches millions of young players about integrity, teamwork, and ethical competition. The values learned in gaming communities often extend to other areas of life, making fairplay in gaming a matter of global importance.`
    },
    quiz: [
      {
        id: "g1",
        question: "What is the primary goal of anti-cheat systems in gaming?",
        options: [
          "To make games more difficult",
          "To detect and prevent cheating to maintain competitive integrity",
          "To limit player freedom",
          "To increase game sales"
        ],
        correctAnswer: 1,
        explanation: "Anti-cheat systems are designed to detect and prevent cheating, ensuring that competition is fair and victories are earned through legitimate skill."
      },
      {
        id: "g2",
        question: "Which behavior violates fairplay in gaming?",
        options: [
          "Playing competitively and trying to win",
          "Using game exploits to gain unfair advantages",
          "Practicing to improve skills",
          "Studying opponent strategies"
        ],
        correctAnswer: 1,
        explanation: "Using exploits to gain unfair advantages violates fairplay. Legitimate competition involves skill development and strategy, not cheating."
      },
      {
        id: "g3",
        question: "How can gaming communities maintain fairplay?",
        options: [
          "By removing all rules",
          "By implementing reporting systems, moderation, and enforcing consequences for violations",
          "By allowing any behavior",
          "By ignoring toxic behavior"
        ],
        correctAnswer: 1,
        explanation: "Strong communities maintain fairplay through clear rules, active moderation, transparent reporting systems, and consistent enforcement of consequences."
      },
      {
        id: "g4",
        question: "What is toxic behavior in gaming?",
        options: [
          "Playing well and winning",
          "Harassment, discrimination, and abuse that undermines community health",
          "Using advanced strategies",
          "Practicing regularly"
        ],
        correctAnswer: 1,
        explanation: "Toxic behavior includes harassment, discrimination, and abuse. It undermines community health and drives away good players."
      },
      {
        id: "g5",
        question: "Why is account security important for fairplay?",
        options: [
          "It doesn't affect fairplay",
          "It ensures that achievements belong to legitimate players and prevents unauthorized access",
          "It makes games more expensive",
          "It reduces player freedom"
        ],
        correctAnswer: 1,
        explanation: "Account security ensures that achievements and rankings belong to legitimate players. Compromised accounts undermine fairplay and competitive integrity."
      }
    ]
  },
  {
    id: "business",
    title: "Business & Workplace Fairplay",
    shortTitle: "Business",
    description: "Understand ethical business practices, fair employee treatment, honest competition, and corporate responsibility.",
    image: "/images/business-fairplay.jpg",
    icon: "Briefcase",
    color: "#0D7377",
    sections: {
      introduction: `Business fairplay is the foundation of sustainable economic growth and healthy organizations. It encompasses ethical business practices, fair treatment of employees, honest competition with other companies, respect for stakeholders, and corporate responsibility to society. When businesses operate with fairplay principles, they build trust with customers, attract talented employees, create sustainable competitive advantages, and contribute positively to society. Conversely, when businesses compromise fairplay through corruption, exploitation, or deception, they damage their reputation, face legal consequences, harm employees and communities, and ultimately undermine their own long-term success. Modern consumers and investors increasingly demand fairplay from businesses, making ethical conduct not just morally right but economically essential.`,
      coreConcepts: [
        "Ethical Business Practices: Conducting business with honesty, transparency, and adherence to laws and regulations.",
        "Fair Employee Treatment: Providing fair wages, safe working conditions, equal opportunities, and respect for all employees.",
        "Honest Competition: Competing on merit, innovation, and quality rather than through deception or unfair tactics.",
        "Stakeholder Respect: Considering the interests of employees, customers, suppliers, communities, and shareholders.",
        "Corporate Responsibility: Using business success to contribute positively to society and environmental sustainability."
      ],
      realWorldExamples: [
        "Good Example: Patagonia's commitment to environmental sustainability and fair labor practices, building a brand trusted by conscious consumers.",
        "Bad Example: Volkswagen's emissions scandal where the company deliberately deceived regulators about pollution levels, damaging trust and facing billions in fines.",
        "Good Example: Ben & Jerry's focus on fair trade sourcing and social justice causes, aligning business practices with ethical values.",
        "Bad Example: Fast fashion companies exploiting workers in developing countries with low wages and unsafe conditions to maximize profits.",
        "Good Example: Microsoft's commitment to diversity, inclusion, and fair compensation, attracting top talent and improving innovation.",
        "Bad Example: Enron's accounting fraud that destroyed shareholder value and employee pensions while executives enriched themselves."
      ],
      bestPractices: [
        "For Business Leaders: Establish clear ethical standards, lead by example, hold employees accountable, and prioritize long-term sustainability over short-term gains.",
        "For Employees: Report unethical behavior through proper channels, refuse to participate in dishonest practices, and support colleagues who speak up.",
        "For Investors: Support companies with strong fairplay practices, divest from companies with ethical violations, and hold leadership accountable.",
        "For Customers: Research company practices, support ethical businesses, and hold companies accountable through purchasing decisions.",
        "For Regulators: Enforce fairplay standards, investigate violations, and create incentives for ethical business conduct."
      ],
      commonMistakes: [
        "Assuming ethical conduct is optional - fairplay is essential for long-term business success and stakeholder trust.",
        "Prioritizing short-term profits over long-term sustainability - ethical conduct creates lasting competitive advantages.",
        "Ignoring employee concerns - fair treatment of employees improves retention, productivity, and innovation.",
        "Competing through deception rather than innovation - honest competition drives genuine improvement and benefits consumers.",
        "Externalizing costs to society - environmental and social damage eventually becomes a business liability."
      ],
      whyItMatters: `Business fairplay matters because it determines whether economies are healthy and societies prosper. When businesses operate fairly, they create jobs, innovate, and contribute to community well-being. When businesses compromise fairplay, they damage trust, exploit workers and communities, and undermine economic stability. Fairplay in business also shapes values in society—young people learn from business leaders whether integrity is important. The global economy increasingly rewards businesses that prioritize fairplay, making ethical conduct not just morally right but economically essential for long-term success.`
    },
    quiz: [
      {
        id: "b1",
        question: "What is the primary benefit of ethical business practices?",
        options: [
          "Reducing profits",
          "Building trust with stakeholders and creating sustainable competitive advantages",
          "Making business more complicated",
          "Limiting growth opportunities"
        ],
        correctAnswer: 1,
        explanation: "Ethical business practices build trust with customers, employees, and investors, creating sustainable competitive advantages and long-term success."
      },
      {
        id: "b2",
        question: "Which practice violates business fairplay?",
        options: [
          "Competing on innovation and quality",
          "Providing fair wages and safe working conditions",
          "Deliberately deceiving customers about product quality",
          "Investing in employee development"
        ],
        correctAnswer: 2,
        explanation: "Deceiving customers violates fairplay and business ethics. Honest competition is based on genuine product quality and innovation."
      },
      {
        id: "b3",
        question: "How does fair employee treatment benefit businesses?",
        options: [
          "It reduces productivity",
          "It increases costs without benefits",
          "It improves retention, productivity, innovation, and attracts talented employees",
          "It has no impact on business performance"
        ],
        correctAnswer: 2,
        explanation: "Fair treatment of employees improves retention, increases productivity, drives innovation, and helps attract top talent—all critical for business success."
      },
      {
        id: "b4",
        question: "What is corporate responsibility?",
        options: [
          "Only making profits for shareholders",
          "Using business success to contribute positively to society and environment",
          "Ignoring community concerns",
          "Maximizing short-term gains at any cost"
        ],
        correctAnswer: 1,
        explanation: "Corporate responsibility means using business success to contribute positively to society and the environment while maintaining profitability."
      },
      {
        id: "b5",
        question: "Why do modern consumers increasingly demand fairplay from businesses?",
        options: [
          "They don't care about ethics",
          "They want to harm businesses",
          "They recognize that ethical businesses create better products, treat employees fairly, and contribute positively to society",
          "They are forced by the government"
        ],
        correctAnswer: 2,
        explanation: "Consumers increasingly recognize that ethical businesses create better products, treat employees fairly, and contribute positively to society. This alignment of values drives purchasing decisions."
      }
    ]
  },
  {
    id: "education",
    title: "Education & Academic Fairplay",
    shortTitle: "Education",
    description: "Learn about academic integrity, plagiarism prevention, intellectual property respect, and fair assessment practices.",
    image: "/images/education-fairplay.jpg",
    icon: "Globe",
    color: "#0D7377",
    sections: {
      introduction: `Academic fairplay is the foundation of meaningful education and intellectual development. It encompasses academic integrity (doing your own work), plagiarism prevention (respecting others' intellectual property), fair assessment practices (evaluating students honestly), and creating learning environments where all students have equal opportunities to succeed. When academic fairplay is maintained, education becomes transformative—students develop genuine knowledge, skills, and character. When academic fairplay is compromised through cheating and plagiarism, education becomes meaningless. Students who cheat deprive themselves of learning, damage their own development, and undermine the credibility of their qualifications. Academic institutions that tolerate unfairness damage their reputation and fail their mission to educate. In an increasingly knowledge-based economy, academic fairplay determines whether education serves its purpose of developing capable, ethical citizens.`,
      coreConcepts: [
        "Academic Integrity: Doing your own work, citing sources properly, and being honest in all academic endeavors.",
        "Plagiarism Prevention: Understanding what constitutes plagiarism and committing to original work and proper attribution.",
        "Intellectual Property Respect: Recognizing and respecting the intellectual property rights of authors, researchers, and creators.",
        "Fair Assessment: Evaluating students based on their genuine understanding and effort, not on cheating or favoritism.",
        "Ethical Research: Conducting research with honesty, transparency, and respect for research ethics and human subjects."
      ],
      realWorldExamples: [
        "Good Example: Students properly citing sources in research papers, demonstrating respect for intellectual property and academic integrity.",
        "Bad Example: Students submitting purchased essays or using AI to write assignments without understanding the material or proper attribution.",
        "Good Example: Professors using plagiarism detection tools and having honest conversations with students about academic integrity.",
        "Bad Example: Teachers showing favoritism in grading, giving higher marks to certain students regardless of actual performance.",
        "Good Example: Universities investigating academic misconduct thoroughly and enforcing consistent consequences for violations.",
        "Bad Example: Researchers fabricating data or selectively reporting results to support predetermined conclusions."
      ],
      bestPractices: [
        "For Students: Understand academic integrity policies, do your own work, cite sources properly, ask for help when needed, and report cheating.",
        "For Teachers: Teach academic integrity explicitly, use plagiarism detection tools, grade fairly and consistently, and address violations promptly.",
        "For Institutions: Establish clear academic integrity policies, provide training for students and faculty, investigate violations thoroughly, and enforce consequences.",
        "For Parents: Emphasize the importance of academic integrity, support honest effort over grades, and model ethical behavior.",
        "For Researchers: Follow research ethics protocols, report findings honestly, acknowledge limitations, and respect intellectual property."
      ],
      commonMistakes: [
        "Thinking academic dishonesty is victimless - it harms the cheater most by depriving them of learning and damaging their character.",
        "Assuming plagiarism is only about copying text - failing to cite sources or paraphrasing without attribution also constitutes plagiarism.",
        "Believing grades are more important than learning - grades are meaningless without genuine understanding and skill development.",
        "Ignoring academic misconduct - silence enables further violations and undermines institutional integrity.",
        "Not understanding proper citation - learning citation formats is essential for respecting intellectual property and avoiding plagiarism."
      ],
      whyItMatters: `Academic fairplay matters because education is the foundation of personal development and societal progress. When academic fairplay is maintained, education transforms individuals and societies. Students develop genuine knowledge, skills, critical thinking, and character. Institutions earn credibility and trust. Credentials have meaning and value. When academic fairplay is compromised, education becomes meaningless—students don't learn, institutions lose credibility, and society loses the benefits of genuine education. In an increasingly knowledge-based economy where credentials determine opportunities, academic fairplay is essential for both individual success and societal well-being.`
    },
    quiz: [
      {
        id: "e1",
        question: "What is academic integrity?",
        options: [
          "Getting the highest grades possible",
          "Doing your own work, citing sources properly, and being honest in all academic endeavors",
          "Copying from successful students",
          "Using any means necessary to pass exams"
        ],
        correctAnswer: 1,
        explanation: "Academic integrity means doing your own work, properly citing sources, and being honest in all academic endeavors. It's the foundation of meaningful education."
      },
      {
        id: "e2",
        question: "What constitutes plagiarism?",
        options: [
          "Only copying text word-for-word without quotation marks",
          "Paraphrasing without citation, copying without quotation marks, and submitting others' work as your own",
          "Using any source material",
          "Writing in your own words"
        ],
        correctAnswer: 1,
        explanation: "Plagiarism includes copying without quotation marks, paraphrasing without citation, and submitting others' work as your own. Proper attribution is essential."
      },
      {
        id: "e3",
        question: "How does cheating harm the cheater?",
        options: [
          "It doesn't harm them",
          "It only affects their grades",
          "It deprives them of learning and damages their character development",
          "It has no long-term consequences"
        ],
        correctAnswer: 2,
        explanation: "Cheating deprives students of genuine learning and damages their character development. This harm extends far beyond grades to their future success and integrity."
      },
      {
        id: "e4",
        question: "What is fair assessment in education?",
        options: [
          "Giving all students the same grade",
          "Evaluating students based on genuine understanding and effort, without favoritism or cheating",
          "Making exams as difficult as possible",
          "Grading based on student popularity"
        ],
        correctAnswer: 1,
        explanation: "Fair assessment means evaluating students based on their genuine understanding and effort, without favoritism, cheating, or other unfair practices."
      },
      {
        id: "e5",
        question: "Why is proper citation important?",
        options: [
          "It's just a formality",
          "It respects intellectual property rights and demonstrates academic integrity",
          "It makes papers longer",
          "It's only needed for direct quotes"
        ],
        correctAnswer: 1,
        explanation: "Proper citation respects intellectual property rights, demonstrates academic integrity, and allows readers to verify and build upon sources."
      }
    ]
  },
  {
    id: "general-life",
    title: "General Life Fairplay",
    shortTitle: "General Life",
    description: "Explore fairplay in everyday life, including honesty, respect for others' rights, fair transactions, and social responsibility.",
    image: "/images/general-life.jpg",
    icon: "BookOpen",
    color: "#0D7377",
    sections: {
      introduction: `Fairplay in general life is about applying ethical principles to everyday interactions and decisions. It encompasses everyday honesty (keeping promises, telling the truth), respect for others' rights (treating people fairly regardless of differences), fair transactions (honest dealing in commerce), empathy and compassion (understanding others' perspectives), and social responsibility (contributing positively to communities). When fairplay principles guide daily life, communities become places where people trust each other, cooperation flourishes, and everyone benefits. Conversely, when fairplay is absent, communities become places of suspicion, conflict, and suffering. Fairplay in everyday life is not just about following rules—it's about developing character, building meaningful relationships, and creating communities where everyone can thrive. These principles, learned and practiced daily, shape individuals, families, organizations, and ultimately entire societies.`,
      coreConcepts: [
        "Everyday Honesty: Keeping promises, telling the truth, and being reliable in all interactions.",
        "Respect for Others' Rights: Treating all people fairly regardless of differences, protecting their dignity and autonomy.",
        "Fair Transactions: Being honest in commerce, honoring agreements, and treating business partners fairly.",
        "Empathy and Compassion: Understanding others' perspectives, showing kindness, and helping those in need.",
        "Social Responsibility: Contributing positively to communities, respecting the environment, and considering impacts on others."
      ],
      realWorldExamples: [
        "Good Example: A shopkeeper giving correct change and treating all customers with equal respect and kindness.",
        "Bad Example: Deliberately overcharging customers or providing inferior products to different groups.",
        "Good Example: A neighbor helping an elderly person with yard work without expecting payment, showing compassion and community responsibility.",
        "Bad Example: Spreading rumors or gossip that damages someone's reputation and relationships.",
        "Good Example: A person returning a lost wallet with all contents intact, demonstrating honesty and integrity.",
        "Bad Example: Cutting in line, taking more than your share of resources, or disrespecting others' time and space."
      ],
      bestPractices: [
        "For Individuals: Keep your promises, tell the truth, treat others with respect, and consider impacts of your actions on others.",
        "For Families: Model fairplay behavior, teach children about honesty and respect, resolve conflicts fairly, and support each other.",
        "For Communities: Create inclusive environments, address unfair treatment, support vulnerable members, and work together for common good.",
        "For Organizations: Establish fair policies, treat all members equally, address discrimination, and contribute to community well-being.",
        "For Society: Support fair institutions, advocate for justice, respect diversity, and work toward creating equitable systems."
      ],
      commonMistakes: [
        "Assuming fairplay in everyday life doesn't matter - small acts of dishonesty accumulate and damage trust and communities.",
        "Treating fairplay as only applying to formal settings - ethical principles apply to all interactions, formal and informal.",
        "Showing fairplay only to people we like - genuine fairplay means treating all people with respect and dignity.",
        "Ignoring systemic unfairness - fairplay requires addressing not just individual dishonesty but also unfair systems and structures.",
        "Believing one person can't make a difference - individual fairplay contributes to cultural change and inspires others."
      ],
      whyItMatters: `Fairplay in everyday life matters because it determines whether communities are places where people can thrive. When fairplay principles guide daily interactions, trust develops, cooperation flourishes, and everyone benefits. When fairplay is absent, communities become places of suspicion, conflict, and suffering. Fairplay in everyday life also shapes character—the habits we develop through daily interactions become who we are. Children who grow up in communities where fairplay is practiced develop into ethical adults. Fairplay in general life is the foundation of all other fairplay principles. Without everyday honesty, respect, and compassion, fairplay in sports, business, and education becomes impossible. By practicing fairplay in daily life, we create the character, relationships, and communities that make all other fairplay possible.`
    },
    quiz: [
      {
        id: "l1",
        question: "What does fairplay in everyday life include?",
        options: [
          "Only following formal rules",
          "Honesty, respect for others' rights, fair transactions, empathy, and social responsibility",
          "Only being fair to people we like",
          "Ignoring systemic unfairness"
        ],
        correctAnswer: 1,
        explanation: "Fairplay in everyday life encompasses honesty, respect for all people, fair transactions, empathy, and social responsibility in all interactions."
      },
      {
        id: "l2",
        question: "How does everyday honesty contribute to community well-being?",
        options: [
          "It doesn't affect communities",
          "It builds trust, enables cooperation, and creates environments where people can thrive",
          "It makes life more complicated",
          "It only benefits the honest person"
        ],
        correctAnswer: 1,
        explanation: "Everyday honesty builds trust between community members, enables cooperation, and creates environments where everyone can thrive and feel safe."
      },
      {
        id: "l3",
        question: "What is social responsibility?",
        options: [
          "Only the government's job",
          "Contributing positively to communities, respecting the environment, and considering impacts on others",
          "Ignoring community problems",
          "Only helping people we know"
        ],
        correctAnswer: 1,
        explanation: "Social responsibility means contributing positively to communities, respecting the environment, and considering how our actions affect others."
      },
      {
        id: "l4",
        question: "Why is empathy important for fairplay?",
        options: [
          "It's not important",
          "It helps us understand others' perspectives and treat them with compassion and respect",
          "It makes us weak",
          "It only applies to close relationships"
        ],
        correctAnswer: 1,
        explanation: "Empathy helps us understand others' perspectives and experiences, enabling us to treat all people with compassion, respect, and fairness."
      },
      {
        id: "l5",
        question: "How can individuals contribute to fairplay in society?",
        options: [
          "They can't make a difference",
          "By practicing fairplay in daily interactions, modeling ethical behavior, and inspiring others",
          "Only through formal institutions",
          "By ignoring systemic problems"
        ],
        correctAnswer: 1,
        explanation: "Individuals contribute to fairplay by practicing it in daily interactions, modeling ethical behavior, and inspiring others through their example."
      }
    ]
  }
];

export function getTopic(id: string): Topic | undefined {
  return topics.find(t => t.id === id);
}

export function getAllTopics(): Topic[] {
  return topics;
}
