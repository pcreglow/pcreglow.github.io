# [GitHub API](https://developer.github.com/v3/)

**How does the API handle authentication?**

[Basics of Authentication](https://developer.github.com/guides/basics-of-authentication/)

**Do I need to authenticate?**

[Getting Started - Authentication](https://developer.github.com/guides/getting-started/#authentication)
No, but best practice is "to do anything exciting with GitHub, you must authenticate". Authenticated users can make up to 5,000 requests per hour.

**What can I do with an unauthenticated request?**

Unauthenticated clients are limited to 60 requests per hour.

**How can I authenticate my request? (3 ways)**

The three ways to handle authentication include:

Basic authentication (the easiest way)

  $ curl -u "username" https://api.github.com

OAuth2 Token (sent in a header)

  $ curl -H "Authentication: token OAUTH-TOKEN" https://api.github.com

OAuth2 Token (sent as a parameter)

  $ curl https://api.github.com/?access_token=OAUTH-TOKEN

**How do I ask the API for...**

[User](https://developer.github.com/v3/users/)

**The profile information for a specific user?**

To get the profile for a single user use:

  GET /users/:username

For an authenticated user use:

  GET /user

**The repository listing for a specific user?**

[Repos List](https://developer.github.com/v3/repos/#list-user-repositories)

To ask for the repository list of a user use:

GET /users/:username/repos

**The recent, public activity for a specific user?**

[List Feeds](https://developer.github.com/v3/activity/feeds/#list-feeds)

**Is there a limit to the number of requests I can make?**

[Rate Limits](https://developer.github.com/v3/#rate-limiting)

Yes! Authenticated users are limited to 5,000 requests per hour.

unauthenticated users are limite to 60 requests per hour (so its a great idea to authenticate).

The returned HTTP headers of any API request will show your current rate limit status

**Is there a way of extending that limit?**

You can contact GitHub to request a higher rate limit for your application.
It is expected that normal rates limits should be the target of your application.

**What happens when I hit the limit?**

Once you go over the rate limit, an error message will appear. If you hit a rate limit, back off from making requests! Try again later when permitted to do so. Failure to back off from making requests will result in the banning of your app.

Using a conditional request that returns a 304 message does not count against your rate limit.

[Conditional Requests](https://developer.github.com/v3/#conditional-requests)

**What if there is a lot of data returned?**


**How can I ask for more (or less) data from a request?**
**How do I know that there is more data available?**

[Traversing with Pagination](https://developer.github.com/guides/traversing-with-pagination/)

What are the endpoints for fetching...
the profile data for a user?
the organizations a user belongs to?
the repositories a user has created?
a filtered list of repositories?
a sorted list of repositories?
public events for a user?
When fetching public events for a user...
How many results are returned by default?
What limitations exist on fetching more results?
What is the basic structure of the results?
What fields are included in each result?
What are the data types for each field?
What are some of the different values for the type field?

How can I use the Github API to...
get all the comments for a particular issue?
add a comment to an issue?

How can I use the jQuery API to...
get the HTML contents of an element?
create a new HTML element?
add an HTML element to the page?
How can I use the Lodash API to...
replace placeholders with values from an object?
repeat code for every item of an array?

# [Etsy API Documentation](https://www.etsy.com/developers/documentation)

How do I make API requests?


What is the base URL?

`https://openapi.etsy.com/v2/listings/:listing_id`

Are there any headers or query parameters required?


What kind of response should I expect?

The Etsy API handles multiple output formats. Currently, the only supported formats are JSON and JSONP

How does the API handle authentication?


Do I need to authenticate?

The Etsy API requires an application key that is provided during app registration.


What can I do with an unauthenticated request?

How can I authenticate my request?

How do I ask the API for...

A list of products belonging to a specific category or collection?

Details about a specific product? What details are provided?

The main and additional images for a product?

Is there a limit to the number of requests I can make?

Users are allowed 10,000 requests per 24-hour period, with a limit of 10 queries per second.

Is there a way of extending that limit?
What happens when I hit the limit?
What if there is a lot of data returned?
How can I ask for more (or less) data from a request?
How do I know that there is more data available?


What Resource in the API represents...
an individual product?

[Listing](https://www.etsy.com/developers/documentation/reference/listing)


a group or collection of products?

[Category](https://www.etsy.com/developers/documentation/reference/category)


images associated with a product?

[Etsy Images](https://www.etsy.com/developers/documentation/getting_started/images#section_uploading_images)


sizes and colors for a product?

[Listing Variations](https://www.etsy.com/developers/documentation/getting_started/variations#section_managing_variations_of_listings)


What actions and endpoints exist for each of these Resources?



What parameters do each endpoint require or accept?



What fields are returned for each Resource, specifically:

an individual product?

[Product Fields](https://www.etsy.com/developers/documentation/reference/listing#section_fields)

a group or collection of products?

[Category Fields](https://www.etsy.com/developers/documentation/reference/category#section_fields)

What additional fields can be requested for each?



What is a Taxonomy Resource?

[Taxonomy](https://www.etsy.com/developers/documentation/reference/taxonomy)
