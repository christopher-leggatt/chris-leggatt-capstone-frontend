A brief timeline of my Capstone...

I had many lofty aspirations and ideas coming into this, until I quickly realized just how much goes into an e-commerce site. I didn't expect to get slowed down so much wrestling with Mui - that was by far my biggest hurdle. I thought I was going to be able to build a whole user and admin login, admin controls for managing product, and I set up my backend with that in mind; I ended up having viable CRUD operations for a frontend I didn't have time to build!

Working with Redux toolkit was a bit of a do, but I ultimately liked using it. Formik is a lot of coding and setup, but was more straightforward than I'd anticipated. All the major pain points came from the styling!

So, ultimately, I do have a general working product, with a few exceptions. It was a LOT of work in the timeframe I had to do it, but I think it turned out decent overall.

Sporadic note on Capstone:

-as of 06/9/2023 (commit 20198f6), I will likely have to do away with many attempts at DRY code in order to get out minimum viable product. What I implemented in the aforementioned commit would be how I would structure any subsequent components if I had the time

-categories and category images would ultimately be something that the admin could edit; currently, they are simply loaded as assets from the backend 

-added a very hasty About page just for sake of completion... to be developed

-removed Stores page - tbd

-added SignIn page as template from MUI site - non-functional, for sake of completeness
the logo in HomeHeader is meant to be a little offset

-ideally, an admin function would be able to deploy a number of carousels generatively, such as Staff Picks, Sale Items, etc. Unfortunately, there was no time to implement such

-originally, clicking on the specific categories in the CategoriesCarousel would bring the user to a page listing all products from said category, where they would have a full sortby/orderby functionality, clickable input lists to refine search by potency, brand, strain, etc. Again, I didn't have time for that, either. The timesink/tedium of having to build a full list of products for the API wasn't feasible; I had to settle for 3 products from each category.
I got as far as I could on the payment/checkout/confirmation. I'm happy I was able to work with Formik and Yup, at least, and I *almost* had Stripe.

-I wish I had time to implement the search functionality

-there is a lot of code that I ended up commenting out because of time constraints, but I'm leaving it there because it's useful to have the structure, as I will eventually get to it.

