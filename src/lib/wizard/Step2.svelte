<script>
    export let nextStep;
    export let prevStep;

    const areas = [
        {
            name: 'Health and Fitness',
            description: 'Nutrition & Diet, Exercise & Fitness, Overall Healthcare, Energy Management, Rest/Sleep Quality.'
        },
        {
            name: 'Emotional Well-Being',
            description: 'Stress Management, Emotional Resilience, Self-Care Practices, Coping with Anxiety/Depression, Therapy & Mental Wellness Resources.'
        },
        {
            name: 'Spirituality/Purpose',
            description: 'Mindfulness Practices (Meditation, Journaling), Religious/Spiritual Life, Seeking Purpose & Meaning, Legacy & Contribution to the World, Gratitude Practices.'
        },
        {
            name: 'Relationships/Social Connection',
            description: 'Romantic Relationships (Marriage/Partnership), Work-Life Balance for Moms/Parents, Raising Children, Supporting Teenagers, Friendships & Social Circles, Building Community Connections, Networking for Social and Professional Goals.'
        },
        {
            name: 'Parenting & Family',
            description: 'Household management, self- care for busy parents, creating a healthy family environment, bonding time with children, supporting kids, teaching life skills.'
        },
        {
            name: 'Personal Growth/Education',
            description: 'Lifelong Learning & Skill Development, Pursuing Personal Goals & Dreams, Emotional Intelligence Development, Overcoming Limiting Beliefs, Building Confidence & Self-Esteem, Education & Certification.'
        },
        {
            name: 'Fun and Recreation',
            description: 'Hobbies & Creative Expression, Travel & Adventure, Relaxation & Leisure Activities, Family Fun & Bonding Activities, cultivating Joy and Playfulness.'
        },
        {
            name: 'Physical Environment',
            description: 'Creating a Comfortable Home, Organizing & Decluttering Spaces, Living in Alignment with Nature (Sustainability), Creating a Productivity-Enhancing Workspace.'
        },
        {
            name: 'Community and Contribution',
            description: 'Volunteering & Giving Back, Making a Positive Community Impact, Advocacy and Supporting Social Causes.'
        },
        {
            name: 'Career/Work',
            description: 'Career/Work Advancement, Side Hustles/Passion Projects, Leadership/Team Dynamics, Professional Networking, Productivity & Time Management, Innovation & Creative Problem-Solving.'
        },
        {
            name: 'Entrepreneur/Business',
            description: 'Business Strategy & Scaling, Balancing Work and Family Life, Innovation and Idea Generation, Networking & Brand Building.'
        },
        {
            name: 'Finances',
            description: 'Financial Stability & Wealth Building, Budgeting & Financial Planning, Saving & Investing, Debt Management, Wealth creation.'
        },
    ];
</script>

<article class="prose max-w-full">
    <h2>Select your Life Areas</h2>
    <section>
        <p>After your previous reflection, let’s now select your own areas of life.</p>
        <p>Below are some examples of the most common areas of life people choose from. Most people usually pick between 4 to 8 areas of life.</p>
        <p>You do not need to select all these areas; start small and then you can expand to other areas.</p>

        <ul>
            {#each areas as area}
                <li><strong>{area.name}</strong>: {area.description}</li>
            {/each}
        </ul>
    </section>
    <section>
        <h3>Activity</h3>
        <form>
            <p>After reviewing all the different areas of life, select the areas you would like to focus:</p>
            <ul>
                {#each areas as area, i}
                    <li>
                        <input type="checkbox" id="area-{i}" />
                        <label for="area-{i}">{area.name}</label>
                    </li>
                {/each}
            </ul>
            <button type="button" on:click={prevStep}>Back</button>
            <button type="button" on:click={nextStep}>Next</button>
        </form>
    </section>
</article>
