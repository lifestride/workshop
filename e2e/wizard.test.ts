import { expect, test } from "@playwright/test";

test("Landing page has top-level heading", async ({page}) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
});

test("Landing page displays Next button", async ({page}) => {
    await page.goto("/");
    await expect(page.locator("button.next").first()).toBeVisible();
});

test("Landing page does not display Back button", async ({page}) => {
    await page.goto("/");

    // The Back button should not be visible on the first step
    await expect(page.locator("button.back").first()).not.toBeVisible();
});

test("Landing page displays name field with correct attributes", async ({page}) => {
    await page.goto("/");

    // Get the name input field by the test-specific ID
    const nameField = page.getByTestId("name");

    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEnabled();
    await expect(nameField).toHaveRole("textbox");
    await expect(nameField).toHaveAttribute("type", "text");
    await expect(nameField).toHaveAttribute("maxlength", "16");
    await expect(nameField).toHaveAttribute("placeholder");
    await expect(nameField).toHaveValue(""); // check that field is empty by default
});
