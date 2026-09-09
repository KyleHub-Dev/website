# Content maintenance

## Projects

`src/data/site.ts` owns project selection, categories, repository identities and
German and English descriptions. Keep the list curated. Add a project when its
repository is public and its purpose can be described accurately.

Check descriptions against the project's README or implementation. Write a short
sentence about what it does in each language. Keep development-stage qualifications
when they affect what a visitor can expect. Choose a category by purpose rather
than implementation language. Repository links remain the primary action.

Descriptions are local content, so editing a repository's GitHub description does
not change the website. Update both translations when the project's purpose
changes. Homepage rendering requires no GitHub token or metadata request.

Both homepage routes render `src/components/HomePage.astro`. Change the shared
markup there and the localized introduction in `src/data/site.ts`.

## Legal pages

The central pages are `/impressum`, `/datenschutz` and `/agb`, with English
versions at `/en/impressum`, `/en/privacy-policy` and `/en/terms`. Each also has a
`.txt` export. Public services in the covered domain family should link to these
pages, with terms linked where relevant to the service.

`src/data/legal.ts` owns the texts. `src/data/legalRegistry.ts` owns the covered
domain families. `src/data/site.ts` owns the public operator/contact details.
Services with a different operator or processing arrangement need appropriate
separate disclosures.

Before changing claims about hosting, accounts, processors or retention, check
the relevant service's actual deployment and operating records. A repository move
does not establish that a service's hosting or processing changed. Preserve
necessary qualifications in both languages.

After changing legal content, routes, the registry or validator, run:

```sh
pnpm run legal:validate
pnpm run build
```

The validator checks selected source markers and registry declarations. It does
not prove legal completeness, deployed processing behavior, or route availability.
Open the affected HTML and text routes in both languages after building.
