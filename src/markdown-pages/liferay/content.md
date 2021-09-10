---
slug: "/liferay/content-modules"
title: "Content Module"
---

## Instructions for hiding and showing content


Note: All editing is done on the ‘Staging’ environment of the Brown U Mobile site.

### To add existing content to the Mobile App
Before adding content, check that the permissions of the content you are trying to add is set so a Guest can View.

* Open the “Content & Data” menu in the sidebar.
* Select “Content Sets”
* Select the content set that you wish to edit. These are named for the module they correspond with in the Mobile App.
* Click the “Select” button in the upper right corner
* Choose the content type of the item you wish to add to the Mobile App, IE “Basic Web Content”
* In the open dialog box, select the item(s) you wish to add to the App by clicking the checkbox next to item(s).
* Click the blue “Add” button on the bottom left.
* Follow the “Publishing your changes” instructions below


### To remove content from the Mobile app

* Open the “Content & Data” menu in the sidebar.
* Select “Content Sets”
* Select the Content set that you wish to edit. These are named for the module they correspond with in the Mobile App.
* Identify the entry you wish to remove.
* Click the remove icon, an ‘x’ in a circle, on the right side of the items row.
* Follow the “Publishing your changes instructions below”

### Publishing your changes

* Open the “Publishing” menu in the sidebar.
* Select “Staging”.
* Click the blue square with the plus sign in the upper right corner.
* Give the action a title in the top text field, for example “Mobile: 2/17/2021 Adding test content to Quiet Period”
* Scroll to the bottom of the page.
* Check the “Publish Permissions: If this is checked, the permissions assigned for the exported pages and individual portlet windows are included.’ checkbox
* Click the “Publish to Live” button

### Assigning Permissions
Permissions in Liferay are very granular. For a role to have access to an asset the role must be assigned permissions to that asset at all layers.

* To set permissions for a Content Set:
* Select “Staging”
* Open the “Content & Data” menu in the sidebar.
* Select “Content Sets”
* Click on the Actions menu (traffic light menu) and choose “Permissions”.  This shows you a table of roles defined in the portal.
* Use the check boxes to grant certain permissions to each appropriate role. You must click Save after you’ve made your selections on a page before leaving the page. Your permission selection will not persist once you navigate from one permission change to the next.
* For content that is to be public, you will enable “View” for the role “Guest”

To set permissions for the Content Entries of a Content Set

* Select “Staging”
* Open the “Content & Data” menu in the sidebar.
* Navigate to the content that is included in the Content Set. 
* Choose “Permissions” from the actions menu to open the table of roles
* Use the check boxes to grant certain permissions to each appropriate role.
* If the asset is stored within a folder, set the permissions for the folder
* If the asset contains an image, navigate to where the image is stored and set the permissions for the image
* If the image is organized within a folder structure it is necessary to ensure the permissions are set for each folder/sub-folders in the structure.
