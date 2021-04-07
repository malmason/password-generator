# Password Generator

**Employee Random Password Generator**

---

## Description

This project includes starter code to generate a random password based on criteria provided by the user. Currently, the logic to generate the password is missing and need to be added successfully to meet the project goals.

---

## Criteria

- Prompt the user for a password length between 8 and 128 characters.
- Prompt the user for a response to 4 password options to be included.
  1. Include Special Characters?
  2. Include Capital Letters?
  3. Include Lower Case Letters?
  4. Include Numbers?
- Based on the answers provided, generate the random password to display on the form.

---

## Steps used

1. Created a generatePassword function since one didn't exist.
2. Created variables to store password length, boolean responses for the 4 prompts, 4 strings to store the allowed characters, a search string built from the 4 options chosen.
3. Validated passwordLen variable, if criteria failed, alert user and call generatePassword again.
4. If passwordLen passes validation, use 4 confirm boxes to get a yes no response from the user.

   > **Note** I used confirm since javascript doesn't have a built in "Yes/No" prompt.
   
5. Used an If construct to build the randomStringToSearch based on the boolean responses.
6. Looped through the string and assigned a new string based on a random position in the search string and that met the length requested by the user.
7. Cleared out the variables to allow for a new password to be generated if the user clicked the button again.
8. Added logic to exit the function if the user clicked on Cancel in response to the first prompt for passwordLen.

---

## Contact 📱

Malcolm Mason - [Github](https://github.com/malmason) Email: [Malcolm](mailto:malmason66@gmail.com) 📧

---

&copy; 2021 Malcolm Mason
