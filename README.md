## Übersicht Widget Template

[http://tracesof.net/uebersicht/](http://tracesof.net/uebersicht/)


### Documentation
All of the possible default functions are included in `index.jsx`. These are pulled from [the official documentation](https://github.com/felixhageloh/uebersicht).


### Setup
1. Clone the repository. Into your Übersicht widgets folder.
2. Update `widget.json` with your information.
3. Update `package.json` with your information.
4. Quit and re-open Übersicht.
5. Your widget should be running.


### Distribution
Use the Makefile to create a distribution version of the widget.


### Übersicht, Accessibility, and clicking links
Übersicht has a preference for an Interaction Shortcut that allows widget elements to be clicked while holding a configured modifier key. Out of the box, Übersicht doesn't ask for Accessibility access, so this preference doesn't appear to work at first. Add Übersicht to the list of apps in System Preferences > Security & Privacy > Privacy > Accessibility in order for this to work as expected.

Once the Interaction Shortcut is allowed and configured, the story titles and discussion links are clickable and will open in your default browser.