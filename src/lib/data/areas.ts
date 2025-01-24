import type { Area } from "../model/Area";

export const areas: Area[] = [
    {
        uid: "health-fitness",
        name: "Health and Fitness",
        description: "Nutrition & Diet, Exercise & Fitness, Overall Healthcare, Energy Management, Rest/Sleep Quality.",
        assessment: [
            "Do you feel energized and physically strong in your daily activities?",
            "Are you consistent in exercising and maintaining a healthy diet?",
            "Have you prioritized regular health checkups and preventive care?",
            "Are you getting enough rest and sleep to support your body’s needs?",
            "Are there any physical discomforts or symptoms you’ve been ignoring?",
        ],
        sample_statements: [
            "I feel vibrant and energetic, fueled by a balanced diet and regular exercise.",
            "My body is strong and flexible, supporting me in all of life’s activities.",
            "I maintain a healthy weight and feel confident in my appearance.",
            "I prioritize preventative healthcare and consistently make choices that nurture my body.",
            "I wake up each day feeling well-rested, ready to take on challenges with enthusiasm.",
        ],
        prompt_questions: [
            "How do you see yourself being at your optimal health and vitality?",
            "What habits could you adopt to enhance your physical well-being?",
            "What motivates you to prioritize your health?",
            "How can you improve your nutrition?",
            "What activities make you feel energized and alive?",
            "What physical goals (e.g., running a marathon, hiking a mountain) excite you the most?",
            "If you could change one thing about your health or lifestyle, what would it be?",
            "How would you feel waking up every morning with vibrant energy and strength?",
            "What new activity or sport would you love to try to challenge your body?",
        ],
    },
    {
        uid: "emotional-well-being",
        name: "Emotional Well-Being",
        description: "Stress Management, Emotional Resilience, Self-Care Practices, Coping with Anxiety/Depression, Therapy & Mental Wellness Resources.",
        assessment: [
            "How often do you feel overwhelmed, stressed, or emotionally drained?",
            "Are you regularly practicing self-care or stress-management techniques?",
            "How well are you coping with challenges or setbacks in your life?",
            "Do you have someone to talk to about your emotions or struggles?",
            "What habits or practices could help you improve your emotional well-being?",
        ],
        sample_statements: [
            "I navigate stress with calm and clarity, maintaining peace of mind in all situations.",
            "I prioritize self-care, setting boundaries that protect my emotional well-being.",
            "I build resilience, bouncing back quickly from setbacks with a positive attitude.",
            "I embrace vulnerability and authenticity, fostering deeper connections with others.",
            "I invest in mental wellness practices, feeling balanced and optimistic.",
        ],
        prompt_questions: [
            "How would your life change if you experienced daily peace of mind and emotional resilience?",
            "What practices or habits would make you feel consistently balanced and centered?",
            "What could you achieve if stress or fear no longer held you back?",
            "How would you describe your ideal emotional state in a difficult situation?",
            "What does a day filled with joy, gratitude, and calmness look like to you?",
        ],
    },
    {
        uid: "purpose-spirituality",
        name: "Purpose and Spirituality",
        description: "Mindfulness Practices (Meditation, Journaling), Religious/Spiritual Life, Seeking Purpose & Meaning, Legacy & Contribution to the World, Gratitude Practices.",
        assessment: [
            "Do you feel aligned with your values and life purpose?",
            "How often do you engage in practices like meditation or prayer that nurture your spirituality?",
            "Are you making a positive impact on others or contributing to something greater?",
            "Do you feel a sense of gratitude and inner peace in your daily life?",
            "Are there areas in your life where you feel disconnected or lacking meaning?",
        ],
        sample_statements: [
            "I feel deeply connected to my spirituality, aligning my actions with my values.",
            "I find purpose and meaning in my life, contributing to something greater than myself.",
            "I practice mindfulness daily, cultivating inner peace and clarity.",
            "I leave a lasting legacy, positively impacting the lives of those around me.",
            "I live with gratitude, appreciating life’s blessings and challenges",
        ],
        prompt_questions: [
            "What would a deeply fulfilling and spiritually connected life look like for you?",
            "How can you align your daily actions more closely with your core values and beliefs?",
            "If you could make one contribution to the world, what would it be?",
            "What brings you the most peace, and how can you experience more of it?",
            "What would your life look like if you fully lived in alignment with your purpose?",
        ],
    },
    {
        uid: "relationships-social-connection",
        name: "Relationships and Social Connection",
        description: "Romantic Relationships (Marriage/Partnership), Work-Life Balance for Moms/Parents, Raising Children, Supporting Teenagers, Friendships & Social Circles, Building Community Connections, Networking for Social and Professional Goals.",
        assessment: [
            "Do you feel connected and supported by the people in your life?",
            "How often do you communicate openly and meaningfully with your partner, family, or friends?",
            "Are you dedicating enough time to nurture your relationships?",
            "Do you feel comfortable asking for help or offering support to others?",
            "Are there any relationships in your life that feel draining or need resolution?",
        ],
        sample_statements: [
            "I nurture a loving and passionate relationship with my partner, filled with trust and joy.",
            "I create lasting memories with my children, guiding them with patience and wisdom.",
            "I am surrounded by a supportive and inspiring circle of friends.",
            "I build strong professional networks, connecting with like-minded individuals who uplift and challenge me.",
            "I deepen my relationships by listening, communicating, and showing appreciation daily.",
        ],
        prompt_questions: [
            "What would your ideal relationship with your partner, family, or friends look like?",
            "How would you like to show up for the people you care about the most?",
            "What kind of connections or relationships would make you feel truly fulfilled?",
            "Imagine hosting a gathering with your closest loved ones—what would it look and feel like?",
            "How can you bring more love, fun, and authenticity into your relationships?",
        ],
    },
    {
        uid: "family-parenting",
        name: "Family and Parenting",
        description: "Household management, self- care for busy parents, creating a healthy family environment, bonding time with children, supporting kids, teaching life skills.",
        assessment: [
            "Are you spending enough quality time with your family?",
            "Are there specific ways you could better support your partner in parenting?",
            "What is one thing you can do this week to strengthen your family bond?",
            "How well/ How often do you communicate with your children?",
            "What is one habit you could improve to better connect with your kids?",
        ],
        sample_statements: [
            "I create a nurturing and joyful environment for my family.",
            "I raise confident and compassionate children.",
            "I build meaningful family traditions that strengthen our bonds.",
            "I communicate openly and respectfully with my partner.",
            "I support my children’s education and growth, encouraging their unique talents.",
            "I foster emotional intelligence in my children, helping them navigate challenges.",
        ],
        prompt_questions: [
            "What traditions or rituals would you like to create with your family?",
            "How would you like to strengthen your bond with each family member?",
            "How can you create a family environment that fosters love and growth?",
            "What does a perfect day look like for your family?",
            "How can you support your partner and children in achieving their dreams?",
        ],
    },
    {
        uid: "personal-growth-education",
        name: "Personal Growth and Education",
        description: "Lifelong Learning & Skill Development, Pursuing Personal Goals & Dreams, Emotional Intelligence Development, Overcoming Limiting Beliefs, Building Confidence & Self-Esteem, Education & Certification.",
        assessment: [
            "Have you set clear goals for your personal development?",
            "How often do you invest time in learning new skills or gaining knowledge?",
            "Are you actively challenging yourself to step out of your comfort zone?",
            "Do you feel like you’re making meaningful progress toward becoming your best self?",
            "What limiting beliefs or fears might be holding you back?",
        ],
        sample_statements: [
            "I am constantly learning, reading, and acquiring new skills that enrich my life and career.",
            "I set and achieve personal goals that align with my passions and purpose.",
            "I overcome fears and limiting beliefs, stepping into my fullest potential.",
            "I approach life with curiosity, embracing challenges as opportunities to grow.",
            "I cultivate self-awareness, understanding my strengths and areas for improvement.",
        ],
        prompt_questions: [
            "What is one personal challenge or fear you’d love to conquer, and how would it feel to overcome it?",
            "What skills or knowledge do you dream of mastering, and how could they transform your life?",
            "How would your life look if you became the best version of yourself?",
            "What inspires you to grow, and how can you bring more of that into your life?",
            "If you had unlimited time and resources, what would you dedicate yourself to learning or improving?",
        ],
    },
    {
        uid: "fun-recreation",
        name: "Fun and Recreation",
        description: "Hobbies & Creative Expression, Travel & Adventure, Relaxation & Leisure Activities, Family Fun & Bonding Activities, cultivating Joy and Playfulness.",
        assessment: [
            "How often do you engage in activities that bring you joy or relaxation?",
            "Are you making time for hobbies or creative pursuits that you enjoy?",
            "Do you feel balanced between work and play in your life?",
            "When was the last time you explored something new or adventurous?",
            "Are there opportunities to incorporate more fun or spontaneity into your routine?",
        ],
        sample_statements: [
            "I regularly engage in hobbies that bring me joy and allow my creativity to flourish.",
            "I explore the world through travel, immersing myself in new cultures and experiences.",
            "I make time for laughter, play, and relaxation with family and friends.",
            "I express myself creatively through art, music, writing, or other forms of self-expression.",
            "I embrace spontaneity and adventure, adding excitement to my routine.",
        ],
        prompt_questions: [
            "What is one adventure or experience you’ve always wanted to try but haven’t yet?",
            "If you had a full day to dedicate to fun and creativity, what would you do?",
            "How can you bring more joy and playfulness into your daily routine?",
            "What creative projects or hobbies would you pursue if there were no limitations?",
            "If your life were a highlight reel of fun and excitement, what would it include?",
        ],
    },
    {
        uid: "physical-environment",
        name: "Physical Environment",
        description: "Creating a Comfortable Home, Organizing & Decluttering Spaces, Living in Alignment with Nature (Sustainability), Creating a Productivity-Enhancing Workspace.",
        assessment: [
            "Do you feel comfortable and inspired in your home or workspace?",
            "How organized is your living and working space? Are there areas that need attention?",
            "Does your environment support your goals, productivity, and well-being?",
            "Are there any changes you could make to improve the functionality or aesthetics of your space?",
            "How well does your physical environment align with your values, such as sustainability?",
        ],
        sample_statements: [
            "I create a home that feels peaceful, organized, and welcoming.",
            "I design a workspace that inspires focus, creativity, and productivity.",
            "I maintain a clutter-free environment that supports my mental clarity.",
            "I live in harmony with nature, adopting sustainable and eco-friendly practices.",
            "I personalize my spaces to reflect my style, values, and goals.",
        ],
        prompt_questions: [
            "What does your ideal home or workspace look and feel like?",
            "How can you transform your environment to inspire creativity and productivity?",
            "What changes would make your home a sanctuary of peace and relaxation?",
            "How can you make your physical space align better with your values and lifestyle?",
            "What is one thing you can add or remove from your environment to bring more joy?",
        ],
    },
    {
        uid: "community-contribution",
        name: "Community and Contribution",
        description: "Volunteering & Giving Back, Making a Positive Community Impact, Advocacy and Supporting Social Causes.",
        assessment: [
            "Are you actively involved in your community or contributing to causes you care about?",
            "Do you feel connected to the people and organizations around you?",
            "How often do you volunteer or use your skills to help others?",
            "What positive impact have you made in your community recently?",
            "Are there new opportunities for you to contribute or give back in meaningful ways?",
        ],
        sample_statements: [
            "I actively contribute to causes I care about, making a meaningful impact.",
            "I volunteer regularly, giving my time and skills to support others.",
            "I foster a sense of belonging by building connections in my community.",
            "I mentor and support others, sharing my experiences to help them grow.",
            "I advocate for social causes, using my voice and resources to drive positive change.",
        ],
        prompt_questions: [
            "What kind of impact do you dream of making in your community?",
            "How can you use your unique talents to help others?",
            "What causes or issues are you most passionate about supporting?",
            "If you were a role model in your community, what would you want to be known for?",
            "What legacy do you want to leave through your contributions to others?",
        ],
    },
    {
        uid: "career-work",
        name: "Career and Work",
        description: "Career/Work Advancement, Side Hustles/Passion Projects, Leadership/Team Dynamics, Professional Networking, Productivity & Time Management, Innovation & Creative Problem-Solving.",
        assessment: [
            "Do you feel fulfilled and motivated in your current role or career path? Why or why not?",
            "Are you taking consistent steps to improve your skills or advance your professional goals?",
            "How well do you balance the demands of your work with your personal well-being?",
            "How strong are your professional relationships or networks, and are you nurturing them effectively?",
            "What obstacles or challenges are preventing you from reaching your full potential at work?",
        ],
        sample_statements: [
            "I am leading a successful team, inspiring innovation and driving results in my industry.",
            "I enjoy my job and continuously contribute to my team.",
            "I am continuously learning and expanding my skill set to stay ahead in my field.",
            "I balance a thriving career with a fulfilling personal life, feeling energized and accomplished.",
            "I am recognized as a thought leader, contributing to my field and mentoring others.",
        ],
        prompt_questions: [
            "If you could design your dream job, what would that look like?",
            "What legacy do you want to leave in your industry or profession?",
            "How would you like to feel at the end of each workday?",
            "What professional challenge or goal excites you the most right now?",
            "If success was guaranteed, what bold career move would you make today?",
        ],
    },
    {
        uid: "entrepreneurship-business",
        name: "Entrepreneurship and Business",
        description: "Business Strategy & Scaling, Balancing Work and Family Life, Innovation and Idea Generation, Networking & Brand Building.",
        assessment: [
            "Do you have a clear vision and strategy for your business’s future?",
            "How effectively are you managing your time and delegating tasks?",
            "Are you regularly seeking feedback and learning from your mistakes?",
            "How well are you balancing your entrepreneurial goals with your personal life?",
            "What new opportunities or innovations could you explore to grow your business?",
        ],
        sample_statements: [
            "I have built a successful business that provides financial freedom.",
            "I embrace innovation, constantly creating new opportunities for growth.",
            "I lead with integrity, inspiring my team to achieve shared goals.",
            "I balance entrepreneurship with personal time, avoiding burnout and staying motivated.",
            "I make a positive impact in my industry and community through my business ventures.",
        ],
        prompt_questions: [
            "What would your dream business look like if resources and time were unlimited?",
            "How do you envision impacting your industry or community through your business?",
            "What motivates you most about your business, and how can you build on that?",
            "If you achieved everything you wanted in your business, what would your life look like?",
            "What bold or innovative ideas are you excited to bring to life in your business?",
        ],
    },
    {
        uid: "finances",
        name: "Finances",
        description: "Financial Stability & Wealth Building, Budgeting & Financial Planning, Saving & Investing, Debt Management, Wealth creation.",
        assessment: [
            "Do you have a clear understanding of your financial situation, including savings, debt, and expenses?",
            "Are you consistently sticking to a budget or financial plan?",
            "How confident do you feel about handling unexpected expenses or emergencies?",
            "Are you making progress toward your long-term financial goals, such as savings or investments?",
            "How comfortable are you addressing or discussing your financial concerns?",
        ],
        sample_statements: [
            "I have achieved financial independence, allowing me to pursue my passions freely.",
            "I save and invest wisely, ensuring long-term stability and generational wealth.",
            "I live debt-free, with a clear and confident understanding of my financial goals.",
            "I manage my finances effortlessly, enjoying both security and occasional indulgences",
        ],
        prompt_questions: [
            "What does financial freedom mean to you, and how would your life change if you achieved it?",
            "If money weren’t a concern, what passions or causes would you pursue?",
            "What would it look like to have complete control and confidence over your financial future?",
            "How would you use wealth to create meaningful experiences for yourself and others?",
            "Imagine your ideal financial situation five years from now—what does it include?",
        ],
    },
];
