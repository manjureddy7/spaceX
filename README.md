## Application Structure

- Application contains Left Pane & Right Pane.
- Left Pane has filter section where user can filter launches filter by Launch Year, Successful launch, Successful Landing.
- Currently Successful landing filter is disable because given API doesn't contain "launch_landing"
- Extra Added functionalities (I have added clear all filters functionality) where user can remove all applied filters
- Selected Filters are highlighted with DARK color's.
- Right Pane gives information about all the launches.
- I have added new header to indicate the user no.of launches
- Currently the image src from api (links/mission_patch) is not working. So I have added new default image

## Stacks
- Nextjs with ReduxToolkit (which makes state management lot easier)

