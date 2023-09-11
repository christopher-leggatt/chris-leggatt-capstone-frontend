Notes on Capstone:

-as of 06/9/2023 (commit 20198f6), I will likely have to do away with many attempts at DRY code in order to get out minimum viable product. What I implemented in the aforementioned commit would be how I would structure any subsequent components if I had the time

Deleted:
-staffpicksheader 

-categories and category images would ultimately be something that the admin could edit; currently, they are simply loaded as assets from the backend 
-added a very hasty About page just for sake of completion... to be developed
-removed Stores page - tbd
-added SignIn page as template from MUI site - non-functional, for sake of completeness
the logo in HomeHeader is meant to be a little offset
-ideally, an admin function would be able to deploy a number of carousels generatively, such as Staff Picks, Sale Items, etc. Unfortunately, there was no time to implement such
-originally, clicking on the specific categories in the CategoriesCarousel would bring the user to a page listing all products from said category, where they would have a full sortby/orderby functionality, clickable input lists to refine search by potency, brand, strain, etc. Again, I didn't have time for that, either. The timesink/tedium of having to build a full list of products for the API wasn't feasible; I had to settle for 3 products from each category.

