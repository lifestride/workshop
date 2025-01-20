<script lang="ts">
    const areas = [
        {
            name: "Health & Fitness",
            questions: [
                "Do you feel energized and physically strong in your daily activities?",
                "Are you consistent in exercising and maintaining a healthy diet?",
                "Have you prioritized regular health checkups and preventive care?",
                "Are you getting enough rest and sleep to support your body’s needs?",
                "Are there any physical discomforts or symptoms you’ve been ignoring?",
            ],
        },
        {
            name: "Emotional Well Being",
            questions: [
                "How often do you feel overwhelmed, stressed, or emotionally drained?",
                "Are you regularly practicing self-care or stress-management techniques?",
                "How well are you coping with challenges or setbacks in your life?",
                "Do you have someone to talk to about your emotions or struggles?",
                "What habits or practices could help you improve your emotional well-being?",
            ],
        },
        {
            name: "Spirituality & Purpose",
            questions: [
                "Do you feel aligned with your values and life purpose?",
                "How often do you engage in practices like meditation or prayer that nurture your spirituality?",
                "Are you making a positive impact on others or contributing to something greater?",
                "Do you feel a sense of gratitude and inner peace in your daily life?",
                "Are there areas in your life where you feel disconnected or lacking meaning?",
            ],
        },
        {
            name: "Relationships & Social Connection",
            questions: [
                "Do you feel connected and supported by the people in your life?",
                "How often do you communicate openly and meaningfully with your partner, family, or friends?",
                "Are you dedicating enough time to nurture your relationships?",
                "Do you feel comfortable asking for help or offering support to others?",
                "Are there any relationships in your life that feel draining or need resolution?",
            ],
        },
        {
            name: "Parenting",
            questions: [
                "Are you spending enough quality time with your family?",
                "Are there specific ways you could better support your partner in parenting?",
                "What is one thing you can do this week to strengthen your family bond?",
                "How well/ How often do you communicate with your children?",
                "What is one habit you could improve to better connect with your kids?",
            ],
        },
        {
            name: "Personal Growth & Education",
            questions: [
                "Have you set clear goals for your personal development?",
                "How often do you invest time in learning new skills or gaining knowledge?",
                "Are you actively challenging yourself to step out of your comfort zone?",
                "Do you feel like you’re making meaningful progress toward becoming your best self?",
                "What limiting beliefs or fears might be holding you back?",
            ],
        },
        {
            name: "Fun & Recreation",
            questions: [
                "How often do you engage in activities that bring you joy or relaxation?",
                "Are you making time for hobbies or creative pursuits that you enjoy?",
                "Do you feel balanced between work and play in your life?",
                "When was the last time you explored something new or adventurous?",
                "Are there opportunities to incorporate more fun or spontaneity into your routine?",
            ],
        },
        {
            name: "Physical Environment",
            questions: [
                "Do you feel comfortable and inspired in your home or workspace?",
                "How organized is your living and working space? Are there areas that need attention?",
                "Does your environment support your goals, productivity, and well-being?",
                "Are there any changes you could make to improve the functionality or aesthetics of your space?",
                "How well does your physical environment align with your values, such as sustainability?",
            ],
        },
        {
            name: "Community & Contribution",
            questions: [
                "Are you actively involved in your community or contributing to causes you care about?",
                "Do you feel connected to the people and organizations around you?",
                "How often do you volunteer or use your skills to help others?",
                "What positive impact have you made in your community recently?",
                "Are there new opportunities for you to contribute or give back in meaningful ways?",
            ],
        },
        {
            name: "Career/Work",
            questions: [
                "Do you feel fulfilled and motivated in your current role or career path? Why or why not?",
                "Are you taking consistent steps to improve your skills or advance your professional goals?",
                "How well do you balance the demands of your work with your personal well-being?",
                "How strong are your professional relationships or networks, and are you nurturing them effectively?",
                "What obstacles or challenges are preventing you from reaching your full potential at work?",
            ],
        },
        {
            name: "Community & Contribution",
            questions: [
                "Are you actively involved in your community or contributing to causes you care about?",
                "Do you feel connected to the people and organizations around you?",
                "How often do you volunteer or use your skills to help others?",
                "What positive impact have you made in your community recently?",
                "Are there new opportunities for you to contribute or give back in meaningful ways?",
            ],
        },
        {
            name: "Career/Work",
            questions: [
                "Do you feel fulfilled and motivated in your current role or career path? Why or why not?",
                "Are you taking consistent steps to improve your skills or advance your professional goals?",
                "How well do you balance the demands of your work with your personal well-being?",
                "How strong are your professional relationships or networks, and are you nurturing them effectively?",
                "What obstacles or challenges are preventing you from reaching your full potential at work?",
            ],
        },
        {
            name: "Entrepreneur/Business",
            questions: [
                "Do you have a clear vision and strategy for your business’s future?",
                "How effectively are you managing your time and delegating tasks?",
                "Are you regularly seeking feedback and learning from your mistakes?",
                "How well are you balancing your entrepreneurial goals with your personal life?",
                "What new opportunities or innovations could you explore to grow your business?",
            ],
        },
        {
            name: "Finances",
            questions: [
                "Do you have a clear understanding of your financial situation, including savings, debt, and expenses?",
                "Are you consistently sticking to a budget or financial plan?",
                "How confident do you feel about handling unexpected expenses or emergencies?",
                "Are you making progress toward your long-term financial goals, such as savings or investments?",
                "How comfortable are you addressing or discussing your financial concerns?",
            ],
        },
    ];
</script>

<article class="prose max-w-full">
    <h2>Self Assessment</h2>
    <section>
        <p>Being aware of your current state is crucial for tracking progress. Soon you will do a self-assessment of the areas you have chosen for your life. The table below contains questions for that would prompt some of your thinking to help you on an initial reflection.</p>
    </section>
    {#each areas as area}
        <section>
            <h3>{area.name}</h3>
            <ul>
                {#each area.questions as question}
                    <li>{question}</li>
                {/each}
            </ul>
        </section>
    {/each}
    <section>
        <h3>Activity</h3>
        <p>Write down your areas and score them from 1 to 10, where 10 is the highest and 1 is lowest.</p>
    </section>
</article>
