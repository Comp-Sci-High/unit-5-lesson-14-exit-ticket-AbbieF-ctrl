// Create a function that tests the post route handler [2 pts]

async function testPost() {
    try {

        const response = await fetch("/create-potion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
    label: "Invisibility potion",
    effect: "Causes objects and living things to become invisible",
    ingredients: "Chameleon skin",
    color: "Green",
    isExplosive: false
            }).save()

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
testPost()
