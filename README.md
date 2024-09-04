# SCSS snippets repository for Moodle Boost Union Theme

## About

The [Boost Union](https://github.com/moodle-an-hochschulen/moodle-theme_boost_union) theme for Moodle allows administrators to enable / use SCSS snippets to enhance and style their particular Moodle instance.

The theme ships with a [small default set of SCSS snippets](https://github.com/moodle-an-hochschulen/moodle-theme_boost_union/tree/main/snippets/builtin).

In addition to these, the SCSS snippets in this repository are meant to be uploaded in the Boost Union SCSS snippets setting page by the administrator. Furthermore, a way to automatically download and include these SCSS snippets is on Boost Union's roadmap.

## SCSS snippet structure

### Components of a SCSS snippet

A SCSS snippet consists of two components:

- A simple plaintext SCSS file (.scss)
- An optional image file, (.webp, .png, .jpg, .jpeg, .gif - ideally widescreen aspect ratio)

Both files must share the same arbitrary filename and just differ by their file suffix.

### SCSS snippet file metadata

A SCSS snippet file contains, beside the necessary SCSS code, several metadata fields which allow us to categorize and manage the pile of SCSS snippets.

These are attributes that are defined to be added at the top of the SCSS file:

- `Snippet Title`: The title of the snippet which will be shown in the snippet list in Boost Union
- `Scope`: A tag which highlights the scope of the snippet (see below)
- `Goal`: A tag which highlights the goal of the snippet (see below)
- `Description`: A few sentences which describe the snippet for humans
- `Creator`: The creator of the snippet which will be shown in the snippet list in Boost Union
- `Tested on`: A short information on which Moodle version and with which browser the snippet was tested
- `Usage note`: An (optional) usage note to be shown in the snippet list in Boost Union

#### List of scopes

Each particular snippet should have a `Scope` tag and thereby be assigned to a single particular scope. The scope does not have a technical impact, it is rather an important metadata for structuring the pile of available snippets:

- `global`: These snippets affect the entire site
- `course`: These snippets affect only the course context
- `dashboard`: These snippets affect only the dashboard of a user

The list of scopes is not necessarily limited to these existing scopes, additional scopes can be added in the future.

#### List of goals

Each particular snippet should have a `Goal` tag and thereby be assigned to a single particular goal. The goal does not have a technical impact as well, it is a metadata for structuring the pile of available snippets as well:

- `eyecandy`: These snippets focus on the (visual) styling of Moodle, especially to deviate from Moodle's and Bootstrap's default appearance
- `bugfix`: These snippets fix Moodle CSS bugs and glitches, ideally temporarily until Moodle core fixes it itself
- `accessibility`: These snippets try to Moodle more accessible
- `easeofuse`: These snippets try to make Moodle easier to use
- `devsonly`: These snippets add styling that mainly help developers who develop in Moodle

The list of goals is not necessarily limited to these existing goals, additional goals can be added in the future.

## Repository structure

This repository is, for now, structured by snippet goals with each goal having a top level folder. Within this folder, all snippets are located on the same level

## Using the community snippets in Boost Union

You can use all of these snippets here directly in Boost Union:

* Download this repository as ZIP file
* In your Moodle instance, go to Site administration -> Appearance -> Boost Union -> SCSS snippets -> Settings
* On this settings page, enable the 'Enable uploaded snippets' setting
* Upload the ZIP file into the 'Upload snippets' setting and save the settings page. Upon saving, Boost Union will automatically unpack the ZIP file.
* Go to Site administration -> Appearance -> Boost Union -> SCSS snippets -> Overview
* Enable the particular SCSS snippets which you would like to use

## Create and contribute your own snippet

You are welcome to create your own SCSS snippet based on the [boilerplate](https://github.com/moodle-an-hochschulen/moodle-theme_boost_union_snippets/tree/main/boilerplate) and submit your new SCSS snippet as a pull request to this repository.