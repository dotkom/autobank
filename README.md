Hvordan kjøre lokalt (om jeg husker riktig hehe). Send mld i slack om det dukker opp en feilmelding):
1) Klon repoet (kjør "git clone https://github.com/dotkom/autobank.git" i mappen du ønsker å klone til).
1) sørg for å ha node.js installert
2) kjør npm install --global yarn i terminalen
3) lag .env.local-fil i root (mappen som heter "autobank") og lim inn tekst fra slack
4) Kjør "yarn dev" i terminalen fra "autobank"-mappen.


# Pennywise Macrosystem

> A website created for managing Bankom tasks and applications bullt with [Nextjs](https://nextjs.org)

## purpose

This a website to gather all information for bankom, and handle request from outside the comitee. And allow bankom to organize its internal systems
This will include a remaking kvittering.online.ntnu and faktura.ntnu.no into a single website along with relevant FAQ and a new form for requests to onlinepotten.  
The Purpose of this is to create a dashboard for Bankom with the abaility to:

- Approve or deny requests to all forms, and give the users a chance to change the request if something is wrong without having to send a new request
- Assign recipts and invoices to events
- keep track of money spent for events and budget items

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed. Preferably version 14^

```sh
#install yarn
npm install --global yarn
# Install dependencies
yarn
# start development server
yarn dev
# Run the bot
yarn build
```

## Code organization

> Generally follow [nextjs guidelines](https://nextjs.org/docs)

[File structure](##file-structure)

### Pages

#### Public

_home_ - landing page

_recipt_ - create a porposal/request for a recipt to be payed back
request shuold apprear on the adminpage and be able to be denied and changed.

_Onlinepotten_ - create request for economical support for work that helps Online as a organization

_FAQ_ - A simple FAQ for all relevant economy related questions

```
/
/recipt
/onlinepotten
/faq
```

#### Admin

_home_ - landing page

_idk_ - A page for connecting recipts, invoices ....

_recipt_ - handle recipts and deny with the possibility for the user ot improve on the request and edit simple mistakes with the user getting an email of the change  
also have the ability to se former recipts and register new ones as paid

_Onlinepotten_ - deny and apporove request as well as se amount spent paid and waiting for recipts belonging to the request

_FAQ_ - A simple FAQ for all relevant economy related questions just for bankommembers

```
/admin
/admin/idk
/admin/recipt
/admin/onlinepotten
/admin/faq
```

### Api

## Backend

All connectons to the db

## Technology

### Frontend

- nextjs
- tailwindcss

### Api

- nextjs API

### database

- postgres db?

## Testing

in the future some e2e tests and unit tests

## File Structure

```bash
/.next # built website
/components # Components for the pages
/interfaces # types and interfaces
/node_modules
/pages # Pages for urlaccess
/styles # CSS styles that doesn't fit tailwindcss
/utils # utilities
.ignore # Files to ignore in git
CONTRIBUTING.md # guidelines for contributions
next-env.d.ts # do not edit
package.json
postcss.config.js
README.md
tailwind.config.js # location of theme and css classgenerations
tsconfig.json
yarn.lock
```

## Contributing

If you have suggestions for how Pennywise Macrosystem could be improved, or want to report a bug, open an issue!

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## References

empty
