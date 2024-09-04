# Community Snippet for Moodle Boost Union Theme

The Community Snippets in this repository are available to be turned on and of in the [theme_boost_union](https://github.com/moodle-an-hochschulen/moodle-theme_boost_union) plugin SCSS Snippet setting page. The theme also provide a default set of Snippets [snippets/builtin](https://github.com/moodle-an-hochschulen/moodle-theme_boost_union/tree/main/snippets/builtin).

## Snippet structure
### File attributes
To make the snippet file work, there are required attributes that are needed to add at the top of the SCSS-file to work:

- `Snippet Title`: Provide your own snippet title.
- `Scope:`: Tag your scope. (optional)
- `Goal`: Tag your goal. (optional)
- `Description:` Describe in a few sentence what the snippet does. (recommended)

#### List of Scopes:
The theme provides the following standard Scopes:

- `global`: When something shown on the entire site.
- `course`: When something is only shown in a course context.
- `dashboard`: When something is shown only on the dashboard of a user.

#### List of Goals:
The theme provides the following standard Goals:

- `eyecandy`: Styling to give Moodle some (temp) change (ie. a rainbow for LHBTQ+ week).
- `bugfix`: Fixes a temporary Moodle bug until Moodle fixes it themselfs.
- `accessibility`: Styling to make Moodle more accessible.
- `easeofuse`: To make Moodle easier to use.
- `devsonly`: Styling that can be seen by dev's only.

## Community Snippets
Snippets provided by the community can be found in the [snippets](snippets) folder.

## Creating your own snippet
You can create a snippet for your own with the provided [boilerplate.scss](boilerplate.scss) file.
