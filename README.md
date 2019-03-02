# curriculum-mapper-poc

Live demo https://hy-mapper.github.io/

More info in deployment repository https://github.com/hy-mapper/hy-mapper.github.io

## Features for application

- Students can "vote" for prequisite topics for a course
  - Students can see list of courses available for voting
  - Students do not have to sign in to vote
- Teachers can add topics for courses
  - no sign in, just a special link as auth
- Students can add a topic for a course
- Teachers ans students can see results for a course
- Teachers can accept new topics (created by students)
  - Teachers see student-created topics in a different color in results
- Teachers can reset votes
- Teachers can add new courses

**Extra**

- Votes are connected to target course topics

**Extra 2**

- Optional: Students cannot see results before voting
  - Teachers can see results with a special link?
  - Students get a view-only link after voting
- Optional: Light-weight sign in
  - Registering: press a button -> site generates a long hash username -> users needs to remember only that to sign in
  - Optional: save hash username to localstorage
  - Three levels
    - Students: View and vote
    - Teachers: Edit topics, add courses
    - Admins: Create teacher usernames

## Developing

To run locally:

- git clone
- cd curriculum-mapper-poc
- npm install
- npm start

## Deployment

- npm run build
- cd build
- git push

Note: init build dir as git repo to deploy to github pages