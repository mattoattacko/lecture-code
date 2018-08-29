## Forms and POST

FORMS "POST" differently than Ajax Objects did.
- Each field is a bit of named data
- Use "hidden" fields to hide things from view but still get them


Demo Code
- Add an "add-link" route and view (GET)
  - Form with all fields
  - Pass in the category name and id from the links page
    - Make them hidden fields so you can get them later
  - Need to now pass both of those to all pages ;)
- Demo what happens with that POST data in the network tab
- Log it out in the console on the server side
- Build out the SQL
- Redirect back to the listings page when done
  - Optionally, show a thank you screen with a preview?
