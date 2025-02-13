<script lang="ts">
    import { goto } from "$app/navigation";

    const summary = () => goto("./summary");
    const feedback = () => goto("./feedback");
</script>

<article class="prose">
    <h1>Congrats! You Did It!</h1>

    <p>
        You’ve just taken a huge step toward designing your best life!
        By completing this exercise, you’ve gained clarity on where you are, where you want to go, and what truly matters to you.
        You’ve explored the <strong>Wheel of Life</strong>, set meaningful goals,
        and created a vision for your future — all in just a few steps!
    </p>

    <p>
        And the best part?
        You now have a personalized life plan in hand, ready for action.
        While the full app is still in the works, <strong>your input is shaping something truly powerful</strong>.
    </p>

    <p>Thank you for being part of this journey — your feedback is invaluable!</p>

    <button type="button" class="big" onclick={summary}>View and Print Summary</button>
    <button type="button" class="big" onclick={feedback}>Complete Feedback Survey</button>
</article>
